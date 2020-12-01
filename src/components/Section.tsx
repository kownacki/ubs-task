import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  box-shadow: var(--box-shadow);
  padding: 12px 40px;
  background: #ffffff;
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
  margin-right: 160px;
  
  & > * {
    margin-bottom: 16px;
  }
`;

export interface SectionProps {
  title: string;
  children?: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <Root>
      <Header>
        <Heading>{title}</Heading>
      </Header>
      <Contents>
        {children}
      </Contents>
    </Root>
  );
};
