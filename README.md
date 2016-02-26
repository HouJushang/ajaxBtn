# ajaxBtn
防止ajax多次提交
## 运行demo 分别执行以下命令
``git clone https://github.com/HouJushang/ajaxBtn.git``
``cd ajaxBtn``
``npm install``
``gulp``
### 如果gulp运行报错,则缺少依赖环境,可直接点击dist或src下的index.html直接运行demo
## ajaxBtn.js文件
压缩版 dist/js/jquery-ajaxBtn.js
非压缩版 src/js/jquery-ajaxBtn.js
## 使用方法
```js
$('.btn').ajaxBtn({
    activeFont: 'ajax发送咯!', //default:操作中...
    activeClass: 'active',//执行ajax时候的class,可以增加不可点击时候的样式! default: ajaxBtn-active
    fn: function (init) { //必传参数 ajax执行完毕调用init() 恢复按钮状态
        //在这里执行ajax操作
        //init恢复按钮 init()
        alert('我执行ajax操作喽!');
        setTimeout(function () {
            init();
        }, 3000)
    }
})
```