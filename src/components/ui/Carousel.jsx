// components/ui/carousel.js
import React, { useState } from "react";

export function Carousel({ children, className }) {
  return <div className={`relative ${className}`}>{children}</div>;
}

export function CarouselContent({ children }) {
  return <div className="overflow-hidden">{children}</div>;
}

export function CarouselItem({ children }) {
  return <div className="inline-block w-full">{children}</div>;
}

export function CarouselPrevious({ onClick }) {
  return (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      Prev
    </button>
  );
}

export function CarouselNext({ onClick }) {
  return (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      Next
    </button>
  );
}
