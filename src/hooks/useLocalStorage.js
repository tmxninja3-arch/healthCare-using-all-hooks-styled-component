/**
 * useLocalStorage.js
 * -------------------
 * Custom hook that mirrors useState but persists the value
 * to window.localStorage.
 *
 * Hooks demonstrated: useState (lazy initialiser), useEffect
 */
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  /**
   * useState with LAZY INITIALISATION
   * — the function runs only on the very first render,
   *   reading from localStorage if a value exists.
   */
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key:', key, error);
      return initialValue;
    }
  });

  /**
   * useEffect – runs whenever storedValue changes
   * and writes the latest value back to localStorage.
   */
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error writing localStorage key:', key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;