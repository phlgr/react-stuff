import React from 'react';
import { useParams } from 'react-router';
import DetailCard from '../../components/DetailCard/DetailCard';

export default function Stuff(): JSX.Element {
  const { thing } = useParams();

  return (
    <DetailCard
      name="Old Toothbrush"
      description="You could use it to clean shoes"
      categories={['toiletry', 'tool', 'every day use', 'plastic']}
    />
  );
}
