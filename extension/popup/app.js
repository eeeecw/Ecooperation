webpackJsonp([1],{"5OHe":function(t,s){},"9Zr3":function(t,s){},JJgb:function(t,s){},JRXo:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},i,!1,function(t){e("hVoV")},null,null).exports,o=e("/ocq"),r=e("2JnT"),u=e.n(r),c={name:"login",data:function(){return{user:"",pass:""}},created:function(){for(var t=0;t<2;t++)u()().get(function(t){window.fingerprint=t})},methods:{login:function(){var t=this;return this.user?this.user.length<6||this.user.length>20?this.$toast({message:"用户名长度不合法",position:"bottom",duration:1500}):this.$validate.chinese.test(this.user)?this.$toast({message:"用户名不支持汉字",position:"bottom",duration:1500}):this.pass?this.pass.length<6||this.pass.length>20?this.$toast({message:"密码长度不合法",position:"bottom",duration:1500}):this.$validate.chinese.test(this.pass)?this.$toast({message:"密码不支持汉字",position:"bottom",duration:1500}):void this.$api.get("/Eup/index.php?user.login",{user:this.user,pass:this.pass,fingerprint:window.fingerprint}).then(function(s){if(t.$toast({message:s.msg,position:"bottom",duration:1500}),0===s.ret){t.$cookies.set("token",s.content);var e=t;setTimeout(function(){e.$router.push("/user")},1500)}}).catch(function(){return t.$toast({message:"网络错误，稍后重试",position:"bottom",duration:1500})}):this.$toast({message:"请输入密码",position:"bottom",duration:1500}):this.$toast({message:"请输入用户名",position:"bottom",duration:1500})}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"user",attrs:{id:"user",autocomplete:"off",type:"text"},domProps:{value:t.user},on:{input:function(s){s.target.composing||(t.user=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"pass",attrs:{id:"pass",autocomplete:"off",type:"password"},domProps:{value:t.pass},on:{input:function(s){s.target.composing||(t.pass=s.target.value)}}}),t._v(" "),e("button",{staticClass:"loging-btn login ripple",attrs:{id:"login"},on:{click:t.login}},[t._v("登录")]),t._v(" "),e("div",{staticClass:"footer"},[e("a",{staticClass:"footer-link",attrs:{href:""}},[t._v("忘记密码")]),t._v(" "),e("a",{staticClass:"footer-link",attrs:{href:""}},[t._v("互助论坛")]),t._v(" "),e("router-link",{staticClass:"footer-link",attrs:{to:"/reg"}},[t._v("注册新号")])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"user-header"},[s("img",{attrs:{src:"http://thyrsi.com/t6/371/1537152332x-1566688526.jpg",alt:"用户头像"}})])}]};var p=e("VU/8")(c,l,!1,function(t){e("oxwB"),e("9Zr3")},"data-v-9eb9f3b2",null).exports,d={name:"reg",data:function(){return{user:"",pass:""}},created:function(){for(var t=0;t<2;t++)u()().get(function(t){window.fingerprint=t})},methods:{reg:function(){var t=this;return this.user?this.user.length<6||this.user.length>20?this.$toast({message:"用户名长度不合法",position:"bottom",duration:1500}):this.$validate.chinese.test(this.user)?this.$toast({message:"用户名不支持汉字",position:"bottom",duration:1500}):this.pass?this.pass.length<6||this.pass.length>20?this.$toast({message:"密码长度不合法",position:"bottom",duration:1500}):this.$validate.chinese.test(this.pass)?this.$toast({message:"密码不支持汉字",position:"bottom",duration:1500}):void this.$api.get("/Eup/index.php?user.reg",{user:this.user,pass:this.pass,fingerprint:window.fingerprint}).then(function(s){if(t.$toast({message:s.msg,position:"bottom",duration:1500}),0===s.ret){var e=t;setTimeout(function(){e.$router.push("/user")},1500)}}).catch(function(){return t.$toast({message:"网络错误，稍后重试",position:"bottom",duration:1500})}):this.$toast({message:"请输入密码",position:"bottom",duration:1500}):this.$toast({message:"请输入用户名",position:"bottom",duration:1500})}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("router-link",{staticClass:"go-back",attrs:{to:"/"}},[t._v("< 返回登录")]),t._v(" "),t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"user",attrs:{id:"user",autocomplete:"off",type:"text"},domProps:{value:t.user},on:{input:function(s){s.target.composing||(t.user=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"pass",attrs:{id:"pass",autocomplete:"off",type:"password"},domProps:{value:t.pass},on:{input:function(s){s.target.composing||(t.pass=s.target.value)}}}),t._v(" "),e("button",{staticClass:"loging-btn login ripple",attrs:{id:"login"},on:{click:t.reg}},[t._v("注册")]),t._v(" "),e("div",{staticClass:"footer"},[e("a",{staticClass:"footer-link",attrs:{href:""}},[t._v("忘记密码")]),t._v(" "),e("a",{staticClass:"footer-link",attrs:{href:""}},[t._v("互助论坛")]),t._v(" "),e("router-link",{staticClass:"footer-link",attrs:{to:"/"}},[t._v("已有账号")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"user-header"},[s("img",{attrs:{src:"http://thyrsi.com/t6/371/1537152332x-1566688526.jpg",alt:"用户头像"}})])}]};var v=e("VU/8")(d,h,!1,function(t){e("JRXo"),e("jVlH")},"data-v-567ce47b",null).exports,f={name:"user",data:function(){return{at:"nav1"}},created:function(){console.log(this.$cookies.get("token"))},methods:{changeNav1:function(){this.at="nav1",this.$router.push({path:"/user/status"})},changeNav2:function(){this.at="nav2",this.$router.push({path:"/user/video"})}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("router-view",{staticClass:"body"}),t._v(" "),e("div",{staticClass:"nav"},[e("div",{staticClass:"nav_1",class:{active:"nav1"===t.at},on:{click:t.changeNav1}},[t._v("状态")]),t._v(" "),e("div",{staticClass:"nav_2",class:{active:"nav2"===t.at},on:{click:t.changeNav2}},[t._v("视频")])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"header_top"}),this._v(" "),s("div",{staticClass:"header_body"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:"https://i0.hdslb.com/bfs/face/1d24fa5c268e63383e8f37a155d08a3bfa712442.jpg",alt:""}})])])])}]};var g=e("VU/8")(f,m,!1,function(t){e("tx4P"),e("JJgb")},"data-v-3ddefb62",null).exports,_={name:"setting",data:function(){return{init:0,start:null}},created:function(){var t=this;this.$api.get("/Eup/index.php?user.status",{token:this.$cookies.get("token")}).then(function(s){0===s.ret?(t.init=2,window.start?t.start=!0:(t.start=!1,window.start=!1)):t.init=1})},methods:{changeSwitch:function(){window.start=this.start},bundBili:function(){var t=this,s=this;this.$utils.sendMessageToContentScript({type:1},function(e){if(console.log(e),!e.biid)return s.$toast({message:e.msg,position:"bottom",duration:1500});e.token=t.$cookies.get("token"),t.$api.post("/Eup/index.php?user.bundBili",e).then(function(t){return console.log("绑定成功"),console.log(t),s.$toast({message:t.msg,position:"bottom",duration:1500})})})}}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[1===t.init?e("div",{staticClass:"no-bunding"},[e("div",{staticClass:"no-bunding_tip"},[t._v("您还未绑定 up 主信息，请先登录 bilibili ，然后点击下面按钮进行绑定")]),t._v(" "),e("mt-button",{staticClass:"no-bunding_btn",attrs:{type:"primary"},on:{click:t.bundBili}},[t._v("绑定")])],1):t._e(),t._v(" "),2===t.init?e("div",{staticClass:"status"},[t._v("\n    互助"),e("mt-switch",{on:{change:t.changeSwitch},model:{value:t.start,callback:function(s){t.start=s},expression:"start"}},[t._v(t._s(["关闭","开始"][+t.start]))])],1):t._e()])},staticRenderFns:[]};var $=e("VU/8")(_,b,!1,function(t){e("YCND")},"data-v-0a0bbd33",null).exports,C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container"},[this.init?s("div",{staticClass:"init"}):s("div",{staticClass:"status"})])},staticRenderFns:[]};var w=e("VU/8")({name:"setting",data:function(){return{init:!0}},created:function(){this.$api.get("/Eup/index.php?user.status",{token:this.$cookies.get("token")}).then(function(t){t.ret})}},C,!1,function(t){e("d5Z0")},"data-v-75ab72fa",null).exports;n.default.use(o.a);var k=new o.a({routes:[{path:"/",name:"login",component:p},{path:"/reg",name:"reg",component:v},{path:"/user",name:"user",component:g,children:[{path:"status",name:"status",component:$},{path:"video",name:"video",component:w}]}]});k.beforeEach(function(t,s,e){return"user"!==t.name||n.default.cookies.get("token")?"login"===t.name&&n.default.cookies.get("token")?e("/user/status"):void e():e("/")});var x=k,y=e("//Fk"),E=e.n(y),N=e("aozt"),V=e.n(N);V.a.defaults.baseURL="http://www.eeeezq.com",V.a.defaults.timeout=2e5,V.a.defaults.headers={"Content-Type":"application/x-www-form-urlencoded"},V.a.defaults.validateStatus=function(t){return t};var R={post:function(t,s){return new E.a(function(e,n){V.a.post(t,s).then(function(t){e(t.data)}).catch(function(t){n(t)})})},get:function(t,s){return new E.a(function(e,n){V.a.get(t,{params:s}).then(function(t){e(t.data)}).catch(function(t){n(t)})})}},J={chinese:/[\u4e00-\u9fa5]/};var F={sendMessageToContentScript:function(t,s){chrome.tabs.query({active:!0,currentWindow:!0},function(e){chrome.tabs.sendMessage(e[0].id,t,function(t){s&&s(t)})})}};var P=e("wSez"),T=e.n(P),U=e("0Gzk"),j=e.n(U);e("5OHe");n.default.config.productionTip=!1,n.default.use(function(t){t.$api=t.prototype.$api=R,t.$validate=t.prototype.$validate=J,t.$utils=t.prototype.$utils=F}),n.default.use(T.a),n.default.use(j.a),new n.default({el:"#app",router:x,components:{App:a},template:"<App/>"})},YCND:function(t,s){},d5Z0:function(t,s){},hVoV:function(t,s){},jVlH:function(t,s){},oxwB:function(t,s){},tx4P:function(t,s){}},["NHnr"]);