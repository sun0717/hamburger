import React, {useContext} from "react";
import classes from "./style.module.css";
import CartContext from "../../store/cart-context";

const Counter = (props) => {

  // 获取cartContext
  const ctx = useContext(CartContext);
  // 添加购物车的函数
  const addButtonHandler = () => {
    // props.onAdd(props.meal);
    ctx.addItem(props.meal);
  };
  // 减少的函数
  const subButtonHandler = () => {
    // props.onSub(props.meal);
    ctx.removeItem(props.meal);
  };
  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button className={classes.Sub} onClick={subButtonHandler}>
            <span>-</span>
          </button>
          <span className={classes.Count}>{props.meal.amount}</span>
        </>
      ) : null}

      <button onClick={addButtonHandler} className={classes.Add}>
        <span>+</span>
      </button>
    </div>
  );
};

export default Counter;
