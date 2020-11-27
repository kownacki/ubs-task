import React, { FC } from 'react';
import { Section } from '../Section';
import { FormLine } from '../FormLine';
import { TextField } from '../form-elements/TextField';
import { TextArea } from '../form-elements/TextArea';
import { Select } from '../form-elements/Select';
import { Radio } from '../form-elements/Radio';

export const AboutSection: FC = () => {
  return (
    <Section title="About">
      <FormLine label="Title">
        <TextField
          fullWidth
          placeholder="Make it short and clear"
        />
      </FormLine>
      <FormLine label="Description">
        <TextArea
          placeholder="Write about your event, be creative"
          rows={8}
        />
      </FormLine>
      <FormLine label="Category">
        <Select value="" onChange={() => console.log('')}>
          <option value="" disabled hidden>Select category</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </Select>
      </FormLine>
      <FormLine label="Payment">
        <span>
          <Radio name="payment" value="dewey" id="dewey" />
          <label htmlFor="dewey">Free event</label>
        </span>
        <span>
          <Radio name="payment" value="louie" id="louie" />
          <label htmlFor="louie">Paid event</label>
        </span>
      </FormLine>
      <FormLine label="Reward">
        <TextField
          placeholder="Number"
          size={6}
        />
        <span>reward points for attendance</span>
      </FormLine>
    </Section>
  );
};
