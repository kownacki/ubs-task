import React from 'react';
import { mount } from 'enzyme';
import { App } from './App';
import { fetchData } from '../utils';
import { categoriesStub, coordinatorsStub } from '../testutils';

jest.mock('../utils');

describe('App', () => {
  it('renders correctly when all data downloads successfully', () => {
    (fetchData as jest.Mock)
      .mockReturnValueOnce(Promise.resolve({ data: categoriesStub, isSuccess: true }))
      .mockReturnValueOnce(Promise.resolve({ data: coordinatorsStub, isSuccess: true }))
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
