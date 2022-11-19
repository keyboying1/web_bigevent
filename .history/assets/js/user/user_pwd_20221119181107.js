$(function(){
    var form=layui.form
    var layer=layui.layer

    form.verify({

        pwd: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ] 
        ,samepwd:[function(value){
            if(value===$('[name=oldPwd]')){
                return '新旧密码不能相同'
            }
        }

        ]
        
       })
    
    //初始化用户基本信息
function initUserInfo() {
    $.ajax({
        method: 'GET',
        url : '/my/userinfo',
        success: function(res){
            if(res.status !==0){
                return layer.msg('获取用户信息失败！')
                
            }
            console.log('获取个人信息的基本资料成功');
            console.log(res);
            //调用form.val 快速为表单赋值
            form.val('formUserInfo',res.data)
            
        }
    })
}

//重置表单数据
$('#btnReset').on('click',function(e){
    e.preventDefault()
    initUserInfo()
    console.log('重置了表单数据');

})


//监听表单的提交事件
$('.layui-form').on('submit',function(e){


    e.preventDefault()
    $.ajax({
        method: 'POST',
        url : '/my/userinfo',
        data:$(this).serialize(),
        success: function(res){
            if(res.status !==0){
                return layer.msg('更新用户信息失败！')
                
            }
            layer.msg('更新用户信息成功');
            //调用父页面渲染头像名字的方法
            window.parent.getUserInfo()
            
        }
    })
})
})

