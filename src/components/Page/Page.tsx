import React from "react";
import styles from "./Page.module.scss";

type PropsWithChildren<P = any> = P & { children?: React.ReactNode };

const Page: React.FC<PropsWithChildren> = (props) => {
  return <div className={styles.Page}>{props?.children}</div>;
};

export default Page;
