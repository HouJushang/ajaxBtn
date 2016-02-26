/**
 * Created by Laggo on 16/2/26.
 */
(function ($) {
    $.fn.ajaxBtn = function (parms) {
        var options = $.extend({
            'activeFont':'操作中...',
            'activeClass': 'ajaxBtn-active',
            'fn': function (init) {
                alert('fn参数不能为空')
            }
        }, parms);
        var _this = $(this);
        var fontName = _this.text();
        function init() {
            _this.removeClass(options.activeClass);
            _this.text(fontName);
        }
        function action(){
            _this.text(options.activeFont);
            _this.addClass(options.activeClass);
        }
        _this.bind('click', function () {
            if (_this.hasClass(options.activeClass)) {
                return false;
            } else {
                action();
                options.fn(init);
            }
        })
    }
})(jQuery)