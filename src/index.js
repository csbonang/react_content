// TODO: Add a comment giving a brief description of what React is
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
// allows us to use the react-dom
import ReactDOM from 'react-dom';
// brings in the app.js file 
import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// Render a React element into the DOM in the supplied container and return a reference to the component
ReactDOM.render(<App />, document.getElementById('root'));
