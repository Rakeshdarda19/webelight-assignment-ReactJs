import React from 'react';

import CardsList from './Components/CardsList';

function App() {
  return (
    <div className="app">
        <h1 className="page-title">
          Most Starred Repos
        </h1>
        <CardsList/>
    </div>
  );
}

export default App;
