$(document).ready(function(){
  var video = $("video");
  // video[0].play()
  // 获取用户
  // console.log(localStorage.getItem('im_floatmsg'))
  he = $('.u-face');
  // console.log(he[0].children[0].href);
  axios.get('http://www.eeeezq.com/eup/eup.php', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
});