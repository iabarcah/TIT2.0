import React from "react";
import styles from "./styles.module.scss";

const Spinner = ({ fullScreen = false }) => {
  const spinnerClassName = `${styles.spinner_wrapper} ${
    fullScreen ? styles.fullScreen : ""
  }`;

  return <div className={spinnerClassName}>Cargando...</div>;
};

export default Spinner;
