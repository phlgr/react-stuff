import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailCard from '../../components/DetailCard/DetailCard';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const [thing, setThing] = useState<null | Thing>(null);
  const { thingID } = useParams();

  useEffect(() => {
    async function fetchThing() {
      const response = await fetch(
        `https://json-server.neuefische.de/stuff/${thingID}`
      );
      const newThing = await response.json();
      setThing(newThing);
    }
    fetchThing();
  }, []);

  return (
    <>
      {thing && (
        <DetailCard
          name={thing.name}
          description={thing.description}
          categories={thing.categories}
        />
      )}
    </>
  );
}
