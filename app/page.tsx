"use client";

import { useState } from "react";

import Slider from "./components/slider/slider";
import Panel from "./components/panel/panel";

import { SliderProps } from "./types/react-simple-slider-demo.types";

import styles from "./page.module.css";

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

  const updateSliderProp = (
    key: string,
    value: boolean | string | number | undefined
  ) => {
    setCurrentSliderProps({ ...currentSliderProps, [key]: value });
  };

  return (
    <main className={styles.main}>
      <Slider sliderProps={currentSliderProps} />
      <Panel
        sliderProps={currentSliderProps}
        updateSliderProp={updateSliderProp}
      />
    </main>
  );
}
