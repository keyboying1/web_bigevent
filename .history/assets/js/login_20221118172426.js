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
        var data ={username:$('#form_reg [name=username]').val(),
                   password:$('#form_reg [name=password]').val()}
        $.post('http://www.liulongbin.top:3007/api/reguser',
        data,function(res){
            if(res.status!==0){
                return layer.msg(res.message)
            }
            layer.msg('注册成功')
            
            //模拟点击事件
            $('#link_login').click()
        })
      })

      //监听登录表单的提交事件
    //   $('#form_login').submit(function(e){
    //     //阻止默认提交行为
    //     e.preventDefault()
    //     $.ajax({
    //         url:'http://www.liulongbin.top:3007/api/login',
    //         method:'POST',
    //         //快速获取表单数据
    //         data:$(this).serialize(),
    //         succes:function(res){
    //             if(res.status!==0){
    //                 return layer.msg('登陆失败')
    //             }
    //             layer.msg('登陆成功')
    //             console.log(res.token);
    //         }

    //     })
    //   })
    $('#form_login').submit(function(e) {
        // 阻止默认提交行为
        e.preventDefault()
        $.ajax({
          url: 'ttp://www.liulongbin.top:3007/api/login',
          method: 'POST',
          // 快速获取表单中的数据
          data: $(this).serialize(),
          success: function(res) {
            if (res.status !== 0) {
              return layer.msg('登录失败！')
            }
            layer.msg('登录成功！')
            console.log(res.token)
            // 将登录成功得到的 token 字符串，保存到 localStorage 中
            // localStorage.setItem('token', res.token)
            // // 跳转到后台主页
            // location.href = '/index.html'
          }
        })
      })
})