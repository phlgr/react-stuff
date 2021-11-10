import type { ReactNode } from 'react';
import React from 'react';

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps): JSX.Element {
  return <span>{children}</span>;
}
