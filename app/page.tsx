"use client";

import { useState } from "react";

import Slider from "./components/slider/slider";
import Panel from "./components/panel/panel";

import styles from "./page.module.css";

import { SliderProps } from "./types/react-simple-slider-demo.types";

export default function Home() {
  const [currentSliderProps, setCurrentSliderProps] = useState<SliderProps>({
    controls: true,
    notInfinite: undefined,
    showOnHover: undefined,
    position: "edge",
    alinging: "center",
    buttonShape: "square",
    buttonSize: "medium",
    slidingType: "overlay",
    slidingDirection: "left",
    stopOnHover: false,
    customPrevButtonFN: undefined,
    customNextButtonFN: undefined,
  });
  const [currentPanel, setCurrentPanel] = useState<"props" | "code" | "docs">(
    "code"
  );

  const updateSliderProp = (
    key: string,
    value: boolean | string | number | undefined
  ) => {
    setCurrentSliderProps({ ...currentSliderProps, [key]: value });
  };

  const switchCurrentPanel = (panel: "props" | "code" | "docs") => {
    setCurrentPanel(panel);
  };

  return (
    <main className={styles.main}>
      <Slider
        sliderProps={currentSliderProps}
        switchCurrentPanel={switchCurrentPanel}
      />
      <Panel
        sliderProps={currentSliderProps}
        currentPanel={currentPanel}
        updateSliderProp={updateSliderProp}
        switchCurrentPanel={switchCurrentPanel}
      />
    </main>
  );
}
