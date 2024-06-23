"use client"

import React from 'react';
import { useCalendar } from '@/app/context/Calendar';

const SelectedDate = () => {
  const { currentDate  } = useCalendar();

  return (
    <div style={{marginBottom: '20px'}}>
      {currentDate  ? (
        <p>Selected date: {currentDate .format('MMMM D, YYYY')}</p>
      ) : (
        <p>No date selected</p>
      )}
    </div>
  );
};

export default SelectedDate;