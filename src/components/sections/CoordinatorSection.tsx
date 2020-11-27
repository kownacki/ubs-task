import React, {FC} from 'react';
import { Section } from '../Section';
import { FormLine } from '../FormLine';
import { TextField } from '../form-elements/TextField';
import { Select } from '../form-elements/Select';

export const CoordinatorSection: FC = () => {
  return (
    <Section title="Coordinator">
      <FormLine label="Category">
        <Select value="" onChange={() => console.log('')}>
          <option value="" disabled hidden>Select category</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </Select>
      </FormLine>
      <FormLine label="Email">
        <TextField
          fullWidth
          placeholder="Email"
        />
      </FormLine>
    </Section>
  );
};
