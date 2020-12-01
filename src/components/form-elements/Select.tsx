import React, { FC, SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

// Html select doesn't allow :before pseudo element, thus a wrapper is required
const Wrapper = styled.div`
  position: relative;

  &:before {
    --size: 6px;
    content: "";
    display: block;
    position: absolute;
    top: calc(50% - var(--size)/2);
    right: 12px;
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid #000000;
    pointer-events: none;
  }
`;

const SelectElement = styled.select`
  border: solid 1px var(--dark-grey);
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
`;

export const Select: FC<SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return (
    <Wrapper>
      <SelectElement {...props} />
    </Wrapper>
  );
};
