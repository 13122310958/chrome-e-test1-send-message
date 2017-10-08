'use strict';

console.log('\'Allo \'Allo! Popup');

var defaultOptions = {
    whereToShowCountdown: ['icon'],
    whenToStartCountdown: 'dom-ready',
    whenToStart: 'right-now',
    whenToStop: 'never',
    timeToStart: '',
    textPattern: '',
    elementSelector: '',
    otherOptions: ['notification']
};
var options = {};
var btn = document.querySelector('#btn');
var input = document.querySelector('#interval');
chrome.tabs.executeScript({
  code: 'console.log(\"ffefe\")'
});

function output(data){
  chrome.tabs.executeScript({
    code: 'console.log(\''+data+'\')'
  });
}


btn.addEventListener('click', function () {

    var interval = input.value && input.value.trim();
    console.log(interval);
    output('ddd');
    output(interval);

    var running = btn.classList.contains('running');
    var action = running ? 'STOP' : 'START';
    output(running);
    // if (action === 'START' && (!interval || interval <= 0)) {
    //     return;
    // }
    // if (action === 'STOP') {
    //     interval = -1;
    // }
    options.interval = interval;
    options.tabId = 1;
    output("start send ");
    // chrome.runtime.sendMessage({Message: "getTextFile"}, function (response) {
    //         output("send  got return ");;
    //     })
    chrome.runtime.sendMessage({type: action, options: options}, function (response) {
      output("got response");
        output(JSON.stringify(response));
        // if (response === 'ok') {
        //     applyTabStatus(!running, interval);
        // }
    });

})


if (jQuery) {
    // jQuery loaded
    // alert();
    $("#bt").html("111");
    chrome.tabs.executeScript({
      code: 'console.log(\"ff4444\")'
    });
    testAjax();

} else {
    // jQuery not loaded
    alert("22");
}



function testAjax() {
  var rel = null;
    $.ajax({
      url: "http://ip.jsontest.com",
      type: "POST",
          dataType: "json",
          contentType: "json",
          data: {"foo": "bar"},
      success: function(data) {
        output(JSON.stringify(data));
          $("#bt").html("44");
          // $("#bt").html(da);

        rel = data;
      }
   });
   return rel;
}
