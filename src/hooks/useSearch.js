import { useState, useRef, useEffect } from 'react';

//Useful hook for validation and detecting the first query and marking errors
export default function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    //Check for first Input
    if (isFirstInput.current) {
      isFirstInput.current = '' === search;
      return;
    }
    if (search === '') {
      setError("Can't look for a movie");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("Can't look for a numbers name");
      return;
    }
    if (search.length < 3) {
      setError('More than three characters are required');
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
