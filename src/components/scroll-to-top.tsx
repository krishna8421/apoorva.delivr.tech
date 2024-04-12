"use client";

import { useEffect, useState } from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";

const isBrowser = () => typeof window !== "undefined";

const scrollToTop = () => {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <IoMdArrowDropupCircle
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 text-5xl cursor-pointer text-white mix-blend-difference ${
        isVisible ? "visible" : "hidden"
      }`}
    />
  );
};

export default ScrollToTop;
