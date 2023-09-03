import React from "react";
import classes from "./style.module.css";


const Counter = (props) => {
  return (
    <div className={classes.Counter}>
      {
        (props.amount && props.amount !== 0) ? 
        (<button className={classes.Sub}>
          <span>-</span>
        </button>) : null
      }

      <span className={classes.Count}>{props.amount}</span>
      <button className={classes.Add}>
        <span>+</span>
      </button>
    </div>
  );
};

export default Counter;
