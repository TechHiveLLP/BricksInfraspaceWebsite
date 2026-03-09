"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  label?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  label,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getPosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return 50;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      return Math.max(0, Math.min(100, percent));
    },
    []
  );

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;
      setSliderPos(getPosition(clientX));
    },
    [isDragging, getPosition]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setSliderPos(getPosition(e.clientX));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setSliderPos(getPosition(e.touches[0].clientX));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none shadow-lg"
        style={{ touchAction: "none" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* After image (full background) */}
        <img
          src={after}
          alt="After restoration"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={before}
            alt="Before restoration"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              width: containerWidth ? `${containerWidth}px` : "100vw",
              maxWidth: "none",
            }}
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none">
          Before
        </div>
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none">
          After
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none ring-4 ring-white/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l-3 3 3 3m8-6l3 3-3 3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Caption */}
      {label && (
        <p className="text-center text-gray-600 font-medium mt-3 text-sm">
          {label}
        </p>
      )}
    </div>
  );
}
