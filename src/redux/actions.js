import axios from "axios";


 const apiInstance = (route, request , sucesss , failure , formData ) => async (action) => {
  try {

    let res = {}
    action({
      type: request,
    });

    if(formData){ 
      res = await axios.post(route, formData);
    }
    else{
      res = await axios.get(route);
    }
    
    action({
      type: sucesss,
      message: res.data.message,
      payload : res.data.payload

    });
  } catch (error) {
    console.error(error);
    action({
      type: failure,
      message: "Server Error | 500 ",
    });
  }
};


export const UserDataRequest = () => apiInstance("/user/getuser" , "APIREQUEST" , "APISUCCESS" , "APIFAILURE" )
export const ProductDataRequest = () => apiInstance("/services/all" , "ProductDataRequest" , "ProductDataSuccess" , "ProductDataError" )
export const UserRegister = (formData) => apiInstance("/user/register" , "APIREQUEST" , "APISUCCESS" , "APIFAILURE" , formData )







