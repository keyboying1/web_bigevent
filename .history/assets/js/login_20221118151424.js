$(function(){
    //点击去注册账号链接
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })

    //点击去登录的链接
    $('#link_box').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })
})