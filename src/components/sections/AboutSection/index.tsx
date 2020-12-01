import React, { FC } from 'react';
import { useCategories } from '../../../redux/selectors';
import { Section } from '../../Section';
import { FormLine } from '../../FormLine';
import { Input } from '../../form-elements/Input';
import { TextArea } from '../../form-elements/TextArea';
import { Select } from '../../form-elements/Select';
import { Payment } from './Payment';

export const AboutSection: FC = () => {
  const categories = useCategories();

  return (
    <Section title="About">
      <FormLine label="Title">
        <Input
          placeholder="Make it short and clear"
          name="title"
          width="100%"
        />
      </FormLine>
      <FormLine label="Description">
        <TextArea
          placeholder="Write about your event, be creative"
          rows={8}
          name="description"
        />
      </FormLine>
      <FormLine label="Category">
        <Select name="category_id">
          <option value="" hidden>Select category</option>
          {categories.list.map((category, index) => (
            <option value={category.id} key={index}>{category.name}</option>
          ))}
        </Select>
      </FormLine>
      <Payment />
      <FormLine label="Reward">
        <Input
          type="number"
          placeholder="Number"
          name="reward"
          width="90px"
        />
        <span>reward points for attendance</span>
      </FormLine>
    </Section>
  );
};
