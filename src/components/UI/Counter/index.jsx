import React from "react";
import classes from "./style.module.css";

const Counter = (props) => {
  // 添加购物车的函数
  const addButtonHandler = () => {
    props.onAdd(props.meal);
  };
  // 减少的函数
  const subButtonHandler = () => {
    props.onSub(props.meal);
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
