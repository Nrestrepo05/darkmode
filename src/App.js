import { useEffect, useState } from 'react';
import './variables.css';
import './App.css';
import Header from './components/Header'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') ? true : false);
    if (darkMode) {
      document.body.classList.remove('light-palette');
      return document.body.classList.add('dark-palette');
    } else {
      document.body.classList.add('light-palette')
      return document.body.classList.remove("dark-palette");
    }
  }, [darkMode])

  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex justify-center items-center">
        <h1>
          Hey, this is a dark mode test!
        </h1>
      </main>
    </div>
  );
}

export default App;
