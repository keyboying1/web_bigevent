$(function(){


    //获取用户的基本信息
    getUserInfo()

    $('#btnLogout').on('click',function(){
        console.log('ok');
    })
})

//获取用户的基本信息
function getUserInfo(){
    $.ajax({
        method: "GET",
        url:'/my/userinfo',
        //headers 就是请求头配置对象
        // headers:{
        //     Authorization:localStorage.getItem('token')||''
        // }
        success:function(res){
            console.log(res);
            if(res.status !==0){
                return layui.layer.msg('获取用户信息失败！')
            }
            renderAvatar(res.data)
        }
    })
}

// 渲染用户头像
function renderAvatar(user){
// 1.获取用户名称
    var name=user.nickname||user.username
// 2.设置欢迎文本
    $('#welcome').html('欢迎&nbsp;&nbsp;'+ name)
// 3.按需渲染用户头像
    if(user.user_pic!==null){
        //3.1渲染图片头像
        $('.layui-nav-img').attr('src,user.user_pic').show()
        $('.text-avator').hide()
    }else {
        $('.layui-nav-img').hide()
        var first=name[0].toUpperCase() 
        $('.text-avatar').html(first).show()

    }
    

}
