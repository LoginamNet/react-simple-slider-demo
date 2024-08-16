"use client";

import Link from "next/link";

import styles from "./table.module.css";

export default function TableProps() {
  return (
    <div className={styles.container}>
      <table className={styles.table} border={1}>
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
            <td>controls?</td>
            <td>undefined, boolean, string</td>
            <td>true, false , &quot;manual&quot;</td>
            <td>undefined</td>
            <td>
              аctivates the slider control buttons and disables automatic
              sliding if the value is set to &quot;manual&quot;
            </td>
          </tr>
          <tr>
            <td>controlsOptions?</td>
            <td>undefined, object</td>
            <td>
              <Link href={"#controls-options"}>
                explanations and an example
              </Link>
            </td>
            <td>{`undefined`}</td>
            <td>
              various options for setting slider controls when the
              &quot;controls&quot; option is enabled
            </td>
          </tr>
          <tr>
            <td>dots?</td>
            <td>undefined, boolean</td>
            <td>true, false</td>
            <td>undefined</td>
            <td>аctivates the slider dots component</td>
          </tr>
          <tr>
            <td>dotsOptions?</td>
            <td>undefined, object</td>
            <td>
              <Link href={"#dots-options"}>explanations and an example</Link>
            </td>
            <td>{`undefined`}</td>
            <td>
              various options for setting slider controls when the
              &quot;dots&quot; option is enabled
            </td>
          </tr>
          <tr>
            <td>startWithSlide?</td>
            <td>number</td>
            <td>number (MIN: 1)</td>
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
            <td>number (MIN: 1)</td>
            <td>2000</td>
            <td>the time of one slide movement cycle (ms)</td>
          </tr>
          <tr>
            <td>slidingDelay?</td>
            <td>number</td>
            <td>number (MIN: 50)</td>
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
            <td>undefined, boolean</td>
            <td>true, false</td>
            <td>undefined</td>
            <td>
              stopping auto sliding with hover on slider (not relevant when the
              &quot;controls&quot; option is set to &quot;on-hover&quot;)
            </td>
          </tr>
          <tr>
            <td>customPrevButtonFN?</td>
            <td>undefined, function</td>
            <td>
              <Link href={"#custom-prev-button"}>
                explanations and an example
              </Link>
            </td>
            <td>undefined</td>
            <td>
              a function for rendering a custom button to move to the previous
              slide
            </td>
          </tr>
          <tr>
            <td>customNextButtonFN?</td>
            <td>undefined, function</td>
            <td>
              <Link href={"#custom-next-button"}>
                explanations and an example
              </Link>
            </td>
            <td>undefined</td>
            <td>
              a function for rendering a custom button to move to the next slide
            </td>
          </tr>
          <tr>
            <td>customDotFN?</td>
            <td>undefined, function</td>
            <td>
              <Link href={"#custom-dots"}>explanations and an example</Link>
            </td>
            <td>undefined</td>
            <td>
              a function for rendering a custom dot for slider dots component
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
