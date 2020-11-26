import React, {FC} from 'react';
import { Section } from '../Section';
import { FormLine } from '../FormLine';
import { TextField } from '../form-elements/TextField';
import { TextArea } from '../form-elements/TextArea';

export const AboutSection: FC = () => {
  return (
    <Section title="About">
      <FormLine label="Title">
        <TextField
          placeholder="Make it short and clear"
        />
      </FormLine>
      <FormLine label="Description">
        <TextArea
          placeholder="Write about your event, be creative"
          rows={8}
        />
      </FormLine>
    </Section>
  );
};
