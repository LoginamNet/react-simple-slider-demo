import { useState } from "react";

import Props from "../props/props";
import Code from "../code/code";
import Docs from "../docs/docs";

import styles from "./panel.module.css";

import { SliderProps } from "@/app/types/react-simple-slider-demo.types";

type ComponentProps = {
  sliderProps: SliderProps;
  updateSliderProp: (
    key: string,
    value: boolean | string | number | undefined
  ) => void;
};

export default function Panel(props: ComponentProps) {
  const { sliderProps, updateSliderProp } = props;

  const [currentPanel, setCurrentPanel] = useState<"props" | "code" | "docs">(
    "props"
  );

  const switchCurrentPanel = (panel: "props" | "code" | "docs") => {
    setCurrentPanel(panel);
  };

  return (
    <div className={styles.panel}>
      {/* -------------------------------------- panel buttons -------------------------------------- */}

      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.button_props}`}
          onClick={() => switchCurrentPanel("props")}
        >
          PROPS
        </button>
        <button
          className={`${styles.button} ${styles.button_code}`}
          onClick={() => switchCurrentPanel("code")}
        >
          CODE
        </button>
        <button
          className={`${styles.button} ${styles.button_docs}`}
          onClick={() => switchCurrentPanel("docs")}
        >
          DOCS
        </button>
      </div>

      {/* -------------------------------------- content -------------------------------------- */}

      <div className={styles.content}>
        <div
          className={`${styles.block} ${
            currentPanel === "props" && styles.block_props
          }`}
        >
          <Props
            sliderProps={sliderProps}
            updateSliderProp={updateSliderProp}
          />
        </div>
        <div
          className={`${styles.block} ${
            currentPanel === "code" && styles.block_code
          }`}
        >
          <Code sliderProps={sliderProps} />
        </div>
        <div
          className={`${styles.block} ${
            currentPanel === "docs" && styles.block_docs
          }`}
        >
          <Docs />
        </div>
      </div>
    </div>
  );
}
