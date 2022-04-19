'use strict';
$(function(){
    var ui = {
        init: function() {
            if($('.gnb_menu_wrap').length > 0) {this.clickHandler.init();}
        },
        //swich click Event
        clickHandler: {
            gnbMenu : '.gnb_menu_wrap',
            swichBtn : '.btn_menu',
            swichBtnText : '.btn_menu span',
            init : function() {
                var _this = this;
                $(_this.swichBtn).on('click',function(){
                    var btnHasOn = $(this).hasClass('on');
                    if(btnHasOn){
                        $(_this.swichBtnText).html("메뉴열기");
                        _this.removeOn();
                    } else {
                    $(_this.swichBtnText).html("메뉴닫기");
                        _this.addOn();
                    }
                });
            },
            addOn : function(){
                var _this = this;
                $(_this.gnbMenu).addClass('on');
                $(_this.swichBtn).addClass('on');
            },
            removeOn :function(){
                var _this = this;
                $(_this.gnbMenu).removeClass('on');
                $(_this.swichBtn).removeClass('on');
            }
        }
    };
    ui.init();
})