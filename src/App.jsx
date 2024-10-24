import React, { useState } from 'react';
import { removeBackground } from "@imgly/background-removal";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Navbar from './Component/Navbar';
import Dashboard from './Screens/Dashboard';
import { store, persistor } from './store';
import MapComponent from './Component/Maps'
import "./index.css"
import LeafTossingGamePrototype from './Component/LeafTossGame';

function App() {
  return (
    <>
      <LeafTossingGamePrototype />
    </>
  )
};

export default App
