import React, { Component } from 'react'
import Form from './components/Form'
import './App.css'
import LifecycleA from './components/LifecycleA'
import LifecycleC from './components/LifecycleC'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FRParentInput/>
        {/* <FocusInput/> */}
        {/* <RefsDemo/> */}
        {/* <ParentComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
        {/* <LifecycleC/> */}
        {/* <LifecycleA/> */}
        {/* <Form/> */}
      </div>
    )
  }
}

export default App
