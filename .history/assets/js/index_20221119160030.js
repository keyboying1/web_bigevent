$(function(){


    //获取用户的基本信息
    getUserInfo()

    $('#btnLogout').on('click',function(){
        
        //提示用户是否退出
        //eg1
        layer.confirm('确定退出登录', {icon: 3, title:'提示'}, function(index){
        //do something
        console.log('ok');
        //1.退出后两件事
        //清空本地token
        localStorage.removeItem('token')
        //2.重新跳转到登录界面
        location.href = '/login.html'
         layer.close(index);
         });
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
