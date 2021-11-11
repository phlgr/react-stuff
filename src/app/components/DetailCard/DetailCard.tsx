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
    <Card>
      <Button>Back</Button>
      <h2>{name}</h2>
      <Description>{description}</Description>
      <Categories>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </Categories>
    </Card>
  );
}

const Card = styled.article`
  display: grid;
  border-radius: 1rem;
  padding: 0.5rem;
  grid-template-columns: auto 3fr;
  column-gap: 1rem;
`;

const Button = styled.button`
  place-self: center;
`;

const Description = styled.p`
  grid-column: 1 / span 2;
`;

const Categories = styled.ul`
  grid-column: 1 / span 2;
`;
