'use strict';
$(function(){
    var ui = {
        init: function() {
            if($('.gnb_menu_wrap').length > 0) {this.onoffHandler.init();}
            if($('.fixed_bottom_area').length > 0) {this.scrollTop.init();}
        },
        //swich click Event
        onoffHandler: {
            body : 'body',
            gnbMenu : '.gnb_menu_wrap',
            swichBtn : '.btn_menu',
            swichBtnText : '.btn_menu span',
            init : function() {
                var _this = this;
                $(_this.swichBtn).on('click',function(){
                    var btnHasOn = $(this).hasClass('on');
                    if(btnHasOn){
                        $(_this.swichBtnText).html("메뉴열기");
                        $(_this.body).css('overflowY', 'auto');
                        _this.removeOn();
                    } else {
                        $(_this.swichBtnText).html("메뉴닫기");
                        $(_this.body).css('overflowY', 'hidden');
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
        },
        scrollTop: {
            scrollTopBtn : '.btn_gotop',
            init : function() {
                var _this = this;
                $(_this.scrollTopBtn).on('click',function(){
                    $("html, body").animate({scrollTop: 0}, "slow");
                })
            }
        }
    };
    ui.init();
})