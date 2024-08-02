"use client";

import styles from "./code.module.css";

type ComponentProps = {
  name: string;
  value: string | number | boolean | undefined;
  defaultValue: string | number | boolean | undefined;
  minValue?: number;
};

export default function Property(props: ComponentProps) {
  const { name, value, defaultValue, minValue } = props;

  return value && value !== defaultValue ? (
    typeof value !== "number" ? (
      <div>
        {`        `}
        <span className={styles.red}>{name}</span>
        <span>=</span>
        <span>{`{`}</span>
        <span className={styles.maroon}>{`"${value}"`}</span>
        <span>{`}`}</span>
      </div>
    ) : minValue && value >= minValue ? (
      <div>
        {`        `}
        <span className={styles.red}>{name}</span>
        <span>=</span>
        <span>{`{`}</span>
        <span className={styles.green}>{`${value}`}</span>
        <span>{`}`}</span>
      </div>
    ) : (
      ""
    )
  ) : (
    ""
  );
}
