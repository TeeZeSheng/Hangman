import React from 'react'

const ChildComponent = props => {
    return(
        <div>
            <input type="text" onChange={(event) => props.onChange(event.target.value)}></input>
        </div>
    )
}

export default ChildComponent