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


//重置表单数据



//监听表单的提交事件

})

