'use strict';
$(function () {
    var ui = {
        init: function() { 
            if($('.swiper').length > 0) {this.swiperHandler.init();}
            if($('.gnb_menu_wrap').length > 0) {this.onoffHandler.init();}
            if($('.fixed_bottom_area').length > 0) {this.scrollTop.init();}
            if($('.pop_container').length > 0) {this.popupHandler.init();}
            if($('.all_check').length > 0) {this.agreeCheck.init();}
            if($('.select_all_btn').length > 0) {this.itemSelect.init();}
            if ($('.full_pop').length > 0) { this.sticky.init(); }
            if ($('.accord_wrap').length > 0) { this.accord.init(); }
            if ($('.search_wrap').length > 0) { this.searchHandler.init(); }
            if ($('.tooltip').length > 0) { this.tooltipHandler.init(); }
            if ($('.tab_wrap').length > 0) { this.tabHandler.init(); }
            if ($('.calendar_wrap').length > 0) { this.calendarHandler.init(); }
            if ($('.follow_gnb_bar, .fixed_bottom_area, .about').length > 0) { this.scrollEvent.init(); }
        },
        calendarHandler: {
            calendar: '.datepicker',
            sDate: '#sdate',
            eDate: '#edate',
            init: function () {
                var _this = this;
                $(_this.calendar).datepicker({
                    minDate: 0,
                    changeMonth: true,
                    dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
                    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                });
                $(_this.sDate).datepicker("option", "onClose", function ( selectedDate ) {
                    $(_this.eDate).datepicker( "option", "minDate", selectedDate );
                });
            }
        },
        scrollEvent: {
            gnbBar: '.follow_gnb_bar',
            topBtn: '.fixed_bottom_area',
            // section: '.section',
            init: function () {
                var _this = this;
                $('body').on('scroll', function () {
                    _this.targetShow();
                    _this.aboutShow(this);
                })
            },
            targetShow: function () {
                var _this = this;
                var thisScroll = $('body').scrollTop();
                if (thisScroll >= 100) {
                    $(_this.gnbBar).addClass('on')
                    $(_this.topBtn).addClass('on')
                }
                else {
                    $(_this.gnbBar).removeClass('on');     
                    $(_this.topBtn).removeClass('on');     
                }
            },
            aboutShow: function (body) {
                var _this = this;
                $(_this.section).each(function (e) {
                    if ($(body).scrollTop() >= Math.ceil($(_this.section).eq(e).offset().top) * 2) {
                        $(_this.section).eq(e).addClass('on')
                    } else {
                        $(_this.section).eq(e).removeClass('on')
                    }
                })
            }
        },
        // 탭 버튼
        tabHandler: {
            tabBtn: '.tab_btn button',
            tabCont: '.tab_cont',
            init: function () {
                var _this = this;
                $(_this.tabBtn).on('click', function (e) {
                    var index = $(this).index();
                    _this.tabOn(e.target, index);
                })
            },
            tabOn: function (target, index) {
                var _this = this;
                if (!$(target).hasClass('on')) {
                    $(target).addClass('on')
                    $(target).siblings().removeClass('on')
                }
                $(_this.tabCont).eq(index).addClass('on')
                $(_this.tabCont).eq(index).siblings().removeClass('on')
               
            }
        },
        // 툴팁
        tooltipHandler: {
            tooltipBtn: '.tooltip',
            init: function () {
                var _this = this;
                $(_this.tooltipBtn).on('click', function () {
                    $(this).toggleClass('on')
                })
            }
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
                var swiper = new Swiper(_this.swiper, {
                    autoHeight: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                })
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
            checkLabel: '.allcheck_wrap > label',
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
                    $(_this.checkLabel).text('선택해제')

                } else {
                    $(_this.checkInput).prop('checked', false);
                    $(_this.checkLabel).text('전체선택')
                }
            },
        },
        itemSelect: {
            allBtn: '.select_all_btn',
            list: '.item',
            removeBtn: '.remove_btn',
            init: function () {
                var _this = this;
                setInterval(function () {
                  _this.removeBtnCheck() 
                })
                $(_this.allBtn).on('click', function () {
                    _this.selectedList(this);
                })
            },
            removeBtnCheck: function () {
                var _this = this;
                if ($(_this.list).find('input').is(':checked')) {
                        $(_this.removeBtn).show()
                } else {
                    $(_this.removeBtn).hide()
                }  
            },
            selectedList: function ($this) {
                var _this = this;
                var allBtn = $($this);
                allBtn.toggleClass('on');
                if (allBtn.hasClass('on')) {
                    $(_this.list).each(function () {
                        $(this).find('input').prop('checked', true);
                    })
                } else {
                    $(_this.list).each(function () {
                        $(this).find('input').prop('checked', false);
                    })
                }
                
            }
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
                $(_this.accordBtn).each(function (e) {
                    if ($(_this.accordBtn).eq(e).hasClass('on')) {
                       $(this).siblings(_this.accordCont).stop().slideDown();
                       $(this).attr('title', "아코디언 열림");
                    }
                })
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