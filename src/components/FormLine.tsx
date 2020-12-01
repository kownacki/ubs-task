import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
`;

const Label = styled.div`
  width: 160px;
  text-transform: uppercase;
  color: var(--primary-color);
  padding-top: 9px;
`;

const InputsContainer = styled.div`
  flex: 1;
  line-height: 36px;

  & > *:not(:last-child) {
    margin-right: 12px;
  }
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
