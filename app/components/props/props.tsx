"use client";

import RadioInput from "./input-radio";
import NumberInput from "./input-number";
import StringInput from "./input-string";
import RadioNumberInput from "./input-radio-number";
import StringNumberInput from "./input-string-number";

import styles from "./props.module.css";

import { SliderProps } from "@/app/types/react-simple-slider-demo.types";

type ComponentProps = {
  sliderProps: SliderProps;
  updateSliderProp: (
    key: string,
    value: boolean | string | number | undefined
  ) => void;
};

export default function Props(props: ComponentProps) {
  const { sliderProps, updateSliderProp } = props;

  return (
    <div className={styles.props}>
      {/* -------------------------------------- controls -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>controls:</span>
        <div className={styles.prop_values}>
          <RadioInput
            label="false"
            name="controls"
            value={false}
            currentPropValue={sliderProps.controls}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="true"
            name="controls"
            value={true}
            currentPropValue={sliderProps.controls}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="manual"
            name="controls"
            value={"manual"}
            currentPropValue={sliderProps.controls}
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- controlsOptions -------------------------------------- */}

      <div
        className={`
        ${styles.prop} 
        ${styles.prop_optional}
        ${!sliderProps.controls && styles.options_disabled}
        `}
      >
        <span className={styles.prop_name}>controlsOptions:</span>
        <div className={styles.options}>
          {/* -------------------------------------- controlsNotInfinite -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>notInfinite:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="undefined"
                name="controlsNotInfinite"
                value={undefined}
                currentPropValue={sliderProps.controlsNotInfinite}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="true"
                name="controlsNotInfinite"
                value={true}
                currentPropValue={sliderProps.controlsNotInfinite}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- controlsShowOnHover -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>showOnHover:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="undefined"
                name="controlsShowOnHover"
                value={undefined}
                currentPropValue={sliderProps.controlsShowOnHover}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="true"
                name="controlsShowOnHover"
                value={true}
                currentPropValue={sliderProps.controlsShowOnHover}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- controlsPosition -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>position:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="edge"
                name="controlsPosition"
                value={"edge"}
                currentPropValue={sliderProps.controlsPosition}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="start"
                name="controlsPosition"
                value={"start"}
                currentPropValue={sliderProps.controlsPosition}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="center"
                name="controlsPosition"
                value={"center"}
                currentPropValue={sliderProps.controlsPosition}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="end"
                name="controlsPosition"
                value={"end"}
                currentPropValue={sliderProps.controlsPosition}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- controlsAlinging -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>alinging:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="start"
                name="controlsAlinging"
                value={"start"}
                currentPropValue={sliderProps.controlsAlinging}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="center"
                name="controlsAlinging"
                value={"center"}
                currentPropValue={sliderProps.controlsAlinging}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="end"
                name="controlsAlinging"
                value={"end"}
                currentPropValue={sliderProps.controlsAlinging}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- controlsReverse -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>reverse:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="undefined"
                name="controlsReverse"
                value={undefined}
                currentPropValue={sliderProps.controlsReverse}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="true"
                name="controlsReverse"
                value={true}
                currentPropValue={sliderProps.controlsReverse}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- controlsGap -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>
              gap <span className={styles.prop_min}>(MIN: 0)</span>:
            </span>
            <div className={styles.prop_values}>
              <NumberInput
                name="controlsGap"
                currentPropValue={sliderProps.controlsGap}
                placeholder="20"
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- controlsButtonShape -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>buttonShape:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="square"
                name="controlsButtonShape"
                value={"square"}
                currentPropValue={sliderProps.controlsButtonShape}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="circle"
                name="controlsButtonShape"
                value={"circle"}
                currentPropValue={sliderProps.controlsButtonShape}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="transparent"
                name="controlsButtonShape"
                value={"transparent"}
                currentPropValue={sliderProps.controlsButtonShape}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- controlsButtonSize -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>
              buttonSize <span className={styles.prop_min}>(MIN: 1)</span>:
            </span>
            <div className={styles.prop_values}>
              <RadioNumberInput
                name="controlsButtonSize"
                values={["small", "medium", "big"]}
                currentPropValue={sliderProps.controlsButtonSize}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- controlsButtonMargin -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>
              buttonMargin <span className={styles.prop_min}>(MIN: 0)</span>:
            </span>
            <div className={styles.prop_values}>
              <StringNumberInput
                name="controlsButtonMargin"
                currentPropValue={sliderProps.controlsButtonMargin}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- controlsArrowColor -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>arrowColor:</span>
            <div className={styles.prop_values}>
              <StringInput
                name="controlsArrowColor"
                placeholder="#000000"
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------- dots -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>dots:</span>
        <div className={styles.prop_values}>
          <RadioInput
            label="false"
            name="dots"
            value={false}
            currentPropValue={sliderProps.dots}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="true"
            name="dots"
            value={true}
            currentPropValue={sliderProps.dots}
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- dotsOptions -------------------------------------- */}

      <div
        className={`
        ${styles.prop} 
        ${styles.prop_optional}
        ${!sliderProps.dots && styles.options_disabled}
        `}
      >
        <span className={styles.prop_name}>dotsOptions:</span>
        <div className={styles.options}>
          {/* -------------------------------------- dotsShowOnHover -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>showOnHover:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="undefined"
                name="dotsShowOnHover"
                value={undefined}
                currentPropValue={sliderProps.dotsShowOnHover}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="true"
                name="dotsShowOnHover"
                value={true}
                currentPropValue={sliderProps.dotsShowOnHover}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- dotsDirection -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>direction:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="horizontal"
                name="dotsDirection"
                value={"horizontal"}
                currentPropValue={sliderProps.dotsDirection}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="vertical"
                name="dotsDirection"
                value={"vertical"}
                currentPropValue={sliderProps.dotsDirection}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- dotsPosition -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>position:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="start"
                name="dotsPosition"
                value={"start"}
                currentPropValue={sliderProps.dotsPosition}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="center"
                name="dotsPosition"
                value={"center"}
                currentPropValue={sliderProps.dotsPosition}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="end"
                name="dotsPosition"
                value={"end"}
                currentPropValue={sliderProps.dotsPosition}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- dotsAlinging -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>alinging:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="start"
                name="dotsAlinging"
                value={"start"}
                currentPropValue={sliderProps.dotsAlinging}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="center"
                name="dotsAlinging"
                value={"center"}
                currentPropValue={sliderProps.dotsAlinging}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="end"
                name="dotsAlinging"
                value={"end"}
                currentPropValue={sliderProps.dotsAlinging}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- dotsReverse -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>reverse:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="undefined"
                name="dotsReverse"
                value={undefined}
                currentPropValue={sliderProps.dotsReverse}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="true"
                name="dotsReverse"
                value={true}
                currentPropValue={sliderProps.dotsReverse}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- dotsGap -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>
              gap <span className={styles.prop_min}>(MIN: 0)</span>:
            </span>
            <div className={styles.prop_values}>
              <NumberInput
                name="dotsGap"
                currentPropValue={sliderProps.dotsGap}
                placeholder="10"
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- dotsMargin -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>
              margin <span className={styles.prop_min}>(MIN: 0)</span>:
            </span>
            <div className={styles.prop_values}>
              <StringNumberInput
                name="dotsMargin"
                currentPropValue={sliderProps.dotsMargin}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- dotShape -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>dotShape:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="square"
                name="dotShape"
                value={"square"}
                currentPropValue={sliderProps.dotShape}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="circle"
                name="dotShape"
                value={"circle"}
                currentPropValue={sliderProps.dotShape}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- dotSize -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>
              dotSize <span className={styles.prop_min}>(MIN: 1)</span>:
            </span>
            <div className={styles.prop_values}>
              <RadioNumberInput
                name="dotSize"
                values={["small", "medium", "big"]}
                currentPropValue={sliderProps.dotSize}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- dotColor -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>dotColor:</span>
            <div className={styles.prop_values}>
              <StringInput
                name="dotColor"
                placeholder="#787878"
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- activeDotColor -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>activeDotColor:</span>
            <div className={styles.prop_values}>
              <StringInput
                name="activeDotColor"
                placeholder="#000000"
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------- startWithSlide -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>
          startWithSlide <span className={styles.prop_min}>(MIN: 1)</span>:
        </span>
        <div className={styles.prop_values}>
          <NumberInput
            name="startWithSlide"
            currentPropValue={sliderProps.startWithSlide}
            placeholder="1"
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- slidingType -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>slidingType:</span>
        <div className={styles.prop_values}>
          <RadioInput
            label="sequence"
            name="slidingType"
            value={"sequence"}
            currentPropValue={sliderProps.slidingType}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="underlay"
            name="slidingType"
            value={"underlay"}
            currentPropValue={sliderProps.slidingType}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="overlay"
            name="slidingType"
            value={"overlay"}
            currentPropValue={sliderProps.slidingType}
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- slidingDirection -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>slidingDirection:</span>
        <div className={styles.prop_values}>
          <RadioInput
            label="left"
            name="slidingDirection"
            value={"left"}
            currentPropValue={sliderProps.slidingDirection}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="top"
            name="slidingDirection"
            value={"top"}
            currentPropValue={sliderProps.slidingDirection}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="right"
            name="slidingDirection"
            value={"right"}
            currentPropValue={sliderProps.slidingDirection}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="bottom"
            name="slidingDirection"
            value={"bottom"}
            currentPropValue={sliderProps.slidingDirection}
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- slidingTimingFunction -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>slidingTimingFunction:</span>
        <div className={styles.prop_values}>
          <StringInput
            name="slidingTimingFunction"
            placeholder="ease"
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- slidingDuration -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>
          slidingDuration <span className={styles.prop_min}>(MIN: 1)</span>:
        </span>
        <div className={styles.prop_values}>
          <NumberInput
            name="slidingDuration"
            currentPropValue={sliderProps.slidingDuration}
            placeholder="2000"
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- slidingDelay -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>
          slidingDelay <span className={styles.prop_min}>(MIN: 50)</span>:
        </span>
        <div className={styles.prop_values}>
          <NumberInput
            name="slidingDelay"
            currentPropValue={sliderProps.slidingDelay}
            placeholder="1000"
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- stopOnHover -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>stopOnHover:</span>
        <div className={styles.prop_values}>
          <RadioInput
            label="false"
            name="stopOnHover"
            value={false}
            currentPropValue={sliderProps.stopOnHover}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="true"
            name="stopOnHover"
            value={true}
            currentPropValue={sliderProps.stopOnHover}
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- customPrevButtonFN -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>customPrevButtonFN:</span>
        <div className={styles.prop_values}>
          <RadioInput
            label="default"
            name="customPrevButtonFN"
            value={undefined}
            currentPropValue={sliderProps.customPrevButtonFN}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="custom"
            name="customPrevButtonFN"
            value={true}
            currentPropValue={sliderProps.customPrevButtonFN}
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- customNextButtonFN -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>customNextButtonFN:</span>
        <div className={styles.prop_values}>
          <RadioInput
            label="default"
            name="customNextButtonFN"
            value={undefined}
            currentPropValue={sliderProps.customNextButtonFN}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="custom"
            name="customNextButtonFN"
            value={true}
            currentPropValue={sliderProps.customNextButtonFN}
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>

      {/* -------------------------------------- customDotFN -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>customDotFN:</span>
        <div className={styles.prop_values}>
          <RadioInput
            label="default"
            name="customDotFN"
            value={undefined}
            currentPropValue={sliderProps.customDotFN}
            updateSliderProp={updateSliderProp}
          />
          <RadioInput
            label="custom"
            name="customDotFN"
            value={true}
            currentPropValue={sliderProps.customDotFN}
            updateSliderProp={updateSliderProp}
          />
        </div>
      </div>
    </div>
  );
}
