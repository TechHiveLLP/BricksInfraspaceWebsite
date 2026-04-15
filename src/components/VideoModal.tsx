"use client";

import { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center video-modal-enter"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-10 text-white/80 hover:text-white transition-colors"
        aria-label="Close video"
      >
        <X size={32} />
      </button>

      {/* Video */}
      <div className="relative w-full max-w-5xl mx-4 md:mx-8 aspect-video">
        <video
          ref={videoRef}
          className="w-full h-full rounded-lg"
          controls
          autoPlay
          playsInline
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  );
}
