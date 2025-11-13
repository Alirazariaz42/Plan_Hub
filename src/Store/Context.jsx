import { createContext, useState } from 'react';


export const MyContext = createContext();

// const MyContextProvider = ({ children }) => {
//   const [myState, setMyState] = useState('Initial Value');

//   const updateState = (newValue) => {
//     setMyState(newValue);
//   };

  //export { MyContext, MyContextProvider }