'use strict'

import regData from './regData';

const rowData = function(ele,title){
   let row = ele.parentNode;
   let rowList = Array.from(row.children)
   // default remove the first column 默认移除第一行列名
   rowList.shift();
   let reg = regData([rowList,title])
   return {
      data:reg.data,
      title:reg.title,
      index: Array.prototype.indexOf.call(rowList,ele)
      };
}

export default rowData;