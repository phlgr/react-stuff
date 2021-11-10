import React from 'react';
import Card from '../../components/Card/Card';

export default function Dashboard(): JSX.Element {
  return (
    <main>
      <h1>Dashboard</h1>
      <Card name="Thing" description="It's a thing" />
    </main>
  );
}
