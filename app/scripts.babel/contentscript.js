'use strict';

console.log('\'Allo \'Allo! Content script');

// 这里是主要的 主体。
// 一段注入到页面文件中的JavaScript代码
//
var div=document.createElement("div");
document.body.appendChild(div);
div.innerText="great eric add";


console.log('add new ');
