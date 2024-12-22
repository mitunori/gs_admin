import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";

const Customer = () => {
  return (
    <>
      <Header />
      <div className={styles.customer}>
        <SideBar />
        {/* <CustomerList /> */}
        カスタマーのページです🤗
      </div>
    </>
  );
};

export default Customer;
