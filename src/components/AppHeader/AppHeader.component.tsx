import React from "react";

import config from "../../config";

import styles from "./AppHeader.module.scss";

interface Props {
  children: React.ReactNode;
}

const AppHeader = (props: Props) => {
  return (
    <header className={styles.appHeaderWrapper}>
      <div className={styles.appHeader}>
        <div className={styles.appLogo}>{config.appConfig.appDisplayName}</div>
        <div>{props.children}</div>
      </div>
    </header>
  );
};

export default AppHeader;
