import React, { FC } from 'react';
import { Section } from '../Section';
import { FormLine } from '../form-elements/FormLine';
import { FormBlock } from '../form-elements/FormBlock';
import { Input } from '../form-elements/Input';

export const WhenSection: FC = () => {
  return (
    <Section title="When">
      <FormLine label="Starts on" required>
        <Input type="date" name="date_day" required />
        <FormBlock>at</FormBlock>
        <Input type="time" name="date_time" required />
      </FormLine>
      <FormLine label="Duration">
        <Input
          type="number"
          placeholder="Number"
          name="duration"
          width="90px"
        />
        <FormBlock>hour</FormBlock>
      </FormLine>
    </Section>
  );
};
