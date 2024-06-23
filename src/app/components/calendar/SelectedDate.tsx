"use client"

import React from 'react';
import { useCalendar } from '@/app/context/Calendar';

const SelectedDate = () => {
  const { selectedDate  } = useCalendar();

  return (
    <div style={{marginBottom: '20px'}}>
      {selectedDate  ? (
        <p>Selected date: {selectedDate .format('MMMM D, YYYY')}</p>
      ) : (
        <p>No date selected</p>
      )}
    </div>
  );
};

export default SelectedDate;