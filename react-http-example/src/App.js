import React, { Component } from 'react'
import PostList from './components/PostList'
import './App.css'
import PostForm from './components/PostForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm/>
        {/* <PostList/> */}
      </div>
    )
  }
}

export default App
