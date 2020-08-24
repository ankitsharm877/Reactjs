import React from 'react'
import { buyIceCream } from '../action'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams : state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
