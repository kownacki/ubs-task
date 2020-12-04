import React, { FC } from 'react';
import { useCategories } from '../../../redux/selectors';
import { FormLine } from '../../form-elements/FormLine';
import { Select } from '../../form-elements/Select';

export const Categories: FC = () => {
  const categories = useCategories();

  return (
    <FormLine label="Category">
      <Select name="category_id">
        <option value="" hidden>Select category</option>
        {categories.data.map((category, index) => (
          <option value={category.id} key={index}>{category.name}</option>
        ))}
      </Select>
    </FormLine>
  );
};
