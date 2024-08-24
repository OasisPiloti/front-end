import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed, maxLength }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length && index < maxLength) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }, 6000); // 6000에서 시간 변경하면 계속 에러나옴.

    return () => {
      clearTimeout(timeout); // Clean up timeout on unmount
    };
  }, [text, speed, maxLength]);

  return <h3>{displayedText}</h3>;
};

export default TypingEffect;
