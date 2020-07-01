import React from 'react';

// Initializing the initial state for the context( if not, the build will break )
const initialState = {
}
const UserContext = React.createContext(initialState);

export default UserContext;
