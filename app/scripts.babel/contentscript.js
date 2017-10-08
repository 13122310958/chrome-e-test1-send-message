'use strict';

console.log('\'Allo \'Allo! Content script');

// 这里是主要的 主体。
// 一段注入到页面文件中的JavaScript代码
//
function test1(){
  var div=document.createElement("div");
  document.body.appendChild(div);
  div.id = "ep_pl";
  div.style.cssText="    position: fixed;right: 0;display: block;z-index: 888;bottom: 0;";
  div.innerText="great eric add ";
  div.onclick = function () {
    alert("helo!");
  };

  console.log('add new ');
}

test1();
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

function test3(){
  var planets = document.getElementById("ep_pl"),
    randomplanet = Math.floor(Math.random() * planets.length);
    // clickplanet = planets[randomplanet];

    // planets.click();

    planets.innerHTML = "fffff new from test 3<br/>adsfasdf</br>asdfsadf<br/>fasdf";
    console.log("click planets");

    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = planets.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    var offset_left = elemRect.left - bodyRect.left;
      console.log('Element is ' + offset + ' vertical pixels from <body>');
      console.log('Element is ' + offset_left + ' left pixels from <body>');
    //click( offset + 50, offset_left+50);
    // document.elementFromPoint(offset+4, offset_left+4).click();
    planets.click();  //works
}
// test3();    //with test1

function click(x,y){
  console.log("start click");
    var ev = document.createEvent("MouseEvent");
    var el = document.elementFromPoint(x,y);

    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        x, y, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    // el.dispatchEvent(ev);
}
