import React from 'react';
import Meal  from './Meal/index';
import classes from './style.module.css';
/**
 * 食物列表组件
 * @returns 
 */
const Meals = (props) => {
    return (
        <>
            {/* 现在将滚动条设置给了Meals */}
            <div className={classes.Meals}>
                {props.mealsData.map(item => 
                    <Meal 
                        key={item.id}
                        meal={item}
                        // 
                    /> )}
            </div>
        </>
    )
}

export default Meals