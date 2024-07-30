import { useState, ChangeEvent, useEffect } from "react";

import styles from "./props.module.css";

type ComponentProps = {
  name: string;
  currentPropValue: string | number | undefined;
  updateSliderProp: (key: string, value: string | number | undefined) => void;
};

export default function StringNumberInput(props: ComponentProps) {
  const { name, currentPropValue, updateSliderProp } = props;

  const [stringValue, setStringValue] = useState<string>(
    currentPropValue && typeof currentPropValue === "string"
      ? currentPropValue
      : ""
  );
  const [numberValue, setNumberValue] = useState<number | string>(
    (currentPropValue && typeof currentPropValue === "number") ||
      currentPropValue === 0
      ? currentPropValue
      : ""
  );

  const handleStringValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberValue("");
    setStringValue(event.target.value);
  };

  const handleNumberValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStringValue("");

    const result = Number(event.target.value.replace(/\D/g, ""));
    setNumberValue(result || result === 0 ? result : "");
  };

  useEffect(() => {
    updateSliderProp(
      name,
      stringValue
        ? stringValue
        : numberValue || numberValue === 0
        ? numberValue
        : 30
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringValue, numberValue]);

  useEffect(() => {
    ((currentPropValue && typeof currentPropValue === "number") ||
      currentPropValue === 0) &&
      setNumberValue(currentPropValue);
  }, [currentPropValue]);

  return (
    <div className={styles.input_container}>
      <input
        className={`
            ${styles.input} 
            ${styles.input_string} 
            ${styles.input_string_short}`}
        type="text"
        placeholder="30px"
        value={
          currentPropValue && typeof currentPropValue === "string"
            ? stringValue
            : ""
        }
        onChange={(event) => handleStringValueChange(event)}
      />
      <input
        className={`
            ${styles.input} 
            ${styles.input_number}`}
        type="text"
        placeholder="an integer"
        value={
          (currentPropValue && typeof currentPropValue === "number") ||
          currentPropValue === 0
            ? numberValue
            : ""
        }
        onChange={(event) => handleNumberValueChange(event)}
      />
    </div>
  );
}
