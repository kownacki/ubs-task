import React, { FC, useState } from 'react';
import styled from 'styled-components';
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

interface Output {
  title: string;
  description: string;
  category_id: number;
  paid_event: boolean;
  event_fee: number;
  reward: number;
  date: string, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number; // in seconds
  coordinator: {
    email: string;
    id: string;
  },
}

export const Contents: FC = () => {
  const [isValidated, setIsValidated] = useState(false);

  const handlePublish = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = document.getElementById('form') as HTMLElement;
    const formData = (new FormData(formElement as HTMLFormElement));
    const output:Record<string, unknown> = {};
    formData.forEach((value, key) => output[key] = value);
    output.paid_event = output.paid_event === 'paid';
    ['category_id', 'reward', 'duration', ...(output.paid_event ? ['event_fee'] : [])]
      .map((key) => output[key] = Number(output[key]));
    output.coordinator = { id: output.coordinator_id, email: output.coordinator_email };
    //todo delete coordinator fields
    output.duration = output.duration as number * 3600;
    output.date = `${output.date_day}T${output.date_time}`;
    //todo delete date fields
    console.log(output as unknown as Output);

    setIsValidated(true);
    // console.log({
    //   title: string,
    //   description: string,
    //   category_id: number,
    //   paid_event: boolean,
    //   event_fee: number,
    //   reward: number,
    //   date: string, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
    //   duration: number, // in seconds
    //   coordinator: {
    //     email: string,
    //     id: string,
    //   },
    // });
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
