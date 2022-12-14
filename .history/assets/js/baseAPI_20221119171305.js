$.ajaxPrefilter(function(options) {
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
  
    //为有权限的接口统一设置headers请求头

    if(options.url.indexOf('/my/')!==-1){
      options.headers={
        Authorization:localStorage.getItem('token')||''
      }
    }
   

    options.complete=function(res){
      console.log('执行了 complete回调：');
      //console.log(res);
      //在complete回调函数中，可以使用resresponseJSON拿到服务器响应回来的数据
      if(res.responseJSON.status===1 && res.responseJSON.message==='身份认证失败！')
      {
          localStorage.removeItem('token')
          location.href='/login.html'
      }
    }

  })