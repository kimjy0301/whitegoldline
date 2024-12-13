"use client";

import { useEffect, useState, useRef } from "react";

interface PromisePageProps {
  title: string;
  content: string;
}

const PromisePage = ({ title, content }: PromisePageProps) => {
  const [opacities, setOpacities] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const fadeSpeed = 50;

  // 줄 배열을 미리 생성
  const lines = content.split("\n").filter((line) => line.trim() !== "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 모든 줄의 opacity를 0으로 초기화
    setOpacities(new Array(lines.length).fill(0));

    if (!isVisible) return;

    let currentLineIndex = 0;
    let isActive = true;

    const fadeInLine = () => {
      if (currentLineIndex < lines.length && isActive) {
        const fadeInterval = setInterval(() => {
          if (!isActive) {
            clearInterval(fadeInterval);
            return;
          }

          setOpacities((prev) => {
            const next = [...prev];
            const currentOpacity = next[currentLineIndex];

            if (currentOpacity >= 1) {
              clearInterval(fadeInterval);
              currentLineIndex++;
              if (currentLineIndex < lines.length) {
                fadeInLine();
              }
              return next;
            }

            next[currentLineIndex] = Math.min(currentOpacity + 0.1, 1);
            return next;
          });
        }, fadeSpeed);
      }
    };

    fadeInLine();

    return () => {
      isActive = false;
    };
  }, [isVisible, lines.length]);

  return (
    <div className="promise-page" ref={elementRef}>
      <div className="promise-content">
        <h2>{title}</h2>
        <div style={{ whiteSpace: "pre-wrap" }}>
          {lines.map((line, index) => (
            <p
              key={index}
              style={{
                opacity: opacities[index] || 0,
                transition: "opacity 0.05s ease-in-out",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromisePage;
