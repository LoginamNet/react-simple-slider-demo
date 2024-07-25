"use client";

import styles from "./code.module.css";

type ComponentProps = {
  name: string;
  value: boolean | undefined;
};

export default function OptionBoolean(props: ComponentProps) {
  const { name, value } = props;

  return (
    value && (
      <div>
        {`          `}
        <span className={styles.navy}>{name}</span>
        <span>:</span>
        <span className={styles.blue}>{` true`}</span>
        <span>,</span>
      </div>
    )
  );
}
