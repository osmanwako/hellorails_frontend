import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);
  return (
    <div>
      <h1>Random Greeting Message.</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default Greeting;
