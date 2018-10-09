$(document).ready(function(){
  var video = $("video");
  // video[0].play()
  // 获取用户
  // console.log(localStorage.getItem('im_floatmsg'))
  he = $('.u-face');
  // console.log(he[0].children[0].href);

  // axios.get('http://www.eeeezq.com/eup/eup.php', {
  //   params: {
  //     ID: 12345
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  function injectCustomJs(jsPath)
  {
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function()
    {
        // 放在页面不好看，执行完后移除掉
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
  }
  injectCustomJs()

  function getCookie(name){
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split("; ");//分割
    //遍历匹配
    for ( var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split("=");
      if (arr[0] == name){
        return arr[1];
      }
    }
    return null;
  }
  console.log(getCookie('DedeUserID'))

  function bundBili (token) {
    console.log('收到插件绑定请求')
    if (getCookie('DedeUserID')) {
      return {
        mid: window.UserStatus.userInfo.mid,
        face: window.UserStatus.userInfo.face,
        uname: window.UserStatus.userInfo.uname,
      }
      // axios.post('https://www.eeeezq.com/Eup/index.php?user.bundBili', {
      //   token: token,
      //   head: img[0].src,
      //   biid: getCookie('DedeUserID')
      // }).then(res => {
      //   if (res.ret === 0) {
      //     return {
      //       msg: '绑定成功'
      //     }
      //   } else {
      //     return {
      //       msg: '网络连接失败'
      //     }
      //   }
      // })
    }
    console.log('当前未登录')
    return {
      mid: 0,
      msg: '请先登录哔哩哔哩'
    }
  }
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
  {
    // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
    if (request.type === 1) {
      console.log(window)
      sendResponse(bundBili ())
    }
    // sendResponse({msg: '成功通讯'});
  });

  // 监听处理 inject-script 传来的信息
  window.addEventListener("message", function(e)
  {
    switch (e.data.type) {
      case 'UserStatus':
        window.UserStatus = {}
        window.UserStatus.userInfo = e.data.data
        break;
    }
  }, false);
});