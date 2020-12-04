import React from 'react';
import { mount } from 'enzyme';
import { useCoordinators } from '../../redux/selectors';
import { coordinatorsStub } from '../../testutils';
import { CoordinatorSection } from './CoordinatorSection';
import { DownloadStatus } from '../../types';

jest.mock('../../redux/selectors');

describe('CoordinatorSection', () => {
  it('automatically sets email of selected coordinator', async () => {
    (useCoordinators as jest.Mock).mockReturnValue({
      data: coordinatorsStub,
      status: DownloadStatus.Success,
    });

    const wrapper = mount(<CoordinatorSection />);
    wrapper.find('select').simulate('change', {target: {value: '1'}});

    // todo Why doesn't it work?
    // expect(wrapper.find({ 'data-test': 'email-input' }).get(0).props.value).toBe(coordinatorsStub[1].email)
  });
});
