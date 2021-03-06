import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }
    clickHandler(){
        this.setState({
            message:'Good Bye!'
        })
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click New</button>
            </div>
        )
    }
}

export default EventBind
