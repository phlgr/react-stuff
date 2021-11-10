import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import type { Thing } from '../../types';

export default function Dashboard(): JSX.Element {
  const [things, setThings] = useState<Thing[]>([]);

  useEffect(() => {
    async function fetchThings() {
      const response = await fetch('https://json-server.neuefische.de/stuff');
      const fetchedThings = await response.json();
      setThings(fetchedThings);
    }
    fetchThings();
  }, []);

  useEffect(() => {
    console.log('fetched things 🎉');
  }, [things]);

  return (
    <main>
      <h1>Dashboard</h1>
      {things.length >= 0 &&
        things.map((thing) => (
          <Card name={thing.name} description={thing.description} />
        ))}
    </main>
  );
}
