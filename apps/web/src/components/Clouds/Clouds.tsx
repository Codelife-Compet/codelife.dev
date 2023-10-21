import React, { useEffect, useState } from "react";
import { Box } from "@codelife-ui/react";
import styles from "./Clouds.module.css";

export default function Clouds() {
  const [hydrated, setHydrated] = useState(false); //<=====

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <Box className={`${styles.clouds}`}>
      <Box className={`${styles.cloud} ${styles["cloud1"]}`}></Box>
      <Box className={`${styles.cloud} ${styles["cloud2"]}`}></Box>
      <Box className={`${styles.cloud} ${styles["cloud3"]}`}></Box>
      <Box className={`${styles.cloud} ${styles["cloud4"]}`}></Box>
      <Box className={`${styles.cloud} ${styles["cloud5"]}`}></Box>
      <Box className={`${styles.cloud} ${styles["cloud6"]}`}></Box>
      <Box className={`${styles.cloud} ${styles["cloud7"]}`}></Box>
      <Box className={`${styles.cloud} ${styles["cloud8"]}`}></Box>
    </Box>
  );
}
