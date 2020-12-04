export enum DownloadStatus {
  Loading,
  Failure,
  Success,
}


export interface Category {
  id: number;
  name: string;
}

export interface Coordinator {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

export type DataName = 'categories' | 'coordinators';
export type Data = Category[] | Coordinator[];

export interface DownloadedData<T> {
  status: DownloadStatus;
  data: T;
}

export interface DownloadedDataState {
  categories: DownloadedData<Category[]>;
  coordinators: DownloadedData<Coordinator[]>;
}

export interface RootState {
  downloadedData: DownloadedDataState;
}

export interface Output {
  title: string;
  description: string;
  category_id: number;
  paid_event: boolean;
  event_fee?: number;
  reward: number;
  date: string, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number; // in seconds
  coordinator: {
    email: string;
    id: string;
  },
}