import styles from "./custom-button.module.css";

export default function CustomPrevButton(
  prevSlide: () => void,
  sliding?: boolean,
  atFirstSlide?: boolean
) {
  return (
    <button
      className={`${styles.button} ${styles.button_prev}`}
      onClick={() => {
        prevSlide();
      }}
      disabled={sliding || atFirstSlide}
    >
      CUSTOM PREV
    </button>
  );
}
