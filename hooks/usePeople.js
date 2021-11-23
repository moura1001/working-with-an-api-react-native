import { useState, useEffect } from 'react';

export default function usePeople() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPeople([]);
    setLoading(true);
    async function loadData() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=100&inc=name");
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.log(error);
        alert("Sorry, something went wrong.");
      }
      setLoading(false);
    }

    const timeout = setTimeout(loadData, 1000)

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return { people, loading };
};