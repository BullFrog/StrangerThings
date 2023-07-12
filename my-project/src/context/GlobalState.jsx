// import React, { createContext, useReducer } from 'react';
// import AppReducer from './AppReducer';

// //initial state
// const initialState = {
//     users: []
// };

// //create context
// export const GlobalContext = createContext(initialState);

// //provider component
// export const GlobalProvider = ({children}) => {
//     const [state, dispatch] =useReducer(AppReducer, initialState);
//     return(
//         <GlobalContext.Provider value={{
//             users: state.users
//         }}>
//             {children}
//         </GlobalContext.Provider>
//     )
// }