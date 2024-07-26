"use client";

import { RefObject, useEffect, useState } from "react";

import { copyToClipboard } from "../utils/copy-to-clipboard";

import styles from "./code.module.css";

type ComponentProps = {
  preRef: RefObject<HTMLPreElement>;
};

export default function CopyButton(props: ComponentProps) {
  const { preRef } = props;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    preRef.current && copyToClipboard(preRef.current.innerText);
  };

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => {
        setClicked(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [clicked]);

  return (
    <button
      className={`
          ${styles.button}
          `}
      onClick={() => handleClick()}
    >
      {clicked ? "Copied!" : "Copy to Clipboard"}
    </button>
  );
}
