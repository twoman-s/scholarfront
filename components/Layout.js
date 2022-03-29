import React from "react";

import Script from "next/script";

import Navbar from "./Navbar";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.contentWrapper}>{children}</div>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />
    </>
  );
};

export default Layout;
