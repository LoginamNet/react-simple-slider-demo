import { useState, ChangeEvent, useEffect } from "react";

import styles from "./props.module.css";

type ComponentProps = {
  name: string;
  values: string[];
  currentPropValue: string | number | undefined;
  updateSliderProp: (key: string, value: string | number | undefined) => void;
};

export default function RadioNumberInput(props: ComponentProps) {
  const { name, values, currentPropValue, updateSliderProp } = props;

  const [numberValue, setNumberValue] = useState<number | undefined>();

  const handleNumberValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberValue(+event.target.value);
  };

  const resetNumberValue = () => {
    setNumberValue(undefined);
  };

  useEffect(() => {
    numberValue && updateSliderProp(name, numberValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, numberValue]);

  return (
    <div className={styles.input_container}>
      {values.map((val, key) => (
        <label
          key={key}
          className={`
              ${styles.label} 
              ${currentPropValue === val && styles.label_selected}`}
        >
          {val === "true" || val === "false" ? val : `"${val}"`}
          <input
            className={`${styles.input} ${styles.input_radio}`}
            type="radio"
            name={name}
            checked={currentPropValue === val}
            onChange={() => {
              resetNumberValue(), updateSliderProp(name, val);
            }}
          />
        </label>
      ))}

      <input
        className={`
            ${styles.input} 
            ${styles.input_number}`}
        type="text"
        placeholder="an integer"
        pattern="/^[0-9]+$/"
        value={numberValue ? numberValue : ""}
        onChange={(event) => handleNumberValueChange(event)}
        onBlur={(event) =>
          !event.target.value && updateSliderProp(name, "medium")
        }
      />
    </div>
  );
}
