import React from 'react'
import Child_two from './Child_two'

const Parent = () => {
    return (
        <div>
            <p className='font-bold text-xl'>This is Parent</p>
            <Child_two />
        </div>
    )
}

export default Parent