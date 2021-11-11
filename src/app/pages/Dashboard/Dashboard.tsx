import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import type { Thing } from '../../types';

export default function Dashboard(): JSX.Element {
  const [things, setThings] = useState<Thing[] | null>(null);

  useEffect(() => {
    async function fetchThings() {
      const response = await fetch('https://json-server.neuefische.de/stuff');
      const fetchedThings = await response.json();
      setThings(fetchedThings);
    }
    fetchThings();
  }, []);

  return (
    <main>
      <h1>Dashboard</h1>
      {things &&
        things.map((thing) => (
          <Link key={thing.id} to={`/stuff/${thing.id}`}>
            <Card name={thing.name} description={thing.description} />
          </Link>
        ))}
    </main>
  );
}
