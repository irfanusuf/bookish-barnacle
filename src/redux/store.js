import { configureStore } from "@reduxjs/toolkit";
import { productReducer, userReducer,  } from "./reducers";



// store is a collection of reducers 

const store = configureStore({
  reducer: { 
    user : userReducer,
    product: productReducer,

    // blog: blogReducer,
  },
});


export default store