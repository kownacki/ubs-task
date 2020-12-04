import React, { FC, useEffect } from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { Header } from './Header';
import { Contents } from './Contents';
import { downloadData } from '../redux/actions';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(downloadData('categories'));
    dispatch(downloadData('coordinators'));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Contents />
    </>
  );
};
