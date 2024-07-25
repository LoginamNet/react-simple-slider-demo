"use client";

import styles from "./code.module.css";

type ComponentProps = {
  name: string;
  value: string | number | boolean | undefined;
  defaultValue: string | number | boolean | undefined;
};

export default function Property(props: ComponentProps) {
  const { name, value, defaultValue } = props;

  return (
    value &&
    value !== defaultValue && (
      <div>
        {`        `}
        <span className={styles.red}>{name}</span>
        <span>=</span>
        <span>{`{`}</span>
        {typeof value === "string" ? (
          <span className={styles.maroon}>{`"${value}"`}</span>
        ) : (
          <span className={styles.green}>{`${value}`}</span>
        )}
        <span>{`}`}</span>
      </div>
    )
  );
}
