"use client";

import Link from "next/link";

import styles from "./slider.module.css";

export default function Slide7() {
  return (
    <div
      className={`
  ${styles.slide}
  ${styles.slide_7}
  `}
    >
      <h1>Contacts!</h1>
      <p>{`Questions, suggestions, criticism? The author is ready to answer everything`}</p>
      <div className={styles.social}>
        <Link
          className={styles.button_link}
          href="https://aleksandr-chuchev.netlify.app/"
        >
          <svg width="40" height="40" viewBox="0 0 512 512">
            <path d="M256 256a112 112 0 1 0-112-112 112 112 0 0 0 112 112Zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128Z" />
          </svg>
        </Link>

        <Link className={styles.button_link} href="mailto:loginamnet@gmail.com">
          <svg width="40" height="40" viewBox="0 -2.5 5 5">
            <path
              fill="#000"
              fillRule="evenodd"
              d="M4.28-1.162 2.476.422.672-1.165v-.063H4.28zM.672 1.253V-.564l1.804 1.587L4.28-.562v1.815Zm-.45.45h4.51v-3.382H.221z"
            />
          </svg>
        </Link>

        <Link className={styles.button_link} href="https://t.me/LoginamNet">
          <svg width="40" height="40" viewBox="0 0 6 6">
            <path d="m5.715 1.083-.817 3.86c-.057.274-.222.34-.453.213L3.2 4.235l-.603.582c-.068.068-.124.126-.249.126-.163 0-.136-.06-.19-.215l-.43-1.401-1.234-.385c-.268-.08-.27-.263.059-.396L5.366.689c.22-.098.43.054.347.392z" />
          </svg>
        </Link>

        <Link
          className={styles.button_link}
          href="https://github.com/LoginamNet"
        >
          <svg width="40" height="40" viewBox="-1.5 0 4.75 4.75">
            <path d="M2.934.346v4.07H1.611c-.11 0-.143-.062-.143-.118l.002-.572a.497.497 0 0 0-.142-.386c.465-.052.953-.228.953-1.03a.805.805 0 0 0-.215-.559.749.749 0 0 0-.02-.551s-.175-.056-.574.214a1.975 1.975 0 0 0-1.044 0C.03 1.144-.145 1.2-.145 1.2a.75.75 0 0 0-.02.551.807.807 0 0 0-.215.56c0 .8.487.978.95 1.03a.446.446 0 0 0-.133.28.444.444 0 0 1-.607-.174.438.438 0 0 0-.319-.215s-.204-.002-.014.127a.551.551 0 0 1 .23.305s.124.406.704.28l.002.355c0 .055-.037.116-.142.116h-1.426V.345Z" />
          </svg>
        </Link>

        <Link
          className={styles.button_link}
          href="https://www.npmjs.com/package/@loginamnet/simple-slider?activeTab=readme"
        >
          <svg width="40" height="40" fill="none" viewBox="0 0 3.75 3.75">
            <path
              fill="#000"
              fillRule="evenodd"
              d="M.15.629h3.455v2.114H1.763v.604h-.691v-.604H.151Zm.922 1.812V.93h-.69v1.51h.23V1.233h.23V2.44Zm.23-1.51v2.114h.23v-.604h.461V.93Zm.922 0v1.51h.23V1.233h.23V2.44h.23V1.233h.23V2.44h.231V.93Zm-.691 1.208v-.906h.23v.906z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
