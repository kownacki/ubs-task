import styled, { css } from 'styled-components';

export const Input = styled.input<{width?: string}>`
  border: solid 1px var(--dark-grey);
  font: var(--input-font-size) Arial;
  padding: 8px;
  box-sizing: border-box;

  ${(props) => props.width && css`
    width: ${props.width};
  `}
`;
