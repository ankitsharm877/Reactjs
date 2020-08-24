import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Ankit'
        }
        console.log('LifecycleC constructor');
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleC getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleC componentDidMount')
    }
    shouldComponentUpdate(){
        console.log("LifecycleC shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleC getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleC componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name:'Sharma'
        })
    }
    render() {
        console.log("LifecycleC render")
        return (
            <div>
               <div> Lifecycle C</div>
               <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifecycleC
