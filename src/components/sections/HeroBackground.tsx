"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function HeroBackground() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "/images/hero/mysore-palace.jpg",
    "/images/hero/hero-bg2.jpeg",
  ];  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Travels in Mysore - taxi services in Mysore hero image ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/30 via-slate-900/40 to-slate-900/50" />
    </div>
  );
}
