import React from 'react';
import styles from '../styles/Loader.module.css';
import { Box, Text } from '@codelife-ui/react';
import { useTranslation } from 'react-i18next';

function Loader() {
  const { t } = useTranslation();

  return (
    <Box className={styles.container}>
      <Box className={styles.loader}></Box>
      <Text className="text-[3vw] font-bold">{t('Loading')}...</Text>
    </Box>
  );
}
export default Loader;
