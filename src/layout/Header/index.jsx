import React from "react";
import styles from "./style.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const Header = () => {
  // ここでDBに保存されているユーザー名をjsで通信をして取得しそれをユーザー名のところに置き換える

  return (
    <div className={styles.header}>
      <h1>管理画面</h1>

      <div className={styles.header__menu}>
        <HomeIcon />

        <Badge badgeContent={100} color="primary">
          <MailIcon color="action" />
        </Badge>
        <p>ユーザー名</p>
      </div>
    </div>
  );
};

export default Header;
