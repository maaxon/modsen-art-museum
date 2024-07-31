import { SpinnerWrapper, StyledSpinner } from './spinner.styles.ts';

const Spinner = () => {
  return (
    <SpinnerWrapper data-testid="spinner-wrapper">
      <StyledSpinner data-testid="spinner" />
    </SpinnerWrapper>
  );
};

export default Spinner;
