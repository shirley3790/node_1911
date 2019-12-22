/*
 * @Author: your name
 * @Date: 2019-12-02 11:55:52
 * @LastEditTime: 2019-12-02 12:03:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1909_nodejs\04mysql\mogujie\utils\formatdata.js
 */
/*
    提示信息格式化处理：
    {
        code ：0/1 失败/成功,
        mes : 'fail/success',
        data : [{},{}]
    }
*/
function formatdata(opt) {
    let defaults = {
        code: 1,
        mes: 'success',
        data: []
    }

    //替补方案
    if (opt) {
        Object.assign(defaults, opt);
        if (opt.code == 0) {
            defaults.mes = 'fail'
        }
    }
    console.log(defaults);
    return defaults;
}

// formatdata();//得到默认值,成功的没有数据返回

// formatdata({ code: 0 });//失败的

// formatdata({ data: [1, 2, 3] });//成功并且有数据返回

module.exports = {
    formatdata
}