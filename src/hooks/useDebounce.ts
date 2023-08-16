import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpiar el temporizador si el componente se desmonta o el valor cambia
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
