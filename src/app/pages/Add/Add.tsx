import React from 'react';

export default function Add(): JSX.Element {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Description" />
      <input type="submit" />
    </form>
  );
}
