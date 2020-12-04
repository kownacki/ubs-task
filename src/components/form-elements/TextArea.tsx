import React, { FC, TextareaHTMLAttributes, useState } from 'react';
import styled from 'styled-components';

const TextAreaElement = styled.textarea`
  display: block;
  border: solid 1px var(--dark-grey);
  font: var(--input-font-size) Arial;
  resize: none;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
`;

const Counter = styled.div`
  font-size: 12px;
  text-align: right;
  margin-top: 4px;
`;

export const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  const [charCount, setCharCount] = useState(0);

  return (
    <div>
      <TextAreaElement onChange={(event) => setCharCount(event.target.value.length)} {...props} />
        {props.maxLength && (
          <Counter>
            {`${charCount} / ${props.maxLength}`}
          </Counter>
        )}
    </div>
  );
};
