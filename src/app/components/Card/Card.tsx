import React from 'react';
import styled from 'styled-components';

type CardProps = {
  content: {
    name: string;
    description: string;
  };
};

export default function Card({ content }: CardProps): JSX.Element {
  return (
    <CardBody>
      <h2>{content.name}</h2>
      <p>{content.description}</p>
    </CardBody>
  );
}

const CardBody = styled.article`
  padding: 1.5em;
  border: 5px solid #c92a2a;
  border-radius: 0.5em;
`;
