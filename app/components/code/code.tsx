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
      {" "}
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
          <span
            className={styles.green}
          >{`// ---------- import your slide components here ----------`}</span>
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
            <span className={styles.blue}>{` }`}</span>
            <span>{`}>`}</span>
          </div>

          {/* -------------------------------------- controls -------------------------------------- */}

          <div>
            {`      `}
            <span>{`<`}</span>
            <span className={styles.teal}>SimpleSlider</span>
          </div>
          {sliderProps.controls && sliderProps.controls !== "on-hover" && (
            <div>
              {`        `}
              <span className={styles.red}>controls</span>
            </div>
          )}
          {sliderProps.controls && sliderProps.controls === "on-hover" && (
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

          {(sliderProps.notInfinite ||
            sliderProps.showOnHover ||
            (sliderProps.position && sliderProps.position !== "edge") ||
            (sliderProps.alinging && sliderProps.alinging !== "center") ||
            (sliderProps.gap && sliderProps.gap !== 20) ||
            (sliderProps.buttonShape && sliderProps.buttonShape !== "square") ||
            (sliderProps.buttonSize && sliderProps.buttonSize !== "medium") ||
            (sliderProps.buttonMargin && sliderProps.buttonMargin !== 30) ||
            (sliderProps.arrowColor &&
              sliderProps.arrowColor !== "#000000")) && (
            <div>
              {`        `}
              <span className={styles.red}>controlsOptions</span>
              <span>=</span>
              <span>{`{`}</span>
              <span className={styles.blue}>{`{`}</span>
            </div>
          )}
          <OptionBoolean name={"notInfinite"} value={sliderProps.notInfinite} />
          <OptionBoolean name={"showOnHover"} value={sliderProps.showOnHover} />
          <Option
            name={"position"}
            value={sliderProps.position}
            defaultValue={"edge"}
          />
          <Option
            name={"alinging"}
            value={sliderProps.alinging}
            defaultValue={"center"}
          />
          <Option name={"gap"} value={sliderProps.gap} defaultValue={20} />
          <Option
            name={"buttonShape"}
            value={sliderProps.buttonShape}
            defaultValue={"square"}
          />
          <Option
            name={"buttonSize"}
            value={sliderProps.buttonSize}
            defaultValue={"medium"}
          />
          <Option
            name={"buttonMargin"}
            value={sliderProps.buttonMargin}
            defaultValue={30}
          />
          <Option
            name={"arrowColor"}
            value={sliderProps.arrowColor}
            defaultValue={"#000000"}
          />
          {(sliderProps.notInfinite ||
            sliderProps.showOnHover ||
            (sliderProps.position && sliderProps.position !== "edge") ||
            (sliderProps.alinging && sliderProps.alinging !== "center") ||
            (sliderProps.gap && sliderProps.gap !== 20) ||
            (sliderProps.buttonShape && sliderProps.buttonShape !== "square") ||
            (sliderProps.buttonSize && sliderProps.buttonSize !== "medium") ||
            (sliderProps.buttonMargin && sliderProps.buttonMargin !== 30) ||
            (sliderProps.arrowColor &&
              sliderProps.arrowColor !== "#000000")) && (
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
          />
          <Property
            name={"slidingDelay"}
            value={sliderProps.slidingDelay}
            defaultValue={1000}
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
          <div>
            {`      `}
            <span>{`>`}</span>
          </div>
          {[...Array(5)].map((e, index) => (
            <div key={index}>
              {`        `}
              <span>{`<`}</span>
              <span className={styles.teal}>{`Slide${index + 1}`}</span>
              <span>{` /`}</span>
              <span>{`>`}</span>
            </div>
          ))}
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
