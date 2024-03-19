import React, { useEffect } from 'react';
import { UserLayout } from '../../components/layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { BurrowHistoryTable } from '../../components/burrow-history/BurrowHistoryTable';
import { fetchBurrowsAction } from '../burrow-history/burrowAction';

const MyBook = () => {
  const { user } = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBurrowsAction());
  }, [dispatch]);

  return (
    <UserLayout title='My Books burrow history'>
      <BurrowHistoryTable userId={user._id} />
    </UserLayout>
  );
};

export default MyBook;
