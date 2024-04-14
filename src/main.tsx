import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing global CSS styles
import App from './App'; // Importing the root component of the application

// Rendering the root component inside the #root element in the HTML file
ReactDOM.render(
  <React.StrictMode> {/* Wrapping the App component with React.StrictMode for additional development mode checks */}
    <App /> {/* Rendering the root component of the application */}
  </React.StrictMode>,
  document.getElementById('root') // Mounting point in the HTML file where the application will be rendered
);
