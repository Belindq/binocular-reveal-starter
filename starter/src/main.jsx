import React from 'react';
import { createRoot } from 'react-dom/client';
import { OpeningScene } from './scenes.jsx';
import './styles.css';

function App() {
  return (
    <main aria-label="Underwater to sunset">
      <div className="stage">
        <OpeningScene />
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
