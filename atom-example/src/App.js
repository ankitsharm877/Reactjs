import React from 'react';
import './App.css';
import Button from './component/atoms/Button';
import H1 from './component/atoms/H1';
import H2 from './component/atoms/H2';
import P from './component/atoms/P';
import Input from './component/atoms/Input';
import Label from './component/atoms/Label';
import Li from './component/atoms/Li';
import Img from './component/atoms/Img';
import Ul from './component/molecules/Ul';
import Form from './component/molecules/Form';

function App() {
  return (
    <div className="App">
      {/* atoms */}
      <Button onClick={() =>  console.log('clicked!!!')}>Click Me!</Button>
      <H1>Header 1</H1>
      <H2>Header 2</H2>
      <P>Paragraph</P>
      <Input type="text"/>
      <Label>Label</Label>
      <Li>List Item</Li>
      <Img src='Preview.png' width='400'/>
      
      <button/>
      {/* molecules */}
      <Ul>
        <Li>IBM</Li>
        <Li>Developer</Li>
      </Ul>
      <Form>
       <Label>Name:</Label>
       <Input type="text"/>
       <Label>Age:</Label>
       <Input type="number"/>
       <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
