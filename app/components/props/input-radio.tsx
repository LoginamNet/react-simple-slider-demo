import styles from "./props.module.css";

type ComponentProps = {
  label: string;
  name: string;
  value: boolean | string | number | undefined;
  currentPropValue: boolean | string | number | undefined;
  updateSliderProp: (
    key: string,
    value: boolean | string | number | undefined
  ) => void;
};

export default function RadioInput(props: ComponentProps) {
  const { label, name, value, currentPropValue, updateSliderProp } = props;

  return (
    <label
      className={`
        ${styles.label} 
        ${currentPropValue === value && styles.label_selected}`}
    >
      {label === "true" ||
      label === "false" ||
      label === "default" ||
      label === "custom"
        ? label
        : `"${label}"`}
      <input
        className={`
          ${styles.input} 
          ${styles.input_radio}`}
        type="radio"
        name={name}
        checked={currentPropValue === value}
        onChange={() => updateSliderProp(name, value)}
      />
    </label>
  );
}
