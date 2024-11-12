import React from 'react'

const Child = ({ data, setData }) => {
    const changeData = () => {
        setData("Changed Data")
    }
    return (
        <div>
            <div>{data}</div>
            <button onClick={changeData}>Click</button>
        </div>
    )
}

export default Child