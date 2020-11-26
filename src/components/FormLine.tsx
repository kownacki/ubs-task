import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
`;

const Label = styled.div`
  width: 160px;
  text-transform: uppercase;
  color: var(--primary-color);
  padding-top: 8px;
`;

const InputsContainer = styled.div`
  flex: 1;
`;

export interface FormLineProps {
  label: string;
  children?: ReactNode;
}

export const FormLine: FC<FormLineProps> = ({ label, children }) => {
  return (
    <Root>
      <Label>{label}</Label>
      <InputsContainer>
        {children}
      </InputsContainer>
    </Root>
  );
};
