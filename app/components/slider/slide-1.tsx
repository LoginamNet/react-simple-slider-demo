"use client";

import styles from "./slider.module.css";

export default function Slide1() {
  return (
    <div
      className={`
  ${styles.slide}
  ${styles.slide_1}
  `}
    >
      <h1>Oh, hello!</h1>
      <p>Just sliding here...</p>
      <p>{`I think it's worth checking out the other slides to learn more!`}</p>
    </div>
  );
}
