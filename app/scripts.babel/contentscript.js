'use strict';

console.log('\'Allo \'Allo! Content script');

// 这里是主要的 主体。
// 一段注入到页面文件中的JavaScript代码
//
function test1(){
  var div=document.createElement("div");
  document.body.appendChild(div);
  div.innerText="great eric add";
  console.log('add new ');
}

// test1();
//-----------

var timer = null;
var waitTimer = null;
var interval = -1;
var secondsToWait = -1;
var countdownDom = null;
var options = null;
var notificationId = null;
var badgeAdded = false;

function test2(){
  console.log("test test 2");
  interval = 5;
  timer = setInterval(function () {
               interval -= 1;
               showCountDown(interval);
               if (interval <= 0) {
                   clearTimer();
                  test2_timer();
               }
           }, 1000);

}
function showCountDown(i){
  console.log(i);
}
function test2_timer(){
  console.log("go ...");
}
function clearTimer() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
}

// test2();   //works
//-----------
