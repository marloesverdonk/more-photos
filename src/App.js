import React from 'react';
import './App.css';
import AlbumsListContainer from './components/AlbumsListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Photoalbum</h1>
      </header>
      <main>
        <AlbumsListContainer/>
      </main>
    </div>
  );
}

export default App;
