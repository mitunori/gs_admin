import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";

const Logout = () => {
  return (
    <>
      <Header />
      <div className={styles.logout}>　ログアウトしました</div>
    </>
  );
};

export default Logout;
