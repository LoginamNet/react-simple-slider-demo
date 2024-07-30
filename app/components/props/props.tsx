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
            label="on-hover"
            name="controls"
            value={"on-hover"}
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
          {/* -------------------------------------- notInfinite -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>notInfinite:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="false"
                name="notInfinite"
                value={undefined}
                currentPropValue={sliderProps.notInfinite}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="true"
                name="notInfinite"
                value={true}
                currentPropValue={sliderProps.notInfinite}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- showOnHover -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>showOnHover:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="false"
                name="showOnHover"
                value={undefined}
                currentPropValue={sliderProps.showOnHover}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="true"
                name="showOnHover"
                value={true}
                currentPropValue={sliderProps.showOnHover}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- position -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>position:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="edge"
                name="position"
                value={"edge"}
                currentPropValue={sliderProps.position}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="start"
                name="position"
                value={"start"}
                currentPropValue={sliderProps.position}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="center"
                name="position"
                value={"center"}
                currentPropValue={sliderProps.position}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="end"
                name="position"
                value={"end"}
                currentPropValue={sliderProps.position}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- alinging -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>alinging:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="start"
                name="alinging"
                value={"start"}
                currentPropValue={sliderProps.alinging}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="center"
                name="alinging"
                value={"center"}
                currentPropValue={sliderProps.alinging}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="end"
                name="alinging"
                value={"end"}
                currentPropValue={sliderProps.alinging}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- gap -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>gap:</span>
            <div className={styles.prop_values}>
              <NumberInput
                name="gap"
                currentPropValue={sliderProps.gap}
                placeholder="20"
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- buttonShape -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>buttonShape:</span>
            <div className={styles.prop_values}>
              <RadioInput
                label="square"
                name="buttonShape"
                value={"square"}
                currentPropValue={sliderProps.buttonShape}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="circle"
                name="buttonShape"
                value={"circle"}
                currentPropValue={sliderProps.buttonShape}
                updateSliderProp={updateSliderProp}
              />
              <RadioInput
                label="transparent"
                name="buttonShape"
                value={"transparent"}
                currentPropValue={sliderProps.buttonShape}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- buttonSize -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>buttonSize:</span>
            <div className={styles.prop_values}>
              <RadioNumberInput
                name="buttonSize"
                values={["small", "medium", "big"]}
                currentPropValue={sliderProps.buttonSize}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- buttonMargin -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>buttonMargin:</span>
            <div className={styles.prop_values}>
              <StringNumberInput
                name="buttonMargin"
                currentPropValue={sliderProps.buttonMargin}
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>

          {/* -------------------------------------- arrowColor -------------------------------------- */}

          <div className={styles.prop}>
            <span className={styles.prop_name}>arrowColor:</span>
            <div className={styles.prop_values}>
              <StringInput
                name="arrowColor"
                placeholder="#000000"
                updateSliderProp={updateSliderProp}
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------- startWithSlide -------------------------------------- */}

      <div className={styles.prop}>
        <span className={styles.prop_name}>startWithSlide:</span>
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
        <span className={styles.prop_name}>slidingDuration:</span>
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
        <span className={styles.prop_name}>slidingDelay:</span>
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
    </div>
  );
}
