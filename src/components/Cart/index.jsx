import React, { useContext, useState } from "react";
import classes from "./style.module.css";
import iconImg from "../../assets/bag.png";
import CartContext from "../store/cart-context";
import CartDetail from "./CartDetail";
import Checkout from "./Checkout";

const Cart = () => {
  const ctx = useContext(CartContext);

  // 添加一个 state 来设置详情是否显示
  const [showDetails, setShowDetails] = useState(false);
  // 添加一个 state 设置结账页的显示与隐藏
  const [showCheckout, setShowCheckout] = useState(false);
  // 添加一个显示详情页的函数
  const toggleDetailHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((prevState) => !prevState);
  };

  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };

  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };

  return (
    <div className={classes.Cart} onClick={toggleDetailHandler}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
      {/* 引入购物车详情 */}
      {/* {showDetails && ctx.totalAmount !== 0 ? <CartDetail /> : null} */}
      {showDetails && <CartDetail />}

      <div className={classes.Icon}>
        <img src={iconImg} />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalAmount === 0 ? (
        <p className={classes.NoMeal}>未选购商品</p>
      ) : (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      )}
      <button
        onClick={showCheckoutHandler}
        className={`${classes.Button} ${
          ctx.totalAmount === 0 ? classes.Disabled : ""
        }`}
      >
        去结算
      </button>
    </div>
  );
};

export default Cart;
