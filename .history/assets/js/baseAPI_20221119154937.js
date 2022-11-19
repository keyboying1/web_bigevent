$.ajaxPrefilter(function(options) {
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
  
    //为有权限的接口统一设置headers请求头
    options.headers={
      Authorization:localStorage.getItem('token')||''
    }
  })