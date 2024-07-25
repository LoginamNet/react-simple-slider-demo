/* eslint-disable @next/next/no-img-element */
"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import styles from "./docs.module.css";
import Link from "next/link";

export default function Docs() {
  return (
    <div className={styles.docs}>
      <h1>Simple Slider</h1>

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
        A Simple Slider on React with multiple scrolling modes and the ability
        to add custom buttons.
      </p>

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

      <h2>Usage</h2>
      <hr />

      <h3>Instalation</h3>
      <SyntaxHighlighter language="bash" style={atomOneDark}>
        npm i @loginamnet/simple-slider
      </SyntaxHighlighter>

      <h3>Import</h3>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`import SimpleSlider from "@loginamnet/simple-slider";`}
      </SyntaxHighlighter>

      <h3>Basic Example</h3>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
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

      <h3>What can I place inside</h3>
      <p>
        {`Simple Slider accepts ReactNode as "children" — this is a type that
        includes everything that can be returned by the `}
        <Link href={"https://react.dev/reference/react/Component#render"}>
          render()
        </Link>
        {` method of React components.`}
      </p>

      <h3>Width, Height and Background</h3>
      <p>
        {`A Simple Slider occupies 100% of the width and height of the parent element, and each "child" component is wrapped in a Slide that occupies 100% of the size of the slider itself. Resize the parent container to resize the slider. At the same time, your "child" component may have a different size from the Slide, which can sometimes be useful.`}
      </p>
      <p>{`In the example above, each slide will have a size of 600x400px.`}</p>
      <p>{`Both the Simple Slider and the Slide have a transparent background. Add styles to the parent element and to each created "child" component, respectively (for example, to create a preloader).`}</p>

      <h2>Props</h2>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Values</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>controls</td>
            <td>boolean, string</td>
            <td>true, false , &quot;on-hover&quot;</td>
            <td>false</td>
            <td>
              direct control of the slider using the buttons without automatic
              scrolling or with a stop at hover
            </td>
          </tr>
          <tr>
            <td>controlsOptions?</td>
            <td>object</td>
            <td>explanations and an example below</td>
            <td>{`{}`}</td>
            <td>
              various options for setting slider controls when the
              &quot;controls&quot; option is enabled
            </td>
          </tr>
          <tr>
            <td>startWithSlide?</td>
            <td>number</td>
            <td>number</td>
            <td>1</td>
            <td>the number of the slide to start scrolling from</td>
          </tr>
          <tr>
            <td>slidingType?</td>
            <td>string</td>
            <td>
              &quot;sequence&quot;, &quot;underlay&quot;, &quot;overlay&quot;
            </td>
            <td>&quot;overlay&quot;</td>
            <td>the type of slide offset relative to each other</td>
          </tr>
          <tr>
            <td>slidingDirection?</td>
            <td>string</td>
            <td>
              &quot;left&quot;, &quot;top&quot;, &quot;right&quot;,
              &quot;bottom&quot;
            </td>
            <td>&quot;left&quot;</td>
            <td>the direction of movement of the slides</td>
          </tr>
          <tr>
            <td>slidingDuration?</td>
            <td>number</td>
            <td>number</td>
            <td>2000</td>
            <td>the time of one slide movement cycle (ms)</td>
          </tr>
          <tr>
            <td>slidingDelay?</td>
            <td>number</td>
            <td>number</td>
            <td>1000</td>
            <td>
              delay before the start of the next slide movement for auto sliding
              or the &quot;controls&quot; option with the value
              &quot;on-hover&quot; (ms)
            </td>
          </tr>
          <tr>
            <td>slidingTimingFunction?</td>
            <td>string</td>
            <td>string</td>
            <td>&quot;ease&quot;</td>
            <td>
              <Link
                href={
                  "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"
                }
              >
                transition-timing-function
              </Link>
            </td>
          </tr>
          <tr>
            <td>stopOnHover?</td>
            <td>boolean</td>
            <td>true, false</td>
            <td>false</td>
            <td>
              stopping auto sliding with hover on slider (not relevant when the
              &quot;controls&quot; option is set to &quot;on-hover&quot;)
            </td>
          </tr>
          <tr>
            <td>customPrevButtonFN?</td>
            <td>function</td>
            <td>explanations and an example below</td>
            <td></td>
            <td>
              a function for rendering a custom button to move to the previous
              slide
            </td>
          </tr>
          <tr>
            <td>customNextButtonFN?</td>
            <td>function</td>
            <td>explanations and an example below</td>
            <td></td>
            <td>
              a function for rendering a custom button to move to the next slide
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Controls Options</h3>
      <p>
        controlsOptions will be applied only if the controls option is enabled.
        If they are not specified, the buttons will have a standard design and
        position inside the slider.
      </p>
    </div>
  );
}
