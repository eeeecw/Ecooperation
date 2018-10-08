// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.webRequest.onBeforeRequest.addListener (
  function(details) {
    // console.log(details)
    // if(details.url.indexOf('api.bilibili.com/x/web-interface/nav') > 0) {
    //   console.log(details)
    // }
  },
  {urls:["<all_urls>"]},  //监听所有的url,你也可以通过*来匹配。
  ["blocking"] 
)

chrome.webRequest.onCompleted.addListener(function (details) {
  if(details.url.indexOf('api.bilibili.com/x/web-interface/nav') > 0) {
    // console.log(details)
  }
}, {urls:["<all_urls>"]}, ["responseHeaders"])