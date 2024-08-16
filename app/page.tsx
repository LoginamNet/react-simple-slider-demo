"use client";

import { useCallback, useState } from "react";

import Slider from "./components/slider/slider";
import Panel from "./components/panel/panel";

import styles from "./page.module.css";

import { SliderProps } from "./types/react-simple-slider-demo.types";

export default function Home() {
  const [currentSliderProps, setCurrentSliderProps] = useState<SliderProps>({
    controls: "manual",
    controlsNotInfinite: undefined,
    controlsShowOnHover: undefined,
    controlsPosition: "edge",
    controlsAlinging: "center",
    controlsReverse: undefined,
    controlsButtonShape: "transparent",
    controlsButtonSize: "medium",
    dots: true,
    dotsShowOnHover: undefined,
    dotsDirection: "horizontal",
    dotsPosition: "center",
    dotsAlinging: "end",
    dotsReverse: undefined,
    dotShape: "square",
    dotSize: "medium",
    slidingType: "sequence",
    slidingDirection: "left",
    slidingDuration: 1000,
    slidingDelay: 2000,
    stopOnHover: false,
    customPrevButtonFN: undefined,
    customNextButtonFN: undefined,
    customDotFN: undefined,
  });
  const [currentPanel, setCurrentPanel] = useState<"props" | "code" | "docs">(
    "code"
  );

  const updateSliderProp = useCallback(
    (key: string, value: boolean | string | number | undefined) => {
      setCurrentSliderProps({ ...currentSliderProps, [key]: value });
    },
    [currentSliderProps]
  );

  const switchCurrentPanel = (panel: "props" | "code" | "docs") => {
    setCurrentPanel(panel);
  };

  const switchMobileProps = (mobile: boolean) => {
    mobile &&
      setCurrentSliderProps({
        ...currentSliderProps,
        controlsButtonMargin: 0,
        dotsMargin: 15,
      });
  };

  return (
    <main className={styles.main}>
      <Slider
        sliderProps={currentSliderProps}
        switchCurrentPanel={switchCurrentPanel}
        switchMobileProps={switchMobileProps}
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
