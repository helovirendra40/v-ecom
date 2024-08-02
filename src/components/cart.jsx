import React, { useEffect, useState } from 'react'
import './cartStyle.css'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem, decreamentItem, empty } from '../redux/features/cartSlice';
import { RiShoppingBag3Fill } from "react-icons/ri";

const Cart = () => {
  const {carts} = useSelector((state)=>state.cart);
  const [totalPrice, setTotalPrice] = useState(0)
  console.log(carts);

  let temp1=0;
  let sum1 = 0;
  const totalitems = carts.map((curELem)=>{
    sum1 = curELem.qnty;
    temp1 = sum1;
    return temp1    
  });
  const total = totalitems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)


// total price

  
  const dispatch = useDispatch();

  //inc button

  const IncBtn = (e)=>{
    dispatch(addToCart(e))
  }

  // delete item from the cart

  const deleteItem = (e)=>{
    dispatch(removeItem(e))
  }
// /delete all product
const deleteAllPro = ()=>{
  dispatch(empty())
}
  //Dec button

  const DecBtn = (e)=>{
    dispatch(decreamentItem(e))
  }
 
//Final price
const finalPrice = ()=>{
  let totlatemp=0;
  carts.map((curELem,ind)=>{
    totlatemp = curELem.price * curELem.qnty + totlatemp
    setTotalPrice(totlatemp)
  })
};

useEffect(()=>{
  finalPrice();
  // alert(finalPrice)
},[finalPrice])


  return (
    <>
      <div className='cartContainer bg-light mt-3'>
        <div className='cartHeader px-2 bg-dark d-flex justify-content-between align-items-center'>
            <div className='text-white'>Items {carts.length > 0 ? `(${carts.length})`: 0}</div>
            {
                carts.length > 0 ? <button className='btn btn-danger' onClick={deleteAllPro}>Empty</button>:""
            }
        </div>
        
        {
            carts.length == 0 ? 
            <div className='emptyCartContainer'>
              <RiShoppingBag3Fill className='emptyIcon' />
            </div> : <table className="table table-responsive bg-light">
             <thead>
                 <tr>
                     <th>Delete</th>
                     <th>Image</th>
                     <th>Price</th>
                     <th>Qnty</th>
                     <th>Price</th>
                 </tr>
             </thead>
             <tbody>

              {
                carts.map((curELem,ind)=>{
                  return(
<tr key={ind}>
                     <td>
                     <MdDeleteForever onClick={()=>deleteItem(curELem.id)} />
                     </td>
                     <td>
                        <img src={curELem.imgdata} alt='' />
                     </td>
                     <td>Rs. {curELem.price}</td>
                     <td>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-link-light' onClick={curELem.qnty <=1?()=>deleteItem(curELem.id):()=>DecBtn(curELem)}>-</button>
                            <input type='text' className='disabled' value={curELem.qnty} readOnly />
                            <button className='btn btn-link-light' onClick={()=>IncBtn(curELem)}>+</button>
                        </div>
                     </td>
                     <td >Rs. {curELem.qnty * curELem.price}</td>
                 </tr>
                  )
                })
              }
             
             </tbody>
             <tfoot>
              <tr>
                <td colSpan={4} className='text-end'>Qnty : {total}</td>
                <td className='text-end'>Total : {totalPrice}</td>
              </tr>
             </tfoot>
         </table>
        }
      </div>
    </>
  )
}

export default Cart
