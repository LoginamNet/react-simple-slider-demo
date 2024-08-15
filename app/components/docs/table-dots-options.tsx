"use client";

import Link from "next/link";

import styles from "./table.module.css";

export default function TableDotsOptions() {
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
            <td>showOnHover?</td>
            <td>undefined, boolean</td>
            <td>undefined, true</td>
            <td>undefined</td>
            <td>displays dots component only when hovering over the slider</td>
          </tr>
          <tr>
            <td>direction?</td>
            <td>string</td>
            <td>&quot;horizontal&quot;, &quot;vertical&quot;</td>
            <td>&quot;horizontal&quot;</td>
            <td>
              defines the vertical or horizontal position of the dots inside
              dots component
            </td>
          </tr>
          <tr>
            <td>position?</td>
            <td>string</td>
            <td>&quot;start&quot;, &quot;center&quot;, &quot;end&quot;;</td>
            <td>&quot;center&quot;</td>
            <td>
              defines the position of the dots component parallel to the axis of
              motion (at the beginning, at the end, in the center)
            </td>
          </tr>
          <tr>
            <td>alinging?</td>
            <td>string</td>
            <td>&quot;start&quot;, &quot;center&quot;, &quot;end&quot;;</td>
            <td>&quot;end&quot;</td>
            <td>
              defines the position of the dots component perpendicular to the
              axis of motion (at the beginning, at the end, in the center)
            </td>
          </tr>
          <tr>
            <td>reverse?</td>
            <td>undefined, boolean</td>
            <td>undefined, true</td>
            <td>undefined</td>
            <td>changes the direction of dots inside dots component</td>
          </tr>
          <tr>
            <td>gap?</td>
            <td>number</td>
            <td>number (MIN: 0)</td>
            <td>10</td>
            <td>the distance between the dots inside dots component (px)</td>
          </tr>
          <tr>
            <td>margin?</td>
            <td>string, number</td>
            <td>string, number (MIN: 0)</td>
            <td>30</td>
            <td>
              the margin of the standard slider dots component (px). using a
              string, you can achieve different values vertically and
              horizontally
            </td>
          </tr>
          <tr>
            <td>dotShape?</td>
            <td>string</td>
            <td>&quot;square&quot;, &quot;circle&quot;</td>
            <td>&quot;square&quot;</td>
            <td>the shape of the standard slider dots</td>
          </tr>
          <tr>
            <td>dotSize?</td>
            <td>string, number</td>
            <td>
              &quot;small&quot;, &quot;medium&quot;, &quot;big&quot;, number
              (MIN: 1)
            </td>
            <td>&quot;medium&quot;</td>
            <td>the size of the standard slider dot (px)</td>
          </tr>
          <tr>
            <td>dotColor?</td>
            <td>string</td>
            <td>string</td>
            <td>&quot;#787878&quot;</td>
            <td>
              <Link
                href={"https://developer.mozilla.org/en-US/docs/Web/CSS/color"}
              >
                color
              </Link>
              {` of the standard slider dot for non-active slide`}
            </td>
          </tr>
          <tr>
            <td>activeDotColor?</td>
            <td>string</td>
            <td>string</td>
            <td>&quot;#000000&quot;</td>
            <td>
              <Link
                href={"https://developer.mozilla.org/en-US/docs/Web/CSS/color"}
              >
                color
              </Link>
              {` of the standard slider dot for active slide`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
