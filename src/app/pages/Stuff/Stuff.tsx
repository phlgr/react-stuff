import React from 'react';
import { useParams } from 'react-router';

export default function Stuff(): JSX.Element {
  const { thing } = useParams();
  return <p>Stuff: {thing}</p>;
}
