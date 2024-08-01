"use client";

import SimpleSlider from "@loginamnet/simple-slider";

import styles from "./slider.module.css";

export default function Slide4() {
  return (
    <div
      className={`
  ${styles.slide}
  ${styles.slide_4}
  `}
    >
      <h1>He-he-he</h1>
      <p>{`Don't pay attention, just a slider in the slider`}</p>
      <div
        style={{
          width: "100%",
          height: "150px",
        }}
      >
        <SimpleSlider
          slidingType="sequence"
          slidingDirection="bottom"
          slidingDuration={500}
          slidingDelay={300}
        >
          <span className={styles.text}>{`I'm just`}</span>
          <span className={styles.text}>{`sliding`}</span>
          <span className={styles.text}>{`in here`}</span>
          <span className={styles.text}>{`a little`}</span>
          <span className={styles.text}>{`woohoo!`}</span>
        </SimpleSlider>
      </div>
    </div>
  );
}
