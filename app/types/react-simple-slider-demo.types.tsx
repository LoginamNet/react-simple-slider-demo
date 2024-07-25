type SliderProps = {
  controls?: boolean | "on-hover";
  notInfinite?: true;
  showOnHover?: true;
  position?: "edge" | "start" | "center" | "end";
  alinging?: "start" | "center" | "end";
  gap?: number;
  buttonShape?: "square" | "circle" | "transparent";
  buttonSize?: "small" | "medium" | "big" | number;
  butonMargin?: string | number;
  arrowColor?: "white" | "black" | string;
  startWithSlide?: number;
  slidingType?: "sequence" | "underlay" | "overlay";
  slidingDirection?: "left" | "top" | "right" | "bottom";
  slidingDuration?: number;
  slidingDelay?: number;
  slidingTimingFunction?: string;
  stopOnHover?: boolean;
  customPrevButtonFN?: true | undefined;
  customNextButtonFN?: true | undefined;
};

export type { SliderProps };
