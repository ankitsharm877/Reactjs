import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Ankit'}>
        <ChannelContext.Provider value={'Sharma'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
