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
            <td>
              <Link href={"#controls-options"}>
                explanations and an example below
              </Link>
            </td>
            <td>{`{}`}</td>
            <td>
              various options for setting slider controls when the
              &quot;controls&quot; option is enabled
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
            <td>
              <Link href={"#custom-prev-button"}>
                explanations and an example below
              </Link>
            </td>
            <td></td>
            <td>
              a function for rendering a custom button to move to the previous
              slide
            </td>
          </tr>
          <tr>
            <td>customNextButtonFN?</td>
            <td>function</td>
            <td>
              <Link href={"#custom-next-button"}>
                explanations and an example below
              </Link>
            </td>
            <td></td>
            <td>
              a function for rendering a custom button to move to the next slide
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
