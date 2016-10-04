!function (window, document, $, undefined) {
    var $dlg = $('#goodDlg');
    /**
     * 程序唯一入口
     */
    var init = function () {
        bindEvent();
    }
    var bindEvent = function () {
        $('#btnAdd').click(onBtnAddClick);
        $('#btnSave').click(onBtnSaveClick);
    }
    var onBtnAddClick = function () {
        $dlg.modal();
    }
    /**
     * 添加商品
     */
    var onBtnSaveClick = function () {
        var url = '../../api/shop_goods_add.php';
        var data = {
            title: $('#title').val(),
            price: $('#price').val(),
            introduce: $('#introduce').val(),
            stock: $('#stock').val(),
            category: $('#category').val(),
            status: $('input[name="status"]:checked').val()
        };


        // 表单验证
        if (data.title == '') {
            layer.msg('商品名不能为空!', {
                offset: 0,
                shift: 6
            });
            return;
        }
        if (data.price == '') {
            layer.msg('商品价格不能为空!', {
                offset: 0,
                shift: 6
            });
            return;
        }
        if (data.introduce == '') {
            layer.msg('商品描述不能为空!', {
                offset: 0,
                shift: 6
            });
            return;
        }
        if (data.stock == '') {
            layer.msg('商品库存不能为空!', {
                offset: 0,
                shift: 6
            });
            return;
        }
        //console.log(data);

        //layer.msg('加载中', {icon: 16,shade: [0.1,'#fff'],time:0});
        var index = layer.load(0, {shade: [0.1, '#fff'], time: 0});

        $.get(url, data, function (res) {
            if (res.success) {
                setTimeout(function(){
                    layer.closeAll('loading');
                }, 2000);
                $dlg.modal('hide');
                $('#gForm').get(0).reset();
                setTimeout(function() {
                    layer.msg('添加成功!', {
                        offset: 0,
                        shift: 0
                    });
                },3000);
            } else {
                layer.msg('添加失败!', {
                    offset: 0,
                    shift: 0
                });
            }
        }, 'json');
    }
    $(document).ready(init);
}(window, document, jQuery);
