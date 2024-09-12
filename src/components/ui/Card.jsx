// components/ui/card.js
import React from "react";

export function Card({ className, children }) {
  return (
    <div className={`bg-white shadow-md rounded-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
