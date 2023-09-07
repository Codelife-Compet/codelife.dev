import React from 'react';
import styles from '../styles/Loader.module.css';
import { Box, Text } from '@codelife-ui/react';

interface loaderProps {
  textLoader?: string;
}

function Loader({ textLoader }: loaderProps) {
  return (
    <Box className={styles.container}>
      <Box className={styles.loader}></Box>
      <Text className="text-[3vw] font-bold">
        {textLoader ? textLoader + '...' : ''}
      </Text>
    </Box>
  );
}
export default Loader;
