import { useState } from "react";
import styles from "./custom-dot.module.css";

export default function CustomDot(
  index: number,
  switchToSlideFN: (selectedSlideIndex: number) => void,
  nextSlideIndex?: number,
  sliding?: boolean,
  slidingDuration?: number
) {
  const buttonMouseEventHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const btn: HTMLButtonElement = event.currentTarget;
    btn.style.transition = !sliding
      ? "none"
      : `background-color ${slidingDuration}ms`;
  };

  return (
    <button
      key={index}
      className={`
        ${styles.button} 
        ${
          index === nextSlideIndex
            ? styles.button_active
            : styles.button_inactive
        }
        `}
      style={{
        transition: `background-color ${slidingDuration}ms`,
      }}
      disabled={sliding}
      onClick={(event) => {
        event.stopPropagation();

        switchToSlideFN(index);
      }}
      onMouseEnter={(e) => buttonMouseEventHandler(e)}
      onMouseLeave={(e) => buttonMouseEventHandler(e)}
    >
      {index + 1}
    </button>
  );
}
