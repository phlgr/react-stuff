import React, { useState } from 'react';

export default function Add(): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
