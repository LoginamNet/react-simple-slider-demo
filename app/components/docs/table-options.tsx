"use client";

import Link from "next/link";

import styles from "./table.module.css";

export default function TableOptions() {
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
            <td>notInfinite?</td>
            <td>boolean</td>
            <td>true, false</td>
            <td>false</td>
            <td>
              disables endless sliding and stops on the first and last slides
            </td>
          </tr>
          <tr>
            <td>showOnHover?</td>
            <td>boolean</td>
            <td>true, false</td>
            <td>false</td>
            <td>displays buttons only when hovering over the slider</td>
          </tr>
          <tr>
            <td>position?</td>
            <td>string</td>
            <td>
              &quot;edge&quot;, &quot;start&quot;, &quot;center&quot;,
              &quot;end&quot;;
            </td>
            <td>&quot;edge&quot;</td>
            <td>
              defines the position of the buttons parallel to the axis of motion
              (at the edges, at the beginning, at the end, in the center)
            </td>
          </tr>
          <tr>
            <td>alinging?</td>
            <td>string</td>
            <td>&quot;start&quot;, &quot;center&quot;, &quot;end&quot;;</td>
            <td>&quot;center&quot;</td>
            <td>
              defines the position of the buttons perpendicular to the axis of
              motion (at the beginning, at the end, in the center)
            </td>
          </tr>
          <tr>
            <td>gap?</td>
            <td>number</td>
            <td>number</td>
            <td>20</td>
            <td>the distance between the buttons (px)</td>
          </tr>
          <tr>
            <td>buttonShape?</td>
            <td>string</td>
            <td>
              &quot;square&quot;, &quot;circle&quot;, &quot;transparent&quot;
            </td>
            <td>&quot;square&quot</td>
            <td>the shape of the standard slider buttons</td>
          </tr>
          <tr>
            <td>buttonSize?</td>
            <td>string, number</td>
            <td>
              &quot;small&quot;c, &quot;cmedium&quot;c, &quot;cbig&quot;c,
              number
            </td>
            <td>&quot;cmedium&quot</td>
            <td>the size of the standard slider buttons (px)</td>
          </tr>
          <tr>
            <td>buttonMargin?</td>
            <td>string, number</td>
            <td>string</td>
            <td>30</td>
            <td>
              the margin of the standard slider buttons (px). using a string,
              you can achieve different values vertically and horizontally
            </td>
          </tr>
          <tr>
            <td>arrowColor?</td>
            <td>string</td>
            <td>string</td>
            <td>&quot;#000000&quot;</td>
            <td>
              <Link
                href={"https://developer.mozilla.org/en-US/docs/Web/CSS/color"}
              >
                color
              </Link>
              {` of the standard slider buttons arrows`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
