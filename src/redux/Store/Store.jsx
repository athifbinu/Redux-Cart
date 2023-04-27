import { configureStore } from "@reduxjs/toolkit";


import reducer from "../Reducers/Index"



const store = configureStore(
    reducer,
    {},   
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



export default store;



