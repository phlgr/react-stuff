import React from 'react';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
};

export const Regular = (): JSX.Element => <Tag>Text</Tag>;
export const Collectible = (): JSX.Element => <Tag>Collectible</Tag>;
export const Art = (): JSX.Element => <Tag>Art</Tag>;
