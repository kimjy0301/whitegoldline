"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const appElement = document.querySelector(".app");

    const toggleVisibility = () => {
      if (appElement) {
        setIsVisible(appElement.scrollTop > 200);
      }
    };

    appElement?.addEventListener("scroll", toggleVisibility);

    return () => {
      appElement?.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const appElement = document.querySelector(".app");
    appElement?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bottom-content">
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="맨 위로 스크롤"
        style={{
          opacity: isVisible ? 1 : 1,
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        TOP
      </button>
    </div>
  );
}
