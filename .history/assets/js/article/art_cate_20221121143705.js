$(function(){
    
    
    //获取文章分类的列表
    function initArtCateList(){
        $.ajax({
            method: "GET",
            url: '/my/userinfo',
            success: function(res) {
                console.log(res);
            }
        })
    }
})