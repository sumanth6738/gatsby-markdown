import React, { useState } from 'react'
import UserContext from "./UserContext"

const UserProvider = (props) => {
    const [data, setData] = ([])
    return (
        <UserContext.Provider value={{

        }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider;