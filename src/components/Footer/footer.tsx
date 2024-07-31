import { FooterDiv, FooterWrapper, IconLogo, LogoWrapper, ModsenLogo, Title } from './footer.styles.ts';
import Container from "@components/layout/container.tsx";

const Footer = () => {
  return (
    <FooterDiv>
      <Container>
        <FooterWrapper>
          <LogoWrapper to="/">
            <IconLogo />
            <Title>
              Museum of <span>Art</span>
            </Title>
          </LogoWrapper>
          <ModsenLogo to="/"></ModsenLogo>
        </FooterWrapper>
      </Container>
    </FooterDiv>
  );
};

export default Footer;
