import React, { FC, createRef } from 'react';
import { without } from 'lodash';
import { useCoordinators } from '../../redux/selectors';
import { USER_EMAIL } from '../../constants';
import { DownloadStatus, Coordinator } from '../../types';
import { Section } from '../Section';
import { FormLine } from '../form-elements/FormLine';
import { Input } from '../form-elements/Input';
import { Select } from '../form-elements/Select';

const composeCoordinatorName = (coordinator: Coordinator) => `${coordinator.name} ${coordinator.lastname}`;

export const CoordinatorSection: FC = () => {
  const coordinators = useCoordinators();
  const emailInput = createRef<HTMLInputElement>();

  // We assume that the user is always among coordinators
  const userCoordinator = coordinators.data.find((coordinator) => coordinator.email === USER_EMAIL) as Coordinator;
  const coordinatorsWithoutUser = without(coordinators.data, userCoordinator);

  const handleCoordinatorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCoordinator = coordinators.data.find((coordinator) => coordinator.id === Number(event.target.value)) as Coordinator;
    if (emailInput.current) {
      emailInput.current.value = selectedCoordinator.email;
    }
  };

  return (
    <Section title="Coordinator">
      <FormLine label="Responsible" required>
        {coordinators.status === DownloadStatus.Success && (
          <Select name="coordinator_id" onChange={handleCoordinatorChange} required>
            <option value="" hidden>Select coordinator</option>
            <optgroup label="Me">
              <option value={userCoordinator.id}>{composeCoordinatorName(userCoordinator)}</option>
            </optgroup>
            <optgroup label="Others">
              {coordinatorsWithoutUser.map((coordinator, index) => (
                <option value={coordinator.id} key={index}>{composeCoordinatorName(coordinator)}</option>
              ))}
            </optgroup>
          </Select>
        )}
      </FormLine>
      <FormLine label="Email">
        <Input
          name="coordinator_email"
          type="email"
          width="100%"
          placeholder="Email"
          ref={emailInput}
          data-test="email-input"
          required
        />
      </FormLine>
    </Section>
  );
};
