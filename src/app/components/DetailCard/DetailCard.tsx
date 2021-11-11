import React from 'react';
import styled from 'styled-components';

type DetailCardProps = {
  name: string;
  description: string;
  categories: string[];
};

export default function DetailCard({
  name,
  description,
  categories,
}: DetailCardProps): JSX.Element {
  return (
    <article>
      <Button>Back</Button>
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </article>
  );
}

const Button = styled.button`
  background: white;
  :hover {
    background: hotpink;
  }
`;
