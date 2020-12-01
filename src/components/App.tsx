import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../index.css';
import { Header } from './Header';
import { Contents } from './Contents';
import { setCategories, setCoordinators } from '../redux/actions';
import { Category } from '../types';

const categories:Category[] = [
  {
    'id': 0,
    'name': 'Cycling'
  },
  {
    'id': 1,
    'name': 'Hiking'
  },
  {
    'id': 2,
    'name': 'Cooking'
  },
  {
    'id': 3,
    'name': 'Rock climbing'
  },
  {
    'id': 4,
    'name': 'Yoga'
  },
  {
    'id': 5,
    'name': 'Fencing'
  },
  {
    'id': 6,
    'name': 'Swimming'
  },
  {
    'id': 7,
    'name': 'Badminton'
  },
  {
    'id': 8,
    'name': 'Running'
  },
  {
    'id': 9,
    'name': 'Dance'
  }
];

const coordinators = [
  {
    'id': 0,
    'name': 'Daniel',
    'lastname': 'Mitchell',
    'email': 'daniel.mitchell@hussa.rs'
  },
  {
    'id': 1,
    'name': 'Albert',
    'lastname': 'Alexander',
    'email': 'albert.alexander@hussa.rs'
  },
  {
    'id': 2,
    'name': 'Philip',
    'lastname': 'Hughes',
    'email': 'philip.hughes@hussa.rs'
  },
  {
    'id': 3,
    'name': 'Walter',
    'lastname': 'Nelson',
    'email': 'walter.nelson@hussa.rs'
  },
  {
    'id': 4,
    'name': 'Ashley',
    'lastname': 'Hernandez',
    'email': 'ashley.hernandez@hussa.rs'
  },
  {
    'id': 5,
    'name': 'Donna',
    'lastname': 'Washington',
    'email': 'donna.washington@hussa.rs'
  },
  {
    'id': 6,
    'name': 'Andrew',
    'lastname': 'White',
    'email': 'andrew.white@hussa.rs'
  },
  {
    'id': 7,
    'name': 'Sharon',
    'lastname': 'Allen',
    'email': 'sharon.allen@hussa.rs'
  },
  {
    'id': 8,
    'name': 'Russell',
    'lastname': 'Parker',
    'email': 'russell.parker@hussa.rs'
  },
  {
    'id': 9,
    'name': 'Janet',
    'lastname': 'Stewart',
    'email': 'janet.stewart@hussa.rs'
  }
];

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories(categories));
    dispatch(setCoordinators(coordinators));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Contents />
    </>
  );
};
