import { useState, ChangeEvent, useEffect } from "react";

import styles from "./props.module.css";

type ComponentProps = {
  name: string;
  currentPropValue: string | number | undefined;
  updateSliderProp: (key: string, value: string | number | undefined) => void;
};

export default function StringNumberInput(props: ComponentProps) {
  const { name, currentPropValue, updateSliderProp } = props;

  const [stringValue, setStringValue] = useState<string | undefined>();
  const [numberValue, setNumberValue] = useState<string | undefined>();

  const handleStringValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberValue(undefined);
    setStringValue(event.target.value);
  };

  const handleNumberValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStringValue(undefined);
    setNumberValue(event.target.value);
  };

  useEffect(() => {
    updateSliderProp(
      name,
      stringValue ? stringValue : numberValue ? Number(numberValue) : 30
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringValue, numberValue]);

  return (
    <div className={styles.input_container}>
      <input
        className={`
            ${styles.input} 
            ${styles.input_string} 
            ${styles.input_string_short}`}
        type="text"
        placeholder="30px"
        value={stringValue ? stringValue : ""}
        onChange={(event) => handleStringValueChange(event)}
      />
      <input
        className={`
            ${styles.input} 
            ${styles.input_number}`}
        type="text"
        placeholder="an integer"
        pattern="/^[0-9]+$/"
        value={numberValue ? numberValue : ""}
        onChange={(event) => handleNumberValueChange(event)}
      />
    </div>
  );
}
