import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './pages/Add/Add';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/Stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="add" element={<Add />} />
        <Route path="stuff">
          <Route path=":thingID" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
