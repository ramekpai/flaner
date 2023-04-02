import { useState, useEffect } from "react";

const getMatches = (query: string): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }

  return false;
};

const useMediaQuery = (query: string): boolean  => {
  const [isMatches, setIsMatches] = useState<boolean>(getMatches(query));

  const onChangeHandler = () => {
    setIsMatches(getMatches(query));
  };

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    onChangeHandler();

    matchMedia.addEventListener('change', onChangeHandler);

    return () => {
      matchMedia.removeEventListener('change', onChangeHandler);
    }
  }, [query]);

  return isMatches;
};

export default useMediaQuery;
