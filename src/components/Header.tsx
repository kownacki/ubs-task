import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  background: var(--primary-color);
  border-top: solid 8px var(--primary-color-dark);
  margin-bottom: 28px;
`;

const Heading = styled.h1`
  width: 820px;
  color: #ffffff;
  font-weight: normal;
  font-size: 28px;
  margin: auto;
  padding: 16px 0
`;

export const Header: FC = () => {
  return (
    <Root>
      <Heading>New event</Heading>
    </Root>
  );
};
