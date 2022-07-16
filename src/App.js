import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import CampsitesList from './features/campsites/CampsitesList';

import { CAMPSITES } from './app/shared/CAMPSITES';
import Header from '../src/components/Header'
function App() {
  return (
    <div className="App">
   <Header />
      <CampsitesList />
    </div>
  );
}

export default App;
