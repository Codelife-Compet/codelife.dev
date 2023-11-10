import React from 'react';
import { Box } from '@codelife-ui/react';
import styles from './Loader.module.css';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: { size: '1.5rem', borderWidth: '2.5px' },
  md: { size: '3.5rem', borderWidth: '4.5px' },
  lg: { size: '5.5rem', borderWidth: '6px' },
  xl: { size: '7rem', borderWidth: '7.5px' },
};

function Loader({ size = 'xl', containerStyle }: LoaderProps) {
  const { size: spinnerSize, borderWidth } = sizeMap[size];

  const spinnerStyle = {
    width: spinnerSize,
    height: spinnerSize,
    borderWidth: borderWidth,
    borderColor: '#165F7A transparent transparent #165F7A',
    borderRadius: '50%',
  };

  return (
    <Box className={styles.container} style={containerStyle}>
      <Box className={styles.loader}>
        <div style={spinnerStyle}></div>
        <div style={spinnerStyle}></div>
        <div style={spinnerStyle}></div>
        <div style={spinnerStyle}></div>
      </Box>
    </Box>
  );
}

export default Loader;
