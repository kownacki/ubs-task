import React, { FC } from 'react';
import { Section } from '../Section';
import { FormLine } from '../FormLine';
import { TextField } from '../form-elements/TextField';
import { Date } from '../form-elements/Date';
import { Time } from '../form-elements/Time';
import { Radio } from '../form-elements/Radio';

export const WhenSection: FC = () => {
  return (
    <Section title="When">
      <FormLine label="Starts on">
        <Date />
        <span>at</span>
        <Time />
        <span>
          <Radio name="am" value="am" id="am" />
          <label htmlFor="am">AM</label>
        </span>
        <span>
          <Radio name="pm" value="pm" id="pm" />
          <label htmlFor="pm">PM</label>
        </span>
      </FormLine>
      <FormLine label="Duration">
        <TextField
          placeholder="Number"
          size={6}
        />
        <span>hour</span>
      </FormLine>
    </Section>
  );
};
