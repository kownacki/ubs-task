import fetchMock from 'jest-fetch-mock';
import { formDataToOutput, fetchData } from './utils';
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

  describe('fetchData', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });

    it('returns data', async () => {
      const dataStub = [{ a: 1, b: 2 }];
      const pathStub = 'http://path.stub'
      fetchMock.mockResponseOnce(JSON.stringify(dataStub), { status: 200 });
      await expect(fetchData(pathStub)).resolves.toEqual({ isSuccess: true, data: dataStub });
    });

    it('returns fail when fetch failed', async () => {
      const queryStub = 'QUERY_STUB';
      fetchMock.mockResponseOnce('', { status: 400 });
      await expect(fetchData(queryStub)).resolves.toEqual({ isSuccess: false });
    });
  });
});
