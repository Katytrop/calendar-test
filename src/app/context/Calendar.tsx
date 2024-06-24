"use client"

import { createContext, useState, useContext, ReactNode, FC } from 'react';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(isoWeek);
dayjs.extend(advancedFormat);

interface CalendarContextType {
  currentDate: dayjs.Dayjs;                    // Текущая дата
  setCurrentDate: (date: dayjs.Dayjs) => void; // Setter для установки текущей даты
  view: 'month' | 'year';                      // Вид: месяц или год
  setView: (view: 'month' | 'year') => void;   // Setter для установки вида
  selectedDate: dayjs.Dayjs | null;            // Выбранная пользователем дата
  setSelectedDate: (date: dayjs.Dayjs | null) => void; // Setter для установки выбранной даты
}

// Начальная дата для текущего месяца без учета времени
const initialDate = dayjs().startOf('day');

// Инициализация начального контекста
const initialContext: CalendarContextType = {
  currentDate: initialDate,
  setCurrentDate: () => {},
  view: 'month',
  setView: () => {},
  selectedDate: null,
  setSelectedDate: () => {},
};

// Создание контекста
const CalendarContext = createContext<CalendarContextType>(initialContext);

// Провайдер для предоставления контекста
export const CalendarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(initialDate);
  const [view, setView] = useState<'month' | 'year'>('month');
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  // Обработчик для установки текущей даты
  const handleSetCurrentDate = (date: dayjs.Dayjs) => {
    setCurrentDate(date);
  };

  // Предоставление значения контекста
  return (
    <CalendarContext.Provider value={{ currentDate, setCurrentDate: handleSetCurrentDate, selectedDate, setSelectedDate, view, setView }}>
      {children}
    </CalendarContext.Provider>
  );
};

// Хук для использования контекста
export const useCalendar = (): CalendarContextType => {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};