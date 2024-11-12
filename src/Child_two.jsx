import React, { useContext } from 'react'
import { UserContext } from './Globalstate'
const Child_two = () => {
    const fetchedUser = useContext(UserContext)
    console.log(fetchedUser)
    const { user, setUser } = fetchedUser;
    console.log(user)
    return (
        <div>
            <h1 className='fs-1 text-green-500'>{user}</h1>
        </div>
    )
}
export default Child_two