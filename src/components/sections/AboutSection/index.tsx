import React, { FC } from 'react';
import { Section } from '../../Section';
import { FormLine } from '../../form-elements/FormLine';
import { FormBlock } from '../../form-elements/FormBlock';
import { Input } from '../../form-elements/Input';
import { TextArea } from '../../form-elements/TextArea';
import { Categories } from './Categories';
import { Payment } from './Payment';

export const AboutSection: FC = () => {
  return (
    <Section title="About">
      <FormLine label="Title" required>
        <Input
          placeholder="Make it short and clear"
          name="title"
          width="100%"
          required
        />
      </FormLine>
      <FormLine label="Description" required>
        <TextArea
          placeholder="Write about your event, be creative"
          rows={8}
          name="description"
          maxLength={140}
          required
        />
      </FormLine>
      <Categories />
      <Payment />
      <FormLine label="Reward">
        <Input
          type="number"
          min={0}
          placeholder="Number"
          name="reward"
          width="90px"
        />
        <FormBlock>reward points for attendance</FormBlock>
      </FormLine>
    </Section>
  );
};
