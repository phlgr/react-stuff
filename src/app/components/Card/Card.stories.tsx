import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

const exampleContentRegular = {
  name: 'Old Toothbrush',
  description: 'You could use it to clean shoes',
};

const exampleContentDetail = {
  name: 'Old Toothbrush',
  description: 'You could use it to clean shoes',
  categories: ['toiletry', 'tool', 'every day use', 'plastic'],
};

export const Regular = (): JSX.Element => (
  <Card content={exampleContentRegular} />
);
export const Detail = (): JSX.Element => (
  <Card content={exampleContentDetail} />
);
