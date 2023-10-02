import React from "react";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles["error-modal"]}>
      <div className={styles["error-modal__container"]}>
        <div className={styles["error-modal__elm"]}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles["error-modal__elm"]}>
          <p>{props.message}</p>
        </div>
        <div className={styles["error-modal__elm"]}>
          <button onClick={props.onConfirm}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
