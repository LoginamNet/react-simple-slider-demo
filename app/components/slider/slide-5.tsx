"use client";

import Link from "next/link";

import styles from "./slider.module.css";

type ComponentProps = {
  switchCurrentPanel: (panel: "props" | "code" | "docs") => void;
};

export default function Slide5(props: ComponentProps) {
  const { switchCurrentPanel } = props;

  return (
    <div
      className={`
  ${styles.slide}
  ${styles.slide_5}
  `}
    >
      <h1>Get the code!</h1>
      <p>Look at the resulting code and take it for yourself</p>
      <Link
        className={styles.button}
        href={"#panel"}
        onClick={() => switchCurrentPanel("code")}
      >
        To CODE!
      </Link>
    </div>
  );
}
