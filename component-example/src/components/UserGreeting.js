import React, { Component } from 'react'

export class UserGreeting extends Component {
constructor(props) {
    super(props)

    this.state = {
         isLoggedIn : true
    }
}


    render() {
        return this.state.isLoggedIn && <div>Hello World</div>
    //    return this.state.isLoggedIn ?
    //     (<div>Welcome React js</div>):
    //     ( <div>Welcome Guest</div>)

        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //            <div>Welcome React js</div>
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //            <div>Welcome Guest</div>
        //         </div>
        //     )

        // }
    }
}

export default UserGreeting
