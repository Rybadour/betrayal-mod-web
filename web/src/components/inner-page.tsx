import {ReactNode} from "react";
import styled from "styled-components";

export interface InnerPageProps {
  children: ReactNode;
}

export function InnerPage(props: InnerPageProps) {
  return <StyledInnerPage>
    <BackgroundImage />
    <Container>
    {props.children}
    </Container>
    <BackgroundGradient />
  </StyledInnerPage>;
}

const StyledInnerPage = styled.div`
  min-height: 100dvh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 141px;
  margin: 0 auto;
  z-index: -1;
  background-image: url('InnerPageHeader.png');
  background-repeat: no-repeat;
  background-position-x: calc(50%);
`;

const Container = styled.div`
  margin-top: 120px;
  color: #FFF;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: calc(100% - 100px);
  left: 0;
  right: 0;
  height: 100px;
  margin: 0 auto;
  z-index: -1;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.8), #02473d);
`;