import { createReducer } from "@reduxjs/toolkit";

const userIntialState = { 
  loading: false,
  message: "",
  payload: {},
};

export const userReducer = createReducer(userIntialState, (builder) => {
  builder
    .addCase("APIREQUEST", (state, action) => {
      state.loading = true;
    })
    .addCase("APISUCCESS" ,(state , action)=>{
      state.loading = false
      state.message = action.message
      state.payload = action.payload;
    })

    .addCase("APIFAILURE", (state, action) => {
      state.loading = false;
      state.message = "Server Error | 404"
    })

  
});






const productIntialState = {
  loading: false,
  message: "",
  products: [],
};

export const productReducer = createReducer(productIntialState, (builder) => {
  builder
    .addCase("ProductDataRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("ProductDataSuccess", (state, action) => {
      state.loading = false;
      state.message = action.message;
      state.products = action.payload;
    })
    .addCase("ProductDataError", (state, action) => {
      state.loading = true;
      state.message = action.message;
    });
});

// export const blogReducer = createReducer();
