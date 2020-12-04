import React, { FC } from 'react';
import { Provider } from 'react-redux';
import '../index.css';
import { Header } from './Header';
import { Contents } from './Contents';
import { store } from '../redux/store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Contents />
    </Provider>
  );
};
