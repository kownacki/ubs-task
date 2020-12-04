import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { formDataToOutput } from '../utils';
import { AboutSection } from './sections/AboutSection';
import { CoordinatorSection } from './sections/CoordinatorSection';
import { WhenSection } from './sections/WhenSection';
import { Submit } from './Submit';
import { Validated } from './Validated';

const Root = styled.div`
  max-width: 900px;
  margin: auto;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 20px;
  }
`;

const SubmitContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Contents: FC = () => {
  const [isValidated, setIsValidated] = useState(false);

  const handlePublish = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = document.getElementById('form') as HTMLElement;
    const formData = (new FormData(formElement as HTMLFormElement));
    const output = formDataToOutput(formData);

    setIsValidated(true);

    console.log(output);
  };

  return (
    <Root>
      {!isValidated ? (
        <Form id="form" onSubmit={handlePublish}>
          <AboutSection />
          <CoordinatorSection />
          <WhenSection />
          <SubmitContainer>
            <Submit value="Publish Event" />
          </SubmitContainer>
        </Form>
      ) : (
        <Validated />
      )}
    </Root>
  );
};
