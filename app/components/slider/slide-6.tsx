"use client";

import Link from "next/link";

import styles from "./slider.module.css";

type ComponentProps = {
  switchCurrentPanel: (panel: "props" | "code" | "docs") => void;
};

export default function Slide6(props: ComponentProps) {
  const { switchCurrentPanel } = props;

  return (
    <div
      className={`
  ${styles.slide}
  ${styles.slide_6}
  `}
    >
      <h1>Any questions?</h1>
      <p>
        Check out the documentation and learn more about the different slider
        features
      </p>
      <Link
        className={styles.button}
        href={"#panel"}
        onClick={() => switchCurrentPanel("docs")}
      >
        To DOCS!
      </Link>
    </div>
  );
}
