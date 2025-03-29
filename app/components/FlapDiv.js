"use client"
import { useState, useRef, useEffect } from "react";

export default function FlapDiv({ title, children, className = "" }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  // Update the height based on the open state
  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open, children]);

  return (
    <div className={`rounded-md overflow-hidden ${className}`}>
      {/* Header with title and toggle icon */}
      <div 
        className="bg-gray-100 px-4 py-2 flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {/* Animated Content */}
      <div
        ref={contentRef}
        style={{ height: height }}
        className="transition-all duration-300 overflow-hidden"
      >
        <div className="px-4 py-2">
          {children}
        </div>
      </div>
    </div>
  );
}
