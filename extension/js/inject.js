window.postMessage(
  {
    data: window.UserStatus.userInfo,
    type: 'UserStatus'
  }, '*');