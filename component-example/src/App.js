import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counts from './components/Counts';
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './components/appStyles.css';
import styles from './components/appStyles.module.css';

class App extends Component{
  render(){
      return (
        <div className="App">
          <h1 className='error'>Error</h1>
          <h1 className={styles.success}>Success</h1>
          <Inline></Inline>
          {/* <StyleSheet primary={true}/> */}
          {/* <NameList/>
          <PersonList/> */}
          {/* <UserGreeting/> */}
          {/* <ParentComponent/>
          <EventBind/>
          <FunctionClick/>
          <ClassClick/>
          <Greet name="Bruce" heroName="Batman">
            <p>This is children props</p>
          </Greet>
          <Greet name="Clark" heroName="Superman">
            <button>Action</button>
          </Greet>
          <Greet name="Diana" heroName="Wonder Woman"/>
          <Welcome/>
          <Counts/>
          <Hello/>
          <Message></Message> */}
        </div>
      );
  }
}

export default App;
