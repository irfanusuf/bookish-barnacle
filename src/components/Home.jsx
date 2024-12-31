import React, { useEffect } from "react";
import "./Home.css"

import { useDispatch, useSelector } from "react-redux";


import { ProductDataRequest, UserDataRequest, UserRegister } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserDataRequest());
    dispatch(ProductDataRequest());
  }, []);

  const user = useSelector((state) => state.user);
  const product = useSelector((state) => state.product);

  const {loading , payload} = user || {}      // type security 
  const products = product.products  || []   // type security 

  const formdata  ={

    username : "hazik",
    email : "hazik@gmail.com",
    password : "1258745"

  }

  return (
    <div>
      {loading ? (
        <h1> Loading....</h1>
      ) : (
        <h1> hello everyone from {payload.username}</h1>
      )}


      <div className="cards">

      {products.map((element) => (
        <div className="card">
          <h3> {element.serviceTitle} </h3>
          <h4> {element.serviceCost}</h4>
          <img  src= {element.picUrls} width={300}/>


        </div>
      ))}
      </div>



      <div>

        <h1> Register here </h1>

        <button onClick={()=>{


          dispatch(UserRegister(formdata))

        }}> Register </button>
        
      </div>
      
    </div>
  );
};

export default Home;
