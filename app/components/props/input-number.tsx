import styles from "./props.module.css";

type ComponentProps = {
  name: string;
  placeholder?: string;
  updateSliderProp: (
    key: string,
    value: boolean | string | number | undefined
  ) => void;
};

export default function NumberInput(props: ComponentProps) {
  const { name, placeholder, updateSliderProp } = props;

  return (
    <div className={styles.input_container}>
      <input
        className={`
          ${styles.input} 
          ${styles.input_number}`}
        type="text"
        placeholder={placeholder}
        pattern="/^[0-9]+$/"
        onChange={(event) => updateSliderProp(name, Number(event.target.value))}
      />
    </div>
  );
}
