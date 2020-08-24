import React from 'react'
import Person from './Person'

function NameList() {
     const names = ['Bruce','Clark','Diana']
const nameList = names.map((name,index) => <h2 key={index}>{index}.{name}</h2>)

    return (
        // <div>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        // </div>

        // <div>
        //     {
        //         names.map(name => <h2>{name}</h2>)
        //     }
        // </div>

        //<div>{nameList}</div>
        <div>{nameList}</div>

    )
}

export default NameList
