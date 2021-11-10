import React from 'react';

type CardProps = {
  content: {
    name: string;
    description: string;
  };
};

export default function Card({ content }: CardProps): JSX.Element {
  return (
    <article>
      <h2>{content.name}</h2>
      <p>{content.description}</p>
    </article>
  );
}
