"use client"

import { createContext, useState, useContext, ReactNode, FC } from 'react';
import dayjs from 'dayjs';


interface CalendarContextType {
  currentDate: dayjs.Dayjs;
  setCurrentDate: (date: dayjs.Dayjs) => void;
  view: 'month' | 'year';
  setView: (view: 'month' | 'year') => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const CalendarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [view, setView] = useState<'month' | 'year'>('month');

  return (
    <CalendarContext.Provider value={{ currentDate, setCurrentDate, view, setView}}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = (): CalendarContextType => {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};