import { Output } from './types';
import { CATEGORIES_PATH } from './constants';

export const formDataToOutput = (formData: FormData) => {
  const rawOutput:Record<string, string> = {};

  formData.forEach((value, key) => rawOutput[key] = value as string);

  // rawOutput has only strings inside and different structure than desired output. Thus we need to transform some of them.
  const isPaidEvent = rawOutput.paid_event === 'paid';
  const output: Output = {
    title: rawOutput.title,
    description: rawOutput.description,
    category_id: Number(rawOutput.category_id),
    paid_event: isPaidEvent,
    ...(isPaidEvent ? { event_fee: Number(rawOutput.event_fee) } : {}),
    reward: Number(rawOutput.reward),
    date: `${rawOutput.date_day}T${rawOutput.date_time}`,
    duration: Number(rawOutput.duration) * 3600,
    coordinator: { id: rawOutput.coordinator_id, email: rawOutput.coordinator_email }
  }
  return output;
}

export const fetchData = async (path: string) => {
  const response = await fetch(path);
  return response.ok
      ? { data: await response.json(), isSuccess: true }
      : { isSuccess: false };
};
