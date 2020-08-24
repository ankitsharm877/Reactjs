import React, { Component } from 'react'
import {Header} from './Header';

class Root extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Root
