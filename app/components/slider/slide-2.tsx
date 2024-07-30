"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import styles from "./slider.module.css";

export default function Slide2() {
  return (
    <div
      className={`
  ${styles.slide}
  ${styles.slide_2}
  `}
    >
      <h1>Install ME!</h1>
      <p>Please copy and paste the code below!</p>
      <SyntaxHighlighter language="bash" style={atomOneDark}>
        npm i @loginamnet/simple-slider
      </SyntaxHighlighter>
    </div>
  );
}
