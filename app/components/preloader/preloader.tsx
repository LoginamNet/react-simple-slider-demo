"use client";

import styles from "./preloader.module.css";

type ComponentProps = { text: string };

export default function Preloader(props: ComponentProps) {
  const { text } = props;

  return (
    <div className={`${styles.preloader}`}>
      <div className={styles.squares} />
      <span>{text}</span>
    </div>
  );
}
