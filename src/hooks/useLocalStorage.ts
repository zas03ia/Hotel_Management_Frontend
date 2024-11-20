// src/hooks/useLocalStorage.ts
"use client"
import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // Retrieve from localStorage when the hook is first used
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(parsedValue);

  const setStoredValue = (newValue: T) => {
    // Set the value in localStorage and update state
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}

export default useLocalStorage;
