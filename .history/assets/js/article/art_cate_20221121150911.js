$(function(){
    
    initArtCateList()
    //获取文章分类的列表
  function initArtCateList() {
    $.ajax({
      method: 'GET',
      url: '/my/article/cates',
      success: function(res) {
        var htmlStr = template('tpl-table', res)
        $('tbody').html(htmlStr)
      }
    })
  }
  

  $('#addBtnCate').on('click',function(){
    layer.open({
        type:1,
        area:['500px','250px'],
        title:'添加文字类别',
        content:'可以填写任意的'
    })
  })
})