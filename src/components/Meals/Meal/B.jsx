import React, {useContext} from 'react';
// import TestContext from '../../store/testContext'

/**
 * 使用Context 方式二：
 *      1.导入Context
 *      2.使用钩子函数useContext()获取到context
 *          useContext() 需要一个Content作为参数
 *              它会将Context中数据获取并作为返回值返回
 * Xxx.Provider
 *  - 表示数据的生产者，可以使用它来指定Context中的数据
 * @returns
 */
const B = () => {

    // 使用钩子函数获取Context
    const ctx = useContext(TestContext);
    return (
    //    <TestContext.Provider value={{name:'小玲', age:17}}>
        
    //    </TestContext.Provider> 
        // <div>
        //     {ctx.name} -- {ctx.age}
        // </div>
    )
}
export default B;