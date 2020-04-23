import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [joke, setJoke] = useState(null);
  const [isFetchingJoke, setIsFetchingJoke] = useState(false);

  const fetchJoke = async () => {
    setIsFetchingJoke(true);

    const res = await fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    res.json().then(json => {
      setIsFetchingJoke(false);
      setJoke(json.joke);
    });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  function onTellJoke() {
    fetchJoke();
  }

  return (
    <main className="content">
      <h1>Dog Walk, Dog Talk</h1>
      <button
        type="button"
        onClick={() => onTellJoke()}
        disabled={isFetchingJoke}
      >
        Puxar novo assunto...
      </button>
      <p className="joke">{isFetchingJoke ? 'Loading...' : joke}</p>
    </main>
  );
}

export default App;
