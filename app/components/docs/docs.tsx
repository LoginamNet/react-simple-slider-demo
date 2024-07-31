/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import TableProps from "./table-props";
import TableOptions from "./table-options";

import styles from "./docs.module.css";

export default function Docs() {
  return (
    <div className={styles.docs}>
      <h1>Simple Slider</h1>

      {/* -------------------------------------- badges -------------------------------------- */}

      <div className={styles.badges}>
        <a href="https://atomOneDark.com/LoginamNet/react-simple-slider/blob/main/LICENCE">
          <img
            src="https://img.shields.io/badge/License-MIT-yellow.svg"
            alt="licence"
          />
        </a>
        <a href="https://www.npmjs.com/package/@loginamnet/simple-slider">
          <img
            src="https://img.shields.io/npm/v/@loginamnet/simple-slider.svg"
            alt="version"
          />
        </a>
        <a href="https://prettier.io">
          <img
            src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?color=%23c1a8e2"
            alt="prettier"
          />
        </a>
        <a href="https://bundlephobia.com/result?p=@loginamnet/simple-slider">
          <img
            src="https://img.shields.io/bundlephobia/minzip/@loginamnet/simple-slider?color=%238ab4f8&label=gzip%20size"
            alt="size"
          />
        </a>
      </div>
      <p>
        A <b> Simple Slider </b>
        on React with multiple scrolling modes and the ability to add custom
        buttons.
      </p>

      {/* -------------------------------------- Navigation -------------------------------------- */}

      <h2>Navigation</h2>
      <hr />
      <ul className={styles.nav}>
        <li>
          <Link href={"#usage"}>How to use</Link>
        </li>
        <li>
          <Link href={"#props"}>Properties</Link>
          <ul>
            <li>
              <Link href={"#controls-options"}>Controls options</Link>
            </li>
            <li>
              <Link href={"#controls-options-example"}>
                Controls options example
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={"#custom-buttons"}>Custom buttons</Link>
          <ul>
            <li>
              <Link href={"#custom-prev-button"}>Previous button</Link>
            </li>
            <li>
              <Link href={"#custom-next-button"}>Next button</Link>
            </li>
            <li>
              <Link href={"#custom-buttons-example"}>
                Custom buttons example
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={"#special-case"}>Special case</Link>
        </li>
        <li>
          <Link href={"#plans"}>Plans</Link>
        </li>
        <li>
          <Link href={"#licence"}>Licence</Link>
        </li>
      </ul>

      {/* -------------------------------------- Features -------------------------------------- */}

      <h2>Features</h2>
      <hr />
      <ul className={styles.features}>
        <li>Several directions of movement and types of slide changes 🌗</li>
        <li>Responsive design 💻</li>
        <li>Easy to add custom rendered slides 📌</li>
        <li>The ability to add your own control buttons ▶️</li>
        <li>Dependency free 🌱</li>
        <li>Lightweight 🎈</li>
      </ul>

      <h2 id="usage">Usage</h2>
      <hr />

      {/* -------------------------------------- Instalation -------------------------------------- */}

      <h3>Instalation</h3>
      <SyntaxHighlighter language="bash" style={atomOneDark}>
        npm i @loginamnet/simple-slider
      </SyntaxHighlighter>
      <h3>Import</h3>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`import SimpleSlider from "@loginamnet/simple-slider";`}
      </SyntaxHighlighter>

      {/* -------------------------------------- Basic Example -------------------------------------- */}

      <h3>Basic Example</h3>
      <SyntaxHighlighter
        codeTagProps={{
          style: { fontFamily: "var(--font-azeret-mono)", fontSize: "16px" },
        }}
        language="javascript"
        style={atomOneDark}
      >
        {`import SimpleSlider from "@loginamnet/simple-slider";

import MySlide2 from "./components";
import MySlide3 from "./components";

export default function MySliderComponent() {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <SimpleSlider>
        {/* first slide created directly inside the slider */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: "20px",
          }}
        >
          <h1>First Slide</h1>
        </div>

        {/* second slide imported from components folder */}
        <MySlide2 text="Second Slide" />

        {/* third slide imported from components folder */}
        <MySlide3>Third Slide</MySlide3>
      </SimpleSlider>
    </div>
  );
}`}
      </SyntaxHighlighter>

      {/* -------------------------------------- What can I place inside -------------------------------------- */}

      <h3>What can I place inside</h3>
      <p>
        {`Simple Slider accepts ReactNode as "children" — this is a type that
        includes everything that can be returned by the `}
        <Link href={"https://react.dev/reference/react/Component#render"}>
          render()
        </Link>
        {` method of React components.`}
      </p>

      {/* -------------------------------------- Width, Height and Background -------------------------------------- */}

      <h3>Width, Height and Background</h3>
      <p>
        {`A Simple Slider occupies 100% of the width and height of the parent element, and each "child" component is wrapped in a Slide that occupies 100% of the size of the slider itself. Resize the parent container to resize the slider. At the same time, your "child" component may have a different size from the Slide, which can sometimes be useful.`}
      </p>
      <p>{`In the example above, each slide will have a size of 600x400px.`}</p>
      <p>{`Both the Simple Slider and the Slide have a transparent background. Add styles to the parent element and to each created "child" component, respectively (for example, to create a preloader).`}</p>

      {/* -------------------------------------- Props -------------------------------------- */}

      <h2 id="props">Props</h2>
      <hr />
      <TableProps />

      {/* -------------------------------------- Controls Options -------------------------------------- */}

      <h3 id="controls-options">Controls Options</h3>
      <p>
        controlsOptions will be applied only if the
        <b> controls </b>
        option is enabled. If they are not specified, the buttons will have a
        standard design and position inside the slider.
      </p>
      <TableOptions />

      {/* -------------------------------------- Controls Options Example -------------------------------------- */}

      <h3 id="controls-options-example">Controls Options Example</h3>
      <SyntaxHighlighter
        codeTagProps={{
          style: { fontFamily: "var(--font-azeret-mono)", fontSize: "16px" },
        }}
        language="javascript"
        style={atomOneDark}
      >
        {`import SimpleSlider from "@loginamnet/simple-slider";

import MySlide1 from "./components";
import MySlide2 from "./components";

export default function MySliderComponent() {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <SimpleSlider
        controls="on-hover"
        controlsOptions={{
          notInfinite: true,
          position: "center",
          alinging: "end",
          gap: 100,
          buttonShape: "transparent",
          buttonSize: "big",
          buttonMargin: "0 30px",
          arrowColor: "blue",
        }}
      >
        <MySlide1 text="First Slide" />
        <MySlide2>Second Slide</MySlide2>
      </SimpleSlider>
    </div>
  );
}`}
      </SyntaxHighlighter>

      {/* -------------------------------------- Custom Buttons -------------------------------------- */}

      <h3 id="custom-buttons">Custom Buttons</h3>
      <p>
        You can replace the standard slider buttons (or just one of them) with
        custom ones!
      </p>
      <p>
        {`To do this, you need to create a custom component of the button in a special way and transfer it to the slider as a function. For the "previous" and "next" buttons, these components will be slightly different.`}
      </p>

      {/* -------------------------------------- Previous Button Component -------------------------------------- */}

      <h3 id="custom-prev-button">Previous Button Component</h3>
      <SyntaxHighlighter
        codeTagProps={{
          style: { fontFamily: "var(--font-azeret-mono)", fontSize: "16px" },
        }}
        language="javascript"
        style={atomOneDark}
      >
        {`export default function CustomPrevButton(
  prevSlide: () => void,
  sliding?: boolean,
  atFirstSlide?: boolean
) {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();

        prevSlide();
      }}
      disabled={sliding || atFirstSlide}
    >
      Custom Previous Button!
    </button>
  );
}`}
      </SyntaxHighlighter>

      {/* -------------------------------------- Next Button Component -------------------------------------- */}

      <h3 id="custom-next-button">Next Button Component</h3>
      <SyntaxHighlighter
        codeTagProps={{
          style: { fontFamily: "var(--font-azeret-mono)", fontSize: "16px" },
        }}
        language="javascript"
        style={atomOneDark}
      >
        {`export default function CustomNextButton(
  nextSlide: () => void,
  sliding?: boolean,
  atFirstSlide?: boolean
) {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();

        nextSlide();
      }}
      disabled={sliding || atFirstSlide}
    >
      Custom Next Button!
    </button>
  );
}`}
      </SyntaxHighlighter>
      <p>
        For the correct behavior of the slider,
        <b> it is important to use the </b>
        <Link
          href={
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
          }
        >
          button
        </Link>
        <b> tag! </b>
        But its contents and styles depend entirely on your imagination.
      </p>
      <p>
        The
        <b> sliding </b>
        property determines the behavior of the button during the slide movement
        cycle.
      </p>
      <p>
        The
        <b> atFirstSlide </b>
        and
        <b> atLastSlide </b>
        properties determine the behavior of the button when the first and last
        slide are reached, respectively. These properties will only work if the
        <b> notInfinite </b>
        property in the
        <b> controlsOptions </b>
        object is set to
        <b> true</b>.
      </p>
      <p>
        In the above examples of custom buttons, all these properties are used
        to disable the buttons, but you can apply them as you want.
      </p>

      {/* -------------------------------------- Slider With Custom Buttons Example -------------------------------------- */}

      <h3 id="custom-buttons-example">Slider With Custom Buttons Example</h3>
      <SyntaxHighlighter
        codeTagProps={{
          style: { fontFamily: "var(--font-azeret-mono)", fontSize: "16px" },
        }}
        language="javascript"
        style={atomOneDark}
      >
        {`import SimpleSlider from "@loginamnet/simple-slider";

import MySlide1 from "./components";
import MySlide2 from "./components";
import CustomPrevButton from "./components";
import CustomNextButton from "./components";

export default function MySliderComponent() {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <SimpleSlider
        controls="on-hover"
        customPrevButtonFN={CustomPrevButton}
        customNextButtonFN={CustomNextButton}
      >
        <MySlide1 text="First Slide" />
        <MySlide2>Second Slide</MySlide2>
      </SimpleSlider>
    </div>
  );
}`}
      </SyntaxHighlighter>

      {/* -------------------------------------- Special Case -------------------------------------- */}

      <h2 id="special-case">Special Case</h2>
      <hr />
      <p>
        During normal operation of the slider outside the slide change cycle,
        only the current slide remains visible - even if the size of the
        component itself is smaller than the size of the slider.
      </p>
      <p>
        However, with certain settings, it is possible to overlay one slide on
        top of another to create a complete picture.
      </p>
      <p>
        To achieve this effect, you need to set
        <b> controls </b>
        to
        <b> true </b>
        {`(not`}
        <b> on-hover</b>
        {`), the`}
        <b> notInfinite </b>
        property in the
        <b> controlsOptions </b>
        object is set to
        <b> true </b>
        and
        <b> slidingType </b>
        is set
        <b> overlay </b>
        {`(this value is set by default).`}
      </p>
      <SyntaxHighlighter
        codeTagProps={{
          style: { fontFamily: "var(--font-azeret-mono)", fontSize: "16px" },
        }}
        language="javascript"
        style={atomOneDark}
      >
        {`controls
controlsOptions={{
    notInfinite: true,
}}`}
      </SyntaxHighlighter>
      <p>
        If it is necessary that the slides be removed from the already laid out
        stack - set the option
        <b> startWithSlide </b>
        {`equal to the number of slides (you may have to change`}
        <b> slidingDirection </b>
        {`option to the opposite too).`}
      </p>
      <SyntaxHighlighter
        codeTagProps={{
          style: { fontFamily: "var(--font-azeret-mono)", fontSize: "16px" },
        }}
        language="javascript"
        style={atomOneDark}
      >
        {`controls
controlsOptions={{
    notInfinite: true,
}}
{/* in this example, it is assumed that we have added five slides */}
startWithSlide={5}`}
      </SyntaxHighlighter>

      {/* -------------------------------------- Plans -------------------------------------- */}

      <h2 id="plans">Plans</h2>
      <hr />
      <ul className={styles.plans}>
        <li>{`Add a "dots" component that can be placed outside the slider`}</li>
      </ul>

      {/* -------------------------------------- Licence -------------------------------------- */}

      <h2 id="licence">Licence</h2>
      <hr />
      <Link
        href={
          "https://github.com/LoginamNet/react-simple-slider/blob/main/LICENCE"
        }
      >
        MIT
      </Link>
      <p>
        It can be used
        <b> for free </b>
        in any personal or commercial project 🎁
      </p>
    </div>
  );
}
