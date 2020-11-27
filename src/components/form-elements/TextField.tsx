import styled, { css } from 'styled-components';

export const TextField = styled.input<{fullWidth?: boolean}>`
  border: solid 1px var(--dark-grey);
  padding: 8px;
  box-sizing: border-box;

  ${(props) => props.fullWidth && css`
    width: 100%;
  `}
`;
