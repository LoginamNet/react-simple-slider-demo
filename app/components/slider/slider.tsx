"use client";

import { useRef, useCallback, useEffect, useState } from "react";

import Preloader from "../preloader/preloader";
import SimpleSlider from "@loginamnet/simple-slider";
import CustomPrevButton from "../buttons/custom-prev-button";
import CustomNextButton from "../buttons/custom-next-button";
import CustomDot from "../dots/custom-dot";

import Slide1 from "./slide-1";
import Slide2 from "./slide-2";
import Slide3 from "./slide-3";
import Slide4 from "./slide-4";
import Slide5 from "./slide-5";
import Slide6 from "./slide-6";
import Slide7 from "./slide-7";

import styles from "./slider.module.css";

import { SliderProps } from "@/app/types/react-simple-slider-demo.types";

type ComponentProps = {
  sliderProps: SliderProps;
  switchCurrentPanel: (panel: "props" | "code" | "docs") => void;
  switchMobileProps: (mobile: boolean) => void;
};

export default function Slider(props: ComponentProps) {
  const { sliderProps, switchCurrentPanel, switchMobileProps } = props;

  const sliderRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  const checkMainWidth = useCallback(() => {
    if (sliderRef.current) {
      switchMobileProps(sliderRef.current?.offsetWidth < 690);
    }
  }, [switchMobileProps]);

  useEffect(() => {
    checkMainWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderRef.current?.offsetWidth]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.slider} ref={sliderRef}>
        {loading && <Preloader text={"Placing the slides..."} />}
        <SimpleSlider
          controls={sliderProps.controls}
          controlsOptions={{
            notInfinite: sliderProps.controlsNotInfinite,
            showOnHover: sliderProps.controlsShowOnHover,
            position: sliderProps.controlsPosition,
            alinging: sliderProps.controlsAlinging,
            reverse: sliderProps.controlsReverse,
            gap: sliderProps.controlsGap,
            buttonShape: sliderProps.controlsButtonShape,
            buttonSize: sliderProps.controlsButtonSize,
            buttonMargin: sliderProps.controlsButtonMargin,
            arrowColor: sliderProps.controlsArrowColor,
          }}
          dots={sliderProps.dots}
          dotsOptions={{
            showOnHover: sliderProps.dotsShowOnHover,
            direction: sliderProps.dotsDirection,
            position: sliderProps.dotsPosition,
            alinging: sliderProps.dotsAlinging,
            reverse: sliderProps.dotsReverse,
            gap: sliderProps.dotsGap,
            margin: sliderProps.dotsMargin,
            dotShape: sliderProps.dotShape,
            dotSize: sliderProps.dotSize,
            dotColor: sliderProps.dotColor,
            activeDotColor: sliderProps.activeDotColor,
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
          customDotFN={sliderProps.customDotFN && CustomDot}
        >
          <Slide1 />
          <Slide2 />
          <Slide3 switchCurrentPanel={switchCurrentPanel} />
          <Slide4 />
          <Slide5 switchCurrentPanel={switchCurrentPanel} />
          <Slide6 switchCurrentPanel={switchCurrentPanel} />
          <Slide7 />
        </SimpleSlider>
      </div>
      <div className={styles.info}>
        <p>{`Width: ${
          sliderRef.current ? sliderRef.current?.offsetWidth + "px" : "..."
        } `}</p>
        <span>|</span>
        <p>{`Height:  ${
          sliderRef.current ? sliderRef.current?.offsetHeight + "px" : "..."
        }`}</p>
      </div>
    </div>
  );
}
