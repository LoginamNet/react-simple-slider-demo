"use client";

import Link from "next/link";

import styles from "./docs.module.css";
import tableStyles from "./table.module.css";

export default function Archive1_0_11() {
  return (
    <details className={styles.details}>
      <summary>Version 1.0.11 & Erlier</summary>
      <h4>Changed</h4>

      <p>
        Slider properties have been changed, in the form of a
        &quot;from/to&quot; comparison.
      </p>
      <p>
        <b>Props</b>
      </p>
      <p>
        <i>from (1.0.11 & Erlier):</i>
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
              <td>controls?</td>
              <td>undefined, boolean, string</td>
              <td>true, false , &quot;on-hover&quot;</td>
              <td>undefined</td>
              <td>
                direct control of the slider using the buttons without automatic
                scrolling or with a stop at hover
              </td>
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
              <td>controls?</td>
              <td>undefined, boolean, string</td>
              <td>true, false , &quot;manual&quot;</td>
              <td>undefined</td>
              <td>
                аctivates the slider control buttons and disables automatic
                sliding if the value is set to &quot;manual&quot;
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p />
      <span />
      <h4>Not Exist</h4>

      <p>
        This versions of the slider does not support the following properties:
      </p>
      <p>
        <b>Props</b>
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

      <p>
        <b>Controls Options</b>
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
              <td>reverse?</td>
              <td>undefined, boolean</td>
              <td>undefined, true</td>
              <td>undefined</td>
              <td>swaps the control buttons</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
  );
}
