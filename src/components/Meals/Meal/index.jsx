import React from "react";
import classes from "./style.module.css";
import Counter from '../../UI/Counter/index.jsx';
/**
 * 食物列表组件
 * @returns
 */
const Meal = () => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src="/img/meals/1.png" alt="" />
      </div>
      <div className={classes.TextBox}>
        <div className={classes.DescBox}>
          <h2 className={classes.Title}>汉堡包</h2>
          <p className={classes.Desc}>
            百分百纯牛肉搭配爽脆酸瓜洋葱粒与美味番茄酱经典滋味
          </p>
        </div>
        <div className={classes.PriceWrap}>
          <span className={classes.Price}>12</span>
          <Counter amount={0}/>
        </div>
      </div>
    </div>
  );
};

export default Meal;
