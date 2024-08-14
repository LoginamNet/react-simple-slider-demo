"use client";

import { useRef } from "react";

import Property from "./property";
import Option from "./option";
import OptionBoolean from "./option-boolean";
import CopyButton from "./copy-button";

import styles from "./code.module.css";

import { SliderProps } from "@/app/types/react-simple-slider-demo.types";

type ComponentProps = {
  sliderProps: SliderProps;
};

export default function Code(props: ComponentProps) {
  const { sliderProps } = props;

  const preRef = useRef<HTMLPreElement>(null);

  return (
    <div className={styles.code}>
      <div className={styles.container}>
        <pre ref={preRef} className={styles.code_block}>
          <div>
            <span className={styles.fuchsia}>import</span>
            <span className={styles.navy}>{` SimpleSlider`}</span>
            <span className={styles.fuchsia}>{` from`}</span>
            <span
              className={styles.maroon}
            >{` "@loginamnet/simple-slider"`}</span>
            <span>;</span>
          </div>
          <br />

          {/* -------------------------------------- import slides comment -------------------------------------- */}

          <span
            className={styles.green}
          >{`// ---------- import your slide components here ----------`}</span>

          {/* -------------------------------------- import custom buttons -------------------------------------- */}

          {(sliderProps.customPrevButtonFN ||
            sliderProps.customNextButtonFN) && <br />}
          {sliderProps.customPrevButtonFN && (
            <div>
              <span className={styles.fuchsia}>import</span>
              <span className={styles.navy}>{` CustomPrevButton`}</span>
              <span className={styles.fuchsia}>{` from`}</span>
              <span
                className={styles.maroon}
              >{` "../buttons/custom-prev-button"`}</span>
              <span>;</span>
            </div>
          )}
          {sliderProps.customNextButtonFN && (
            <div>
              <span className={styles.fuchsia}>import</span>
              <span className={styles.navy}>{` CustomNextButton`}</span>
              <span className={styles.fuchsia}>{` from`}</span>
              <span
                className={styles.maroon}
              >{` "../buttons/custom-next-button"`}</span>
              <span>;</span>
            </div>
          )}
          <br />

          {/* -------------------------------------- slider component export -------------------------------------- */}

          <div>
            <span className={styles.fuchsia}>export</span>
            <span className={styles.fuchsia}>{` default`}</span>
            <span className={styles.blue}>{` function`}</span>
            <span className={styles.olive}>{` Slider`}</span>
            <span className={styles.blue}>{`()`}</span>
            <span className={styles.blue}>{` {`}</span>
          </div>
          <div>
            {`  `}
            <span className={styles.fuchsia}>return</span>
            <span className={styles.teal}>{` (`}</span>
          </div>
          <div>
            {`    `}
            <span>{"<"}</span>
            <span>div</span>
            <span className={styles.red}>{` style`}</span>
            <span>{` ={`}</span>
            <span className={styles.blue}>{`{`}</span>
            <span className={styles.navy}>{` width`}</span>
            <span>:</span>
            <span className={styles.maroon}>{` "100%"`}</span>
            <span>,</span>
            <span className={styles.navy}>{` height`}</span>
            <span>:</span>
            <span className={styles.maroon}>{` "500px"`}</span>
            <span>,</span>
            <span className={styles.navy}>{` overflow`}</span>
            <span>:</span>
            <span className={styles.maroon}>{` "hidden"`}</span>
            <span className={styles.blue}>{` }`}</span>
            <span>{`}>`}</span>
          </div>

          {/* -------------------------------------- simple slider -------------------------------------- */}

          <div>
            {`      `}
            <span>{`<`}</span>
            <span className={styles.teal}>SimpleSlider</span>
            {!sliderProps.controls &&
              !sliderProps.startWithSlide &&
              sliderProps.slidingType === "overlay" &&
              sliderProps.slidingDirection === "left" &&
              (!sliderProps.slidingTimingFunction ||
                sliderProps.slidingTimingFunction === "ease") &&
              (!sliderProps.slidingDuration ||
                sliderProps.slidingDuration === 2000) &&
              (!sliderProps.slidingDelay ||
                sliderProps.slidingDelay === 1000 ||
                sliderProps.slidingDelay < 50) &&
              !sliderProps.stopOnHover &&
              !sliderProps.customPrevButtonFN &&
              !sliderProps.customNextButtonFN &&
              !sliderProps.customDotFN && <span>{` /`}</span>}
            {!sliderProps.controls &&
              !sliderProps.startWithSlide &&
              sliderProps.slidingType === "overlay" &&
              sliderProps.slidingDirection === "left" &&
              (!sliderProps.slidingTimingFunction ||
                sliderProps.slidingTimingFunction === "ease") &&
              (!sliderProps.slidingDuration ||
                sliderProps.slidingDuration === 2000) &&
              (!sliderProps.slidingDelay ||
                sliderProps.slidingDelay === 1000 ||
                sliderProps.slidingDelay < 50) &&
              !sliderProps.stopOnHover &&
              !sliderProps.customPrevButtonFN &&
              !sliderProps.customNextButtonFN &&
              !sliderProps.customDotFN && <span>{`>`}</span>}
          </div>

          {/* -------------------------------------- controls -------------------------------------- */}

          {sliderProps.controls && sliderProps.controls !== "manual" && (
            <div>
              {`        `}
              <span className={styles.red}>controls</span>
            </div>
          )}
          {sliderProps.controls && sliderProps.controls === "manual" && (
            <div>
              {`        `}
              <span className={styles.red}>controls</span>
              <span>=</span>
              <span>{`{`}</span>
              <span className={styles.maroon}>{`"on-hover"`}</span>
              <span>{`}`}</span>
            </div>
          )}

          {/* -------------------------------------- controlsOptions -------------------------------------- */}

          {sliderProps.controls &&
            (sliderProps.controlsNotInfinite ||
              sliderProps.controlsShowOnHover ||
              (sliderProps.controlsPosition &&
                sliderProps.controlsPosition !== "edge") ||
              (sliderProps.controlsAlinging &&
                sliderProps.controlsAlinging !== "center") ||
              sliderProps.controlsReverse ||
              (sliderProps.controlsGap && sliderProps.controlsGap !== 20) ||
              (sliderProps.controlsButtonShape &&
                sliderProps.controlsButtonShape !== "square") ||
              (sliderProps.controlsButtonSize &&
                sliderProps.controlsButtonSize !== "medium") ||
              (sliderProps.controlsButtonMargin &&
                sliderProps.controlsButtonMargin !== 30) ||
              (sliderProps.controlsArrowColor &&
                sliderProps.controlsArrowColor !== "#000000")) && (
              <div>
                {`        `}
                <span className={styles.red}>controlsOptions</span>
                <span>=</span>
                <span>{`{`}</span>
                <span className={styles.blue}>{`{`}</span>
              </div>
            )}
          {sliderProps.controls && (
            <OptionBoolean
              name={"controlsNotInfinite"}
              value={sliderProps.controlsNotInfinite}
            />
          )}
          {sliderProps.controls && (
            <OptionBoolean
              name={"controlsShowOnHover"}
              value={sliderProps.controlsShowOnHover}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsPosition"}
              value={sliderProps.controlsPosition}
              defaultValue={"edge"}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsAlinging"}
              value={sliderProps.controlsAlinging}
              defaultValue={"center"}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsGap"}
              value={sliderProps.controlsGap}
              defaultValue={20}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsButtonShape"}
              value={sliderProps.controlsButtonShape}
              defaultValue={"square"}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsButtonSize"}
              value={sliderProps.controlsButtonSize}
              defaultValue={"medium"}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsButtonMargin"}
              value={sliderProps.controlsButtonMargin}
              defaultValue={30}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsArrowColor"}
              value={sliderProps.controlsArrowColor}
              defaultValue={"#000000"}
            />
          )}
          {sliderProps.controls &&
            (sliderProps.controlsNotInfinite ||
              sliderProps.controlsShowOnHover ||
              (sliderProps.controlsPosition &&
                sliderProps.controlsPosition !== "edge") ||
              (sliderProps.controlsAlinging &&
                sliderProps.controlsAlinging !== "center") ||
              sliderProps.controlsReverse ||
              (sliderProps.controlsGap && sliderProps.controlsGap !== 20) ||
              (sliderProps.controlsButtonShape &&
                sliderProps.controlsButtonShape !== "square") ||
              (sliderProps.controlsButtonSize &&
                sliderProps.controlsButtonSize !== "medium") ||
              (sliderProps.controlsButtonMargin &&
                sliderProps.controlsButtonMargin !== 30) ||
              (sliderProps.controlsArrowColor &&
                sliderProps.controlsArrowColor !== "#000000")) && (
              <div>
                {`        `}
                <span className={styles.blue}>{`}`}</span>
                <span>{`}`}</span>
              </div>
            )}

          {/* -------------------------------------- dots -------------------------------------- */}

          {sliderProps.dots && (
            <div>
              {`        `}
              <span className={styles.red}>dots</span>
            </div>
          )}

          {/* -------------------------------------- dotsOptions -------------------------------------- */}

          {sliderProps.dots &&
            (sliderProps.dotsShowOnHover ||
              (sliderProps.dotsPosition &&
                sliderProps.dotsPosition !== "center") ||
              (sliderProps.dotsAlinging &&
                sliderProps.dotsAlinging !== "end") ||
              sliderProps.dotsReverse ||
              (sliderProps.dotsGap && sliderProps.dotsGap !== 10) ||
              (sliderProps.dotsMargin && sliderProps.dotsMargin !== 30) ||
              (sliderProps.dotShape && sliderProps.dotShape !== "square") ||
              (sliderProps.dotSize && sliderProps.dotSize !== "medium") ||
              (sliderProps.dotColor && sliderProps.dotColor !== "#000000")) && (
              <div>
                {`        `}
                <span className={styles.red}>controlsOptions</span>
                <span>=</span>
                <span>{`{`}</span>
                <span className={styles.blue}>{`{`}</span>
              </div>
            )}
          {sliderProps.controls && (
            <OptionBoolean
              name={"controlsNotInfinite"}
              value={sliderProps.controlsNotInfinite}
            />
          )}
          {sliderProps.controls && (
            <OptionBoolean
              name={"controlsShowOnHover"}
              value={sliderProps.controlsShowOnHover}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsPosition"}
              value={sliderProps.controlsPosition}
              defaultValue={"edge"}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsAlinging"}
              value={sliderProps.controlsAlinging}
              defaultValue={"center"}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsGap"}
              value={sliderProps.controlsGap}
              defaultValue={20}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsButtonShape"}
              value={sliderProps.controlsButtonShape}
              defaultValue={"square"}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsButtonSize"}
              value={sliderProps.controlsButtonSize}
              defaultValue={"medium"}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsButtonMargin"}
              value={sliderProps.controlsButtonMargin}
              defaultValue={30}
            />
          )}
          {sliderProps.controls && (
            <Option
              name={"controlsArrowColor"}
              value={sliderProps.controlsArrowColor}
              defaultValue={"#000000"}
            />
          )}
          {sliderProps.controls &&
            (sliderProps.controlsNotInfinite ||
              sliderProps.controlsShowOnHover ||
              (sliderProps.controlsPosition &&
                sliderProps.controlsPosition !== "edge") ||
              (sliderProps.controlsAlinging &&
                sliderProps.controlsAlinging !== "center") ||
              sliderProps.controlsReverse ||
              (sliderProps.controlsGap && sliderProps.controlsGap !== 20) ||
              (sliderProps.controlsButtonShape &&
                sliderProps.controlsButtonShape !== "square") ||
              (sliderProps.controlsButtonSize &&
                sliderProps.controlsButtonSize !== "medium") ||
              (sliderProps.controlsButtonMargin &&
                sliderProps.controlsButtonMargin !== 30) ||
              (sliderProps.controlsArrowColor &&
                sliderProps.controlsArrowColor !== "#000000")) && (
              <div>
                {`        `}
                <span className={styles.blue}>{`}`}</span>
                <span>{`}`}</span>
              </div>
            )}

          <Property
            name={"startWithSlide"}
            value={sliderProps.startWithSlide}
            defaultValue={1}
            minValue={1}
          />
          <Property
            name={"slidingType"}
            value={sliderProps.slidingType}
            defaultValue={"overlay"}
          />
          <Property
            name={"slidingDirection"}
            value={sliderProps.slidingDirection}
            defaultValue={"left"}
          />
          <Property
            name={"slidingDuration"}
            value={sliderProps.slidingDuration}
            defaultValue={2000}
            minValue={1}
          />
          <Property
            name={"slidingDelay"}
            value={sliderProps.slidingDelay}
            defaultValue={1000}
            minValue={50}
          />
          <Property
            name={"slidingTimingFunction"}
            value={sliderProps.slidingTimingFunction}
            defaultValue={"ease"}
          />

          {/* -------------------------------------- stopOnHover -------------------------------------- */}

          {sliderProps.stopOnHover && (
            <div>
              {`        `}
              <span className={styles.red}>stopOnHover</span>
            </div>
          )}

          {/* -------------------------------------- customNextButtonFN -------------------------------------- */}

          {sliderProps.customNextButtonFN && (
            <div>
              {`        `}
              <span className={styles.red}>customNextButtonFN</span>
              <span>=</span>
              <span>{`{`}</span>
              <span className={styles.olive}>CustomNextButton</span>
              <span>{`}`}</span>
            </div>
          )}

          {/* -------------------------------------- customPrevButtonFN -------------------------------------- */}

          {sliderProps.customPrevButtonFN && (
            <div>
              {`        `}
              <span className={styles.red}>customPrevButtonFN</span>
              <span>=</span>
              <span>{`{`}</span>
              <span className={styles.olive}>CustomPrevButton</span>
              <span>{`}`}</span>
            </div>
          )}

          {/* -------------------------------------- customDotFN -------------------------------------- */}

          {sliderProps.customDotFN && (
            <div>
              {`        `}
              <span className={styles.red}>customDotFN</span>
              <span>=</span>
              <span>{`{`}</span>
              <span className={styles.olive}>CustomDot</span>
              <span>{`}`}</span>
            </div>
          )}
          {(sliderProps.controls ||
            sliderProps.startWithSlide ||
            sliderProps.slidingType !== "overlay" ||
            sliderProps.slidingDirection !== "left" ||
            (sliderProps.slidingTimingFunction &&
              sliderProps.slidingTimingFunction !== "ease") ||
            (sliderProps.slidingDuration &&
              sliderProps.slidingDuration !== 2000) ||
            (sliderProps.slidingDelay &&
              sliderProps.slidingDelay !== 1000 &&
              sliderProps.slidingDelay >= 50) ||
            sliderProps.stopOnHover ||
            sliderProps.customPrevButtonFN ||
            sliderProps.customNextButtonFN ||
            sliderProps.customDotFN) && (
            <div>
              {`      `}
              <span>{`>`}</span>
            </div>
          )}

          {/* -------------------------------------- slides comment -------------------------------------- */}

          <div>
            {`        `}
            <span
              className={styles.green}
            >{`{/* place the imported slides or create new ones here */}`}</span>
          </div>

          {/* -------------------------------------- slides -------------------------------------- */}

          {[...Array(7)].map((e, index) => (
            <div key={index}>
              {`        `}
              <span>{`<`}</span>
              <span className={styles.teal}>{`Slide${index + 1}`}</span>
              <span>{` /`}</span>
              <span>{`>`}</span>
            </div>
          ))}

          {/* -------------------------------------- simple slider closure -------------------------------------- */}

          <div>
            {`      `}
            <span>{`<`}</span>
            <span>{`/`}</span>
            <span className={styles.teal}>SimpleSlider</span>
            <span>{`>`}</span>
          </div>
          <div>
            {`    `}
            <span>{`</div>`}</span>
          </div>
          <div>
            {`  `}
            <span className={styles.teal}>{`)`}</span>
            <span>;</span>
          </div>
          <span className={styles.blue}>{`}`}</span>
        </pre>
      </div>
      <CopyButton preRef={preRef} />
    </div>
  );
}
