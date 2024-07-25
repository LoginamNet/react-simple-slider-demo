import styles from "./props.module.css";

type ComponentProps = {
  name: string;
  placeholder?: string;
  updateSliderProp: (
    key: string,
    value: boolean | string | number | undefined
  ) => void;
};

export default function StringInput(props: ComponentProps) {
  const { name, placeholder, updateSliderProp } = props;

  return (
    <div className={styles.input_container}>
      <input
        className={`
          ${styles.input} 
          ${styles.input_string}`}
        type="text"
        placeholder={placeholder}
        onChange={(event) => updateSliderProp(name, event.target.value)}
      />
    </div>
  );
}
