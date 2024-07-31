"use client";

import { useRef, useCallback, useEffect } from "react";

import SimpleSlider from "@loginamnet/simple-slider";
import CustomPrevButton from "../buttons/custom-prev-button";
import CustomNextButton from "../buttons/custom-next-button";

import Slide1 from "./slide-1";
import Slide2 from "./slide-2";
import Slide3 from "./slide-3";
import Slide4 from "./slide-4";

import styles from "./slider.module.css";

import { SliderProps } from "@/app/types/react-simple-slider-demo.types";

type ComponentProps = {
  sliderProps: SliderProps;
  currentPanel: "props" | "code" | "docs";
  switchCurrentPanel: (panel: "props" | "code" | "docs") => void;
  switchMobileProps: (mobile: boolean) => void;
};

export default function Slider(props: ComponentProps) {
  const { sliderProps, currentPanel, switchCurrentPanel, switchMobileProps } =
    props;

  const sliderRef = useRef<HTMLDivElement>(null);

  const checkMainWidth = useCallback(() => {
    if (sliderRef.current) {
      switchMobileProps(sliderRef.current?.offsetWidth < 690);
    }
  }, [switchMobileProps]);

  useEffect(() => {
    const handleResize = () => {
      checkMainWidth();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [checkMainWidth]);

  useEffect(() => {
    checkMainWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderRef.current?.offsetWidth]);

  return (
    <div className={styles.container}>
      <div className={styles.slider} ref={sliderRef}>
        <SimpleSlider
          controls={sliderProps.controls}
          controlsOptions={{
            notInfinite: sliderProps.notInfinite,
            showOnHover: sliderProps.showOnHover,
            position: sliderProps.position,
            alinging: sliderProps.alinging,
            gap: sliderProps.gap,
            buttonShape: sliderProps.buttonShape,
            buttonSize: sliderProps.buttonSize,
            buttonMargin: sliderProps.buttonMargin,
            arrowColor: sliderProps.arrowColor,
          }}
          startWithSlide={sliderProps.startWithSlide}
          slidingType={sliderProps.slidingType}
          slidingDirection={sliderProps.slidingDirection}
          slidingDuration={sliderProps.slidingDuration}
          slidingDelay={sliderProps.slidingDelay}
          slidingTimingFunction={sliderProps.slidingTimingFunction}
          stopOnHover={sliderProps.stopOnHover}
          customPrevButtonFN={
            sliderProps.customPrevButtonFN && CustomPrevButton
          }
          customNextButtonFN={
            sliderProps.customNextButtonFN && CustomNextButton
          }
        >
          <Slide1 />
          <Slide2 />
          <Slide3
            currentPanel={currentPanel}
            switchCurrentPanel={switchCurrentPanel}
          />
          <Slide4 />
        </SimpleSlider>
      </div>
      <div className={styles.info}>
        <p>{`Width: ${sliderRef.current?.offsetWidth}px`}</p>
        <span>|</span>
        <p>{`Height: ${sliderRef.current?.offsetHeight}px`}</p>
      </div>
    </div>
  );
}
