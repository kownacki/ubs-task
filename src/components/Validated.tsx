import styled from 'styled-components';
import React, { FC } from 'react';

const Root = styled.div`
  background: var(--validated-background);
  box-shadow: var(--box-shadow);
  padding: 12px 40px 20px;
`;

const Heading = styled.h2`
  font-weight: normal;
  font-size: 24px;
  padding: 8px 0;
  color: var(--validated-color);
`;

export const Validated: FC = () => {
  return (
    <Root>
      <Heading>Success</Heading>
      Event has been created.
    </Root>
  );
};
