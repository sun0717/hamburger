import React from "react";
import ReactDOM from "react-dom";
import classes from "./style.module.css";
const checkoutRoot = document.getElementById("checkout-root");
const Checkout = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.Checkout}>
      <div className={classes.Close}>
        <span onClick={() => props.onHide()}>x</span>
      </div>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
