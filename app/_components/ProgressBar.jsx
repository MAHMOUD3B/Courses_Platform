"use client";

import React, { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
          setPercentage(0);
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let animationFrame;

    const updatePercentage = () => {
      if (barRef.current && containerRef.current) {
        const barWidth = barRef.current.offsetWidth;
        const containerWidth = containerRef.current.offsetWidth;
        const percent = Math.round((barWidth / containerWidth) * 100);
        setPercentage(percent);

        if (percent < 67 && inView) {
          animationFrame = requestAnimationFrame(updatePercentage);
        }
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(updatePercentage);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [inView]);

  return (
    <div ref={containerRef} className="rounded-xl h-[6px] bg-gray-300 relative">
      <span
        ref={barRef}
        className={`progress-mark relative block rounded-xl bg-green-400 h-full transition-all duration-1000 ease-out ${
          inView ? "w-[67%]" : "w-0"
        }`}
      >
        <span className="absolute -bottom-6 -right-4 text-sm text-gray-600">
          {percentage}%
        </span>
      </span>
    </div>
  );
};

export default ProgressBar;
