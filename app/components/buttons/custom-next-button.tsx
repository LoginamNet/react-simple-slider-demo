import styles from "./custom-button.module.css";

export default function CustomNextButton(
  nextSlide: () => void,
  sliding?: boolean,
  atFirstSlide?: boolean
) {
  return (
    <button
      className={`${styles.button} ${styles.button_next} ${
        sliding && styles.disabled
      }`}
      onClick={() => {
        nextSlide();
      }}
      disabled={sliding || atFirstSlide}
    >
      CUSTOM NEXT
    </button>
  );
}
