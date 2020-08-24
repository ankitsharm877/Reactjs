import React from 'react';
import logo from './logo.svg';
import './App.css';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/useContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Ankit">
        <ComponentC/>
      </UserProvider>
      {/* <Counter render={(count, incrementCount) =>
         <ClickCounterTwo count={count} incrementCount={incrementCount}/>
         }
         />
      <Counter render={(count, incrementCount) => 
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        }
      /> */}
      
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={ (isLoggedIn) => isLoggedIn ? 'Ankit': 'Guest'}/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
    </div>
  );
}

export default App;
