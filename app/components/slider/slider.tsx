"use client";

import SimpleSlider from "@loginamnet/simple-slider";
import CustomPrevButton from "../buttons/custom-prev-button";
import CustomNextButton from "../buttons/custom-next-button";

import styles from "./slider.module.css";

import { SliderProps } from "@/app/types/react-simple-slider-demo.types";

type ComponentProps = { sliderProps: SliderProps };

export default function Slider(props: ComponentProps) {
  const { sliderProps } = props;

  return (
    <div className={styles.slider}>
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
        customPrevButtonFN={sliderProps.customPrevButtonFN && CustomPrevButton}
        customNextButtonFN={sliderProps.customNextButtonFN && CustomNextButton}
      >
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </SimpleSlider>
    </div>
  );
}
