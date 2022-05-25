'use strict';
$(function(){
    var ui = {
        init: function() { 
            if($('.swiper').length > 0) {this.swiperHandler.init();}
            if($('.gnb_menu_wrap').length > 0) {this.onoffHandler.init();}
            if($('.fixed_bottom_area').length > 0) {this.scrollTop.init();}
            if($('.pop_container').length > 0) {this.popupHandler.init();}
            if($('.all_check').length > 0) {this.agreeCheck.init();}
            if ($('.full_pop').length > 0) { this.sticky.init(); }
            if ($('.accord_wrap').length > 0) { this.accord.init(); }
            if ($('.search_wrap').length > 0) { this.searchHandler.init(); }
        },
        searchHandler: {
            searchWrap : '.search_wrap',
            searchBar: '.search_bar',
            removeBtn: '.remove_btn',
            init: function () {
                var _this = this;
                if ($(_this.searchBar).focus()) {
                    var interval = setInterval(function () {
                        if (!$(_this.searchBar).val().trim() == '') {
                            _this.removeBtnOn();
                        } else {
                            _this.removeBtnOff();
                        }
                    })
                } else {
                    clearInterval(interval);
                }
                $(_this.removeBtn).on('click', function () {
                    _this.removeVal(this);
                })
            },
            removeVal: function (target) {
                var _this = this;
                $(target).parent(_this.searchWrap).find(_this.searchBar).val('');
            },
            removeBtnOn: function () {
                var _this = this;
                $(_this.removeBtn).show();
            },
            removeBtnOff: function () {
                var _this = this;
                $(_this.removeBtn).hide();
            }
        },
        swiperHandler: {
            swiper : '.swiper',
            init: function () {
                var _this = this;
                var swiper = new Swiper (_this.swiper, {})
            }
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
        },
        popupHandler: {
            popContainer : '.pop_container',
            popOpenBtn : '.pop_open',
            popCloseBtn : '.pop_close',
            dim : '<div class="dim"></dim>',
            init : function() {
               var _this = this;
               $(_this.popOpenBtn).on('click', function(){
                   _this.open(this);
               })
               $(_this.popCloseBtn).on('click', function(){
                _this.close(this);
            })
            },
            open : function(target) {
                var _this = this;
                $(_this.popContainer).each(function(i){
                    if ($(_this.popContainer).eq(i).attr('id') === $(target).data('open')) {
                        var id = $(target).data('open');
                        $('#'+ id).show();
                        $('body').prepend(_this.dim);
                    }
                })
            },
            close : function(target) {
                var _this = this;
                $(target).parents(_this.popContainer).hide();
                $('body').children().remove('.dim');
            }
        },
        // 체크박스
        agreeCheck: {
            allCheckBtn: '.all_check',
            checkInput: '.item input',
            init: function () {
                var _this = this;
                $(_this.allCheckBtn).on('click', function () {
                    _this.inputAllCheck(this);
                });
            },
            inputAllCheck: function ($this) {
                var _this = this;
                if ($($this).is(':checked')){
                    $(_this.checkInput).prop('checked', true);
                } else {
                    $(_this.checkInput).prop('checked', false);
                }
            },
        },
        sticky: {
            fullPopup: '.full_pop',
            popupHeader: '.pop_head',
            init: function () {
                var _this = this;
                $(_this.fullPopup).scroll(function () {
                    var thisScroll = $(_this.fullPopup).scrollTop();
                    _this.stickyOn(thisScroll);
                })
            },
            stickyOn: function (thisScroll) {
                var _this = this;
                if (thisScroll > 100) {
                    $(_this.popupHeader).addClass('sticky')
                } else {
                    $(_this.popupHeader).removeClass('sticky')
                }
            }
        },
        accord: {
            accordBtn: '.accord_btn',
            accordCont: '.accord_cont',
            init: function () {
                var _this = this;
                $(_this.accordBtn).on('click', function () {
                    _this.accordHandler(this);
                })
            },
            accordHandler: function (target) {
                var _this = this;
                var hasOn = $(target).hasClass('on');
                if (hasOn) {
                    $(target).siblings(_this.accordCont).stop().slideUp();
                    $(target).removeClass('on');
                    $(target).attr('title', "아코디언 닫힘");
                } else {
                    $(target).siblings(_this.accordCont).stop().slideDown();
                    $(target).addClass('on')
                    $(target).attr('title', "아코디언 열림");
                }
            }
        }
    };
    ui.init();
})