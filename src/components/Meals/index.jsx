import React from 'react';
import Meal  from './Meal/index';
import classes from './style.module.css';
/**
 * 食物列表组件
 * @returns 
 */
const Meals = () => {
    return (
        <>
            {/* 现在将滚动条设置给了Meals */}
            <div className={classes.Meals}>
                <Meal />
                <Meal />
                <Meal />
                <Meal />
                <Meal />
                <Meal />
                <Meal />
                <Meal />
                <Meal />
                <Meal />
                <Meal />
                <Meal />
                <Meal />
            </div>
        </>
    )
}

export default Meals