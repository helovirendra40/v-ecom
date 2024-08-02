import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {carts} = useSelector((state)=>state.cart);
  
  return (
    <>
    {/* class="navbar  border-bottom border-body" */}
      <nav className="navbar navbar-expand-lg bg-dark"  data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            V-Ecom
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a  href="#">Cart</a> */}
                <Link className="nav-link" to={"/cart"}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <Link to={'/cart'} className=" position-relative">
          <FaShoppingCart className="fs-2" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {
                    carts.length
                }                
            </span>
          </Link>
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
