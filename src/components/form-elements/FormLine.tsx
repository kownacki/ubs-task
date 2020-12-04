import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  
  @media (max-width: 599px) {
    display: block;
  }
`;

const Label = styled.div`
  width: 160px;
  text-transform: uppercase;
  color: var(--primary-color);
  padding: 10px 0 12px;
`;

const ContentsContainer = styled.div`
  flex: 1;

  & > * {
    margin-bottom: 2px;
  }

  & > *:not(:last-child) {
    margin-right: 12px;
  }
`;

export interface FormLineProps {
  label: string;
  required?: boolean;
  children?: ReactNode;
}

export const FormLine: FC<FormLineProps> = ({ label, required, children }) => {
  return (
    <Root>
      <Label>{`${label}${required ? ' *': ''}`}</Label>
      <ContentsContainer>
        {children}
      </ContentsContainer>
    </Root>
  );
};
