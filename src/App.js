import React from 'react';
import Provider from './context/Provider';
import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
