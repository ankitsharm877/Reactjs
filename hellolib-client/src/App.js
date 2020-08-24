import React from 'react';
import './App.css';
import HelloLib from 'hellolib';
import { Button }  from 'react-component-library-example';
import { Input } from 'react-component-library-example';
function App() {
  return (
    <div className="App">
      <HelloLib/><br></br>
      <Button className="btn btn-default">Click Me!</Button><br></br>
      <Button className="btn btn-primary">Click Me!</Button><br></br>
      <Input type="text"/>
    </div>
  );
}

export default App;
