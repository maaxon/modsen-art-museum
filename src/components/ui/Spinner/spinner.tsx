import React from 'react';
import { SpinnerWrapper, StyledSpinner } from './spinner.styles.ts';

const Spinner: React.FC = () => {
  return (
    <SpinnerWrapper data-testid="spinner-wrapper">
      <StyledSpinner data-testid="spinner" />
    </SpinnerWrapper>
  );
};

export default Spinner;
