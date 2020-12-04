import { formDataToOutput } from './utils';
import { Output } from './types';

describe('utils', () => {
  describe('formDataToOutput', () => {
    const formDataInputFreeEventStub = {
      title: 'Title Stub',
      description: 'Description Stub',
      category_id: '123',
      paid_event: 'free',
      reward: '42',
      date_day: '2018-01-19',
      date_time: '15:15',
      duration: '3',
      coordinator_id: 'coordinatorIdStub',
      coordinator_email: 'coordinator@mail.stub',
    };

    const formDataInputPaidEventStub = {
      ...formDataInputFreeEventStub,
      paid_event: 'paid',
      event_fee: '5555',
    };

    const expectedOutputFreeEvent: Output = {
      title: 'Title Stub',
      description: 'Description Stub',
      category_id: 123,
      paid_event: false,
      reward: 42,
      date: '2018-01-19T15:15',
      duration: 3 * 3600,
      coordinator: { id: 'coordinatorIdStub', email: 'coordinator@mail.stub' }
    }

    const expectedOutputPaidEvent: Output = {
      ...expectedOutputFreeEvent,
      paid_event: true,
      event_fee: 5555,
    };

    it('correctly create output - free event', () => {
      const formData = new FormData();
      Object.entries(formDataInputFreeEventStub).forEach(([key, value]) => {
        formData.append(key, value);
      });

      expect(formDataToOutput(formData)).toEqual(expectedOutputFreeEvent);
    });

    it('correctly create output - paid event', () => {
      const formData = new FormData();
      Object.entries(formDataInputPaidEventStub).forEach(([key, value]) => {
        formData.append(key, value);
      });

      expect(formDataToOutput(formData)).toEqual(expectedOutputPaidEvent);
    });
  });
});
