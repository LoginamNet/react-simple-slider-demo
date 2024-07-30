import { ChangeEvent, useEffect, useState } from "react";
import styles from "./props.module.css";

type ComponentProps = {
  name: string;
  currentPropValue: number | undefined;
  placeholder?: string;
  updateSliderProp: (
    key: string,
    value: boolean | string | number | undefined
  ) => void;
};

export default function NumberInput(props: ComponentProps) {
  const { name, currentPropValue, placeholder, updateSliderProp } = props;

  const [value, setValue] = useState(currentPropValue ? currentPropValue : "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(Number(result));
  };

  useEffect(() => {
    updateSliderProp(name, Number(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className={styles.input_container}>
      <input
        className={`
          ${styles.input} 
          ${styles.input_number}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}
