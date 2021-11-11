import React from 'react';
import DetailCard from './DetailCard';

export default {
  title: 'Component/DetailCard',
  component: DetailCard,
};

export const Detail = (): JSX.Element => (
  <DetailCard
    name="Old Toothbrush"
    description="You could use it to clean shoes"
    categories={['toiletry', 'tool', 'every day use', 'plastic']}
  />
);
