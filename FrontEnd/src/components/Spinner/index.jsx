import React from "react";
import styles from "./styles.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinner_wrapper}>
      <span className={styles.loader} />
    </div>
  );
};

export default Spinner;
