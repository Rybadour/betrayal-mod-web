import React from 'react';
import styled from 'styled-components';
import { Button } from './components/button';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container>
      <BackgroundImage />
      <Text>
        <Title>Traitors Mod</Title>
        <Subtitle>A hidden roles mod for Betrayal House on the Hill</Subtitle>
      </Text>

      <Actions>
        <Link to='new-game'><Button>New Game</Button></Link>
        <Button>Resume</Button>
      </Actions>
    </Container>
  );
}

const Container = styled.div`
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
  height: 300px;
  margin: 0 auto;
  z-index: -1;
  background-image: url('Betrayal_Event_Block_Image.jpeg');
  background-repeat: no-repeat;
  background-position-x: calc(50% - 30px);
`;

const Text = styled.div`
  width: 100%;
  margin-top: 250px;
  text-align: center;
  color: #DDD;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-top: 5rem;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
`;

export default App;
