import './App.css';
import React from "react";
import Navbar from './components/navbar';
import Movies from './components/movies';

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <main className='container'>
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;