"use client";

import Link from "next/link";

import styles from "./slider.module.css";

type ComponentProps = {
  currentPanel: "props" | "code" | "docs";
  switchCurrentPanel: (panel: "props" | "code" | "docs") => void;
};

export default function Slide3(props: ComponentProps) {
  const { currentPanel, switchCurrentPanel } = props;

  return (
    <div
      className={`
  ${styles.slide}
  ${styles.slide_3}
  `}
    >
      <h1>Customize!</h1>
      <p>Change the properties of the slider to suit your needs</p>
      <Link
        className={styles.button}
        href={"#panel"}
        onClick={() => switchCurrentPanel("props")}
      >
        To PROPS!
      </Link>
    </div>
  );
}
