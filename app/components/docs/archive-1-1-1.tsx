"use client";

import styles from "./docs.module.css";
import tableStyles from "./table.module.css";

export default function Archive1_1_1() {
  return (
    <details className={styles.details}>
      <summary>Version 1.1.1</summary>
      <h4>Changed</h4>

      <p>
        Slider properties have been changed, in the form of a
        &quot;from/to&quot; comparison.
      </p>
      <p>
        <b>Controls Options</b>
      </p>
      <p>
        <i>from (1.1.1):</i>
      </p>
      <span />
      <div className={tableStyles.container}>
        <table className={tableStyles.table} border={1}>
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
              <td>buttonShape?</td>
              <td>string</td>
              <td>
                &quot;square&quot;, &quot;circle&quot;, &quot;transparent&quot;
              </td>
              <td>&quot;square&quot;</td>
              <td>the shape of the standard slider buttons</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <i>to (actual):</i>
      </p>
      <span />
      <div className={tableStyles.container}>
        <table className={tableStyles.table} border={1}>
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
              <td>buttonShape?</td>
              <td>string</td>
              <td>
                &quot;square&quot;, &quot;circle&quot;, &quot;transparent&quot;,
                &quot;invisible&quot;
              </td>
              <td>&quot;square&quot;</td>
              <td>the shape of the standard slider buttons</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
  );
}
