# ajaxBtn
防止ajax多次提交
```
$('.btn').ajaxBtn({
          activeFont: 'ajax发送咯!',
          activeClass: 'active',
          fn: function(init){
              //在这里执行ajax操作
              //init恢复按钮 init()
              alert('我执行ajax操作喽!');
              setTimeout(function(){
                  init();
              },3000)
          }
      })
```