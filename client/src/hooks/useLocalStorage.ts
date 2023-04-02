import {
  useState,
  useEffect,
  useCallback,
} from 'react';

const parseJSON = value => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    console.log('parsing error on', { value })
    return undefined;
  }
}

const useLocalStorage = (key, initialValue) => {
  const readValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
  
    try {
      const item = window.localStorage.getItem(key);
  
      return item ? (parseJSON(item)) : initialValue;
    } catch (error) {
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState(readValue());
  
  useEffect(() => {
    setStoredValue(readValue());
  }, []);
  
  const setValue = useCallback(value => {
    const newValue = value instanceof Function ? value(storedValue) : value;
  
    window.localStorage.setItem(key, JSON.stringify(newValue));
  
    setStoredValue(newValue);
  
    window.dispatchEvent(new Event('local-storage'));
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage;
