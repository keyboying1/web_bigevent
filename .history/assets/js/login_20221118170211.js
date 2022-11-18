$(function(){
    //点击去注册账号链接
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })

    //点击去登录的链接
    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })
    
    // 从layui中获取form对象
    var form=layui.form
    var layer=layui.layer
    form.verify({
        
        
        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        pwd: [
          /^[\S]{6,12}$/
          ,'密码必须6到12位，且不能出现空格'
        ] 
        // 校验两次密码是否一致
        ,repwd: function(value){

            var pwd=$('.reg-box [name=password]').val()
            if(pwd!==value){
                return '两次密码不一致'
            }
        }
      })

      //监听注册表单提交事件
      $('#form_reg').on('submit', function(e){
        e.preventDefault();
        $.post('http://www.liulongbin.top:3007/api/reguser',
        {username:$('#form_reg [name=username]').val(),
        password:$('#form_reg [name=password]').val()},function(res){
            if(res.status!==0){
                return layer.msg(res.message)
            }
            layer.msg('注册成功')
            
            //模拟点击事件
            $('#link_login').click()
        })
      })
})