import React, { useContext } from 'react'
import { UserContext } from './Globalstate'
import Child_two from './Child_two';
const GlobalstateChild = () => {
    const fetchedUser = useContext(UserContext);
    const { user, setUser } = fetchedUser;
    // console.log(user)
    const update = () => {
        setUser("Updated values")
    }
    return (
        <div>GlobalstateChild
            <br />
            <button onClick={update}>
                Click
            </button>
            {user}
            <Child_two />
        </div>
    )
}
export default GlobalstateChild