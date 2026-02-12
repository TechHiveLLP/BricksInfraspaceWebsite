"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  images: string[];
}

export default function ProjectGallery({
  isOpen,
  onClose,
  projectName,
  images,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const prevIsOpenRef = useRef(isOpen);

  const goToPrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Reset index when gallery opens (track previous state to detect open transition)
  if (isOpen && !prevIsOpenRef.current) {
    setCurrentIndex(0);
    setIsLoading(true);
  }
  prevIsOpenRef.current = isOpen;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <div>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              {projectName}
            </h2>
            <p className="text-gray-400 text-sm">
              {currentIndex + 1} of {images.length} photos
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 transition-colors p-2"
            aria-label="Close gallery"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Main Image Area */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-16 relative">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-6 z-20 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/20 border-t-red-500 rounded-full animate-spin" />
              </div>
            )}
            <img
              src={images[currentIndex]}
              alt={`${projectName} - Image ${currentIndex + 1}`}
              className={`max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-6 z-20 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="p-4 md:p-6">
          <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsLoading(true);
                  setCurrentIndex(index);
                }}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-red-500 scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
