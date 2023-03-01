import React from 'react'
import Comp from './Comp'

function Student({name, mobile}) {
    return (
        <>
            <h1>Student Details :- </h1>
            <h2>{name}</h2>
            <h2>{mobile}</h2>

            <Comp name={name}/>
        </>
    )
}

export default Student