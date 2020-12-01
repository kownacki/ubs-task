import React, { FC } from 'react';
import { Section } from '../Section';
import { FormLine } from '../FormLine';
import { Input } from '../form-elements/Input';

export const WhenSection: FC = () => {
  return (
    <Section title="When">
      <FormLine label="Starts on">
        <Input type="date" name="date_day" />
        <span>at</span>
        <Input type="time" name="date_time" />
      </FormLine>
      <FormLine label="Duration">
        <Input
          type="number"
          placeholder="Number"
          name="duration"
          width="90px"
        />
        <span>hour</span>
      </FormLine>
    </Section>
  );
};
