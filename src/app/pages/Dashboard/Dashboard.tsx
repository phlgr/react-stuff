import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import useFetch from '../../hooks/useFetch';
import type { Thing } from '../../types';

export default function Dashboard(): JSX.Element {
  const things = useFetch<Thing[]>('https://json-server.neuefische.de/stuff');

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
