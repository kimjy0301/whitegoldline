"use client";

import { useEffect, useState, useRef } from "react";

interface PromisePageProps {
  title: string;
  content: string;
}

interface Line {
  text: string;
  opacity: number;
}

const PromisePage = ({ title, content }: PromisePageProps) => {
  const [lines, setLines] = useState<Line[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const fadeSpeed = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 50% 이상 보일 때 실행
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setLines([]);
      return;
    }

    const contentLines = content
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((text) => ({ text, opacity: 0 }));

    let currentLineIndex = 0;
    let isActive = true;

    const addNewLine = () => {
      if (currentLineIndex < contentLines.length) {
        setLines((prevLines) => {
          const newLines = [...prevLines];
          if (currentLineIndex === newLines.length) {
            newLines.push({
              text: contentLines[currentLineIndex].text,
              opacity: 0,
            });
          }
          return newLines;
        });

        let opacity = 0;
        const fadeInterval = setInterval(() => {
          if (!isActive || opacity >= 1) {
            clearInterval(fadeInterval);
            if (opacity >= 1) {
              currentLineIndex++;
              if (currentLineIndex < contentLines.length) {
                addNewLine();
              }
            }
            return;
          }

          opacity = Math.min(opacity + 0.1, 1);
          setLines((prevLines) => {
            const newLines = [...prevLines];
            if (newLines[currentLineIndex]) {
              newLines[currentLineIndex].opacity = opacity;
            }
            return newLines;
          });
        }, fadeSpeed);
      }
    };

    addNewLine();

    return () => {
      isActive = false;
    };
  }, [content, isVisible]);

  return (
    <div className="promise-page" ref={elementRef}>
      <div className="promise-content">
        <h2>{title}</h2>
        <div style={{ whiteSpace: "pre-wrap" }}>
          {lines.map((line, index) => (
            <p
              key={index}
              style={{
                opacity: line.opacity,
                transition: "opacity 0.05s ease-in-out",
              }}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromisePage;
