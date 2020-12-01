import styled from 'styled-components';

export const Radio = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  position: relative;
  top: 2px;
  margin: 8px 8px 0 0;
  width: 16px;
  height: 16px;

  &:before, &:after {
    content: "";
    display: block;
    border-radius: 100%;
    transition: all 100ms linear;
  }

  /* outer dot */
  &:before {
    border-width: 1px;
    border-style: solid;
    border-color: var(--font-color);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /* inner dot */
  &:after {
    width: 8px;
    height: 8px;
    margin: 4px;
    background-color: var(--primary-color);
    position: relative;
    opacity: 0;
  }
  
  &:checked {
    &:before {
      border-color: var(--primary-color);
    }
    &:after {
      opacity: 1;
    }
  }
`;
