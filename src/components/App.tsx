import React, { FC } from 'react';
import styled from 'styled-components';
import '../index.css';
import { Header } from './Header';
import { AboutSection } from './sections/AboutSection';
import { CoordinatorSection } from './sections/CoordinatorSection';
import { WhenSection } from './sections/WhenSection';

const Root = styled.div`
`;

const Contents = styled.div`
  width: 900px;
  margin: auto;
  
  & > * {
    margin-bottom: 20px;
  }
`;

export const App: FC = () => {
  return (
    <Root>
      <Header />
      <Contents>
        <AboutSection />
        <CoordinatorSection />
        <WhenSection />
      </Contents>
    </Root>
  );
};
