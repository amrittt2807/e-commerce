import React, { useContext } from "react";
import CartIcon from "../Components/Cart-Icon/CartIcon";
import { CartDropDown } from "../Components/CartDropDown/CartDropDown";
import "./Navigation.style.scss";
import { ReactComponent as Crown } from "../Assets/crown.svg";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { signUserOut } from "../Utils/Firebase/firebase.util";
import { ShowCartCard } from "../Context/ShowCartCard/ShowCartCard";

const Navigation = () => {
  const { currUser } = useContext(UserContext);
  const {showDropDown} = useContext(ShowCartCard)

  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Crown />
        </Link>
        <div className="nav-links-container ">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth" onClick={signUserOut}>
            {currUser ? "Sign Out" : "Sign In"}
          </Link>
          <CartIcon />
        </div>
        {showDropDown && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
