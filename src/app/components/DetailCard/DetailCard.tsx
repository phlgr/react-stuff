import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

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
      <BackLink to={'/'}>Back</BackLink>
      <h2>{name}</h2>
      <Description>{description}</Description>
      <Categories>
        {categories.map((category) => (
          <Tag key={category}>{category}</Tag>
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

const BackLink = styled(Link)`
  place-self: center;
`;

const Description = styled.p`
  grid-column: 1 / span 2;
`;

const Categories = styled.ul`
  grid-column: 1 / span 2;
`;
