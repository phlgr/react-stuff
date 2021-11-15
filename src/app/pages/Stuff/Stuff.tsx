import React from 'react';
import { useNavigate, useParams } from 'react-router';
import DetailCard from '../../components/DetailCard/DetailCard';
import useFetch from '../../hooks/useFetch';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const navigate = useNavigate();
  const { thingID } = useParams();
  const thing = useFetch<Thing>(
    `https://json-server.neuefische.de/stuff/${thingID}`
  );

  async function handleDeleteClick(): Promise<void> {
    await fetch(`https://json-server.neuefische.de/stuff/${thingID}`, {
      method: 'DELETE',
    });
    navigate('/');
  }

  return (
    <>
      {thing && (
        <DetailCard
          name={thing.name}
          description={thing.description}
          categories={thing.categories}
          onDelete={handleDeleteClick}
        />
      )}
    </>
  );
}
