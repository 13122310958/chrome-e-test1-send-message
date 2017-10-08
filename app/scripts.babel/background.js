'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

//reload plugin then run here. in backgroud

chrome.browserAction.setBadgeText({text: '\'gleo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');
//这里是控制browser 的。及与popup消息交互。处理 browser的行为

function setNumber(){
  var testi = Date.now();
  console.log(i);
  chrome.browserAction.setBadgeText({text: "sss"});
}

chrome.tabs.executeScript({
    code: 'console.log("from background")'
});

chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {
    // alert("Contents Of Text File = " + request.fileData);
    //  console.log(JSON.stringify(request));
    //  alert(JSON.stringify(request));
     console.log(request.type);
     chrome.tabs.executeScript({
         code: 'console.log(\''+request.type+'\')'
     });
     chrome.tabs.executeScript({
         code: 'console.log(\' --- '+JSON.stringify(request)+'\')'
     });

     var i = new Date();
      sendResponse({options: 1,d:2});
      // sendResponse('ok');  //works
     return true;
});



var timer = null;
var waitTimer = null;
var interval = -1;
var secondsToWait = -1;
var countdownDom = null;
var options = null;
var notificationId = null;
var badgeAdded = false;

function test4(){
  //当 popup page display then run
  console.log("test test 4");
  output("start test 4");
  interval = 5;
  timer = setInterval(function () {
               interval -= 1;
               showCountDown(interval);
               if (interval <= 0) {
                   //clearTimer();
                  test4_timer();
                    interval = 5;
               }
           }, 1000);

}
function showCountDown(i){
    console.log(i);
    output(i);
}
function test4_timer(){
    output("start test 4 go ... ");
}
function clearTimer() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
}

function output(data){
  chrome.tabs.executeScript({
    code: 'console.log(\''+data+'\')'
  });
}
// test4();  //works
