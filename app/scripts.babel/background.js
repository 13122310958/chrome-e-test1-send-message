'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

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

window.setInterval("setNumber",1000);


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
