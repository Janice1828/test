import React from 'react'
import Child from './Child'
import { useState } from 'react'
const Parent = () => {
    const [data, setData] = useState("Initial Data")
    return (
        <div>
            {/* {data} */}
            <p>This is the data of parent Component : {data} </p>
            <Child data={data} setData={setData} />
        </div>
    )
}

export default Parent