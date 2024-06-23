"use client"

import { createContext, useState, useContext, ReactNode, FC } from 'react';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(isoWeek);
dayjs.extend(advancedFormat);

interface CalendarContextType {
  currentDate: dayjs.Dayjs;
  setCurrentDate: (date: dayjs.Dayjs) => void;
  view: 'month' | 'year';
  setView: (view: 'month' | 'year') => void;
}

const initialDate = dayjs().startOf('day'); // Инициализация текущей даты без учета времени

const initialContext: CalendarContextType = {
  currentDate: initialDate,
  setCurrentDate: () => {},
  view: 'month',
  setView: () => {},
};

const CalendarContext = createContext<CalendarContextType>(initialContext);


export const CalendarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(initialDate);
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