import React from 'react';
import './App.css';
import ImageGrid from './ImageGrid';
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <div className="Guide-box">
          <p className="Guide">
            This of a place you would love to visit.
          </p>
          <p className="Guide">
          It could be a real place or an imaginary place or one you've heard of but never seen.
          </p>
          <p className="Guide">
          Or choose a piece of art that speaks to you.
          </p>
      </div>
      
      <ImageGrid></ImageGrid>
    </div>
  );
}

export default App;
