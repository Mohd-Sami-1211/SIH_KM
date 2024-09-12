import React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`block w-full px-4 py-2 border rounded-md focus:outline-none ${className}`}
      {...props}
    />
  );
}