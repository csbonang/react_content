import React from 'react';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Hello() {
  const message = 'Hello world! I am a React Component';
  const math = 1 + 2; 
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  // {} = allows us to inject variables in 
  return (
    <div className="container">
      <h1> Hello Jarvis </h1> 
      <h2>{message}</h2>
      <h3>{math}</h3> 
    </div>
  );
}

export default Hello;
