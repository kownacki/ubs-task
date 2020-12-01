import React, { FC, useState } from 'react';
import { FormLine } from '../../FormLine';
import { Input } from '../../form-elements/Input';
import { Radio } from '../../form-elements/Radio';

export const Payment: FC = () => {
  const [isPaidEvent, setIsPaidEvent] = useState(false);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   setIsPaidEvent(event.target.value === 'paid');
  };

  return (
    <FormLine label="Payment">
      <span>
        <Radio name="paid_event" value="free" id="free" onChange={handlePaymentChange} defaultChecked />
        <label htmlFor="free">Free event</label>
      </span>
      <span>
        <Radio name="paid_event" value="paid" id="paid" onChange={handlePaymentChange} />
        <label htmlFor="paid">Paid event</label>
      </span>
      {isPaidEvent && (
        <>
          <Input
            placeholder="Fee"
            type="number"
            min="0"
            step="1"
            name="event_fee"
            width="90px"
          />
          <span>$</span>
        </>
      )}
    </FormLine>
  );
};
