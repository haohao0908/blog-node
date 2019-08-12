'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//----------------------------------
// 傳回所有產品
//----------------------------------
var list = async function(){
    var result={};
	
    await sql('SELECT * FROM article')
        .then((data) => {
            result = data.rows;  
        }, (error) => {
            result = null;
        });
		
    return result;
}

//匯出
module.exports = {list};