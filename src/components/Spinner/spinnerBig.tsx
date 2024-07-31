import { SpinnerWrapperBig, StyledSpinnerBig } from './spinner.styles.ts';

const SpinnerBig = () => {
  return (
    <SpinnerWrapperBig data-testid="spinner-wrapper">
      <StyledSpinnerBig data-testid="spinner" />
    </SpinnerWrapperBig>
  );
};

export default SpinnerBig;