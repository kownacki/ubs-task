import styled from 'styled-components';

export const PublishButton = styled.button`
  color: #ffffff;
  background: var(--accent-color);
  border: none;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color ease 0.3s;
  
  &:hover {
    opacity: 0.8;
  }
`;
