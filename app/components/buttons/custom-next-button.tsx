import styles from "./custom-button.module.css";

export default function CustomNextButton(
  nextSlide: () => void,
  sliding?: boolean,
  atFirstSlide?: boolean
) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        nextSlide();
      }}
      disabled={sliding || atFirstSlide}
    >
      NEXT
    </button>
  );
}
