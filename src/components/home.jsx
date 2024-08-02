import React, { useState } from "react";
import ApiData from "./Api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const Home = () => {
  // const cartData = useSelector((state)=>state.cart);
  const [product, setProduct] = useState(ApiData);
  const dispatch = useDispatch()

  // total qnty of products

  

  //add product in cart

  const addCart = (e)=>{
    dispatch(addToCart(e));

  }
  // console.log(product);
  return (
    <>
    <div className="container productContainer my-3">
      <div className="row row-cols-1 row-cols-md-4  g-4">
        {product.map((curElem, index) => {
          return (
            
              <div className="col" key={index}>
                <div className="card">
                  <img src={curElem.imgdata} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{curElem.dish}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Rs. {curElem.price}</h3>
                        <button className="btn btn-danger" onClick={()=>addCart(curElem)}>Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Home;
