import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  box-shadow: var(--box-shadow);
  padding: 12px 0;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 820px;
  padding: 0 20px;
  margin: auto;
`;

const Header = styled.div`
  border-bottom: solid 1px var(--dark-grey);
  margin-bottom: 32px;
`;

const Heading = styled.h2`
  font-weight: normal;
  font-size: 24px;
  padding: 8px 0;
  color: var(--primary-color);
`;

const Contents = styled.div`
  max-width: 660px;
  
  & > * {
    margin-bottom: 14px;
  }
`;

export interface SectionProps {
  title: string;
  children?: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <Root>
      <Container>
        <Header>
          <Heading>{title}</Heading>
        </Header>
        <Contents>
          {children}
        </Contents>
      </Container>
    </Root>
  );
};
