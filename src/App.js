import React from 'react';
import Routes from './routes';
import { UserStorage } from './UserContext';

import GlobalStyle from './styles/global.js';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <div className="App">
    <GlobalStyle />
    <UserStorage>
      <Routes />
    </UserStorage>
  </div>
);

export default App;
