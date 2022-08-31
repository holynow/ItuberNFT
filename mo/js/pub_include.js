// var baseURL = '../../';
var include = {
    meta : function(){
        document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>');
        document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>');
        document.write('<meta name="format-detection" content="telephone=no"/>');
        document.write('<meta name="naver-site-verification" content="6d88449a60af38802fc30f6dc79af0c504e6d867" />');
        document.write('<meta name="google-site-verification" content="msWIoH7rao4XAo3WDfCX9dzytu9PUk4RpL--jWqqv1c" />');
        document.write('<meta name="facebook-domain-verification" content="ft62cbkaw4xu9nmyo70kfwf5al1972" />');
        document.write('<meta name="title" content="아이튜버NFT">')        
        document.write('<meta name="keywords" content="아이튜버, 두리번, 아이튜버NFT, I-TUBER NFT, 아이튜버 크리에이터">')
        document.write('<meta name="description" content="콘텐츠 제작이 가능한 캐릭터전문 NFT를 사고 팔 수 있는 거래소로, 콘텐츠의 인지도가 확산되면 NFT 가치도 함께 올라갑니다.">')        
    },
    styles: function () {
        document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.1.5/swiper-bundle.css">');
        document.write('<link rel="stylesheet" href="/mo/css/jquery-ui.min.css">');
        document.write('<link rel="icon" href="/mo/img/common/favicon_itubernft.svg">');
        document.write('<link rel="stylesheet" href="/mo/css/global.css">');
        document.write('<link rel="stylesheet" href="/mo/css/content.css">');
        document.write('<link rel="stylesheet" href="/mo/css/fonts.css">');
    },
    scripts : function(){
        document.write('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.1.5/swiper-bundle.min.js"></script>');
        document.write('<script type="text/javascript" src="/mo/js/jquery-3.6.0.min.js"></script>');
        document.write('<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js"></script>');
        document.write('<script type="text/javascript" src="/mo/js/common.js"></script>');
    },
    skipNav : function(){
        document.write('<div class="skip_navi"><a href="#gnb">주요 메뉴 바로가기</a><a href="#contents">본문 컨텐츠 바로가기</a></div>');
    },
    header : function(){
        document.write('<header class="header">');
        document.write('<div class="header_wrap">');
        document.write('<div class="header_inner">');
        document.write('<div class="header_title">');
        document.write('<a href="#none" class="btn_back">');
        document.write('<i class="ico_arr_left">');
        document.write('<span class="a11y">뒤로가기</span>');
        document.write('</i>');
        document.write('</a>');
        document.write('<h2 class="page_title">'+document.title.split('|')[0]+'</h2>');
        document.write('</div>');
        document.write('</div>');
        document.write('</div>');
        document.write('</header>');
    },
    fixBottom : function(){
        document.write('<div class="fixed_bottom_area">');
        document.write('<div class="fixed_item">');
        document.write('<button type="button" class="btn_gotop">');
        document.write('<i class="ico_arr_up"></i>');
        document.write('<span>최상단이동</span>');
        document.write('</button>');
        document.write('</div>');
        document.write('</div>');
    },
    followGnb: function () {
        document.write('<div class="follow_gnb_bar">');
        document.write('<ul class="gnb_list_wrap">');
        document.write('<li class="active">');
        document.write('<a href="/mo/index.html" title="open sale 페이지 이동">');
        document.write('<span>OPEN SALE</span>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/mo/html/market/market_place.html" title="market place 페이지 이동">');
        document.write('<span>MARKET</span>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/mo/html/my/like_list.html" title="좋아요 목록 페이지 이동">');
        document.write('<span>LIKE</span>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/mo/html/my/my_nft.html" title="my nft 페이지 이동">');
        document.write('<span>MY NFT</span>');
        document.write('</a>');
        document.write('</li>');
        document.write('<li>');
        document.write('<a href="/mo/html/my/my_info.html" title="내 정보 페이지 이동">');
        document.write('<span>MY</span>');
        document.write('</a>');
        document.write('</li>');
        document.write('</ul>');
        document.write('</div>');  
    },
    footer : function(){
        document.write('<footer class="footer">');
        document.write('<div class="footer_inner">');
        document.write('<div class="footer_head">');
        document.write('<div class="office_name">');
        document.write('<p>DOORIBUN</p>');
        document.write('</div>');
        document.write('<div class="footer_btn_wrap">');
        document.write('<ul class="sns_btns">');
        // document.write('<li>');
        // document.write('<a href="#none">');
        // document.write('<i class="ico_sns_facebook"></i>');
        // document.write('<span class="a11y">페이스북 바로가기</span>');
        // document.write('</a>');
        // document.write('</li>');
        document.write('<li>');
        document.write('<a href="#none">');
        document.write('<i class="ico_sns_instagram"></i>');
        document.write('<span class="a11y">인스타그램 바로가기</span>');
        document.write('</a>');
        document.write('</li>');
        // document.write('<li>');
        // document.write('<a href="#none">');
        // document.write('<i class="ico_sns_youtube"></i>');
        // document.write('<span class="a11y">유튜브 바로가기</span>');
        // document.write('</a>');
        // document.write('</li>');
        document.write('</ul>');
        document.write('</div>');
        document.write('</div>');
        document.write('<div class="footer_info">');
        document.write('<div class="footer_address_wrap">');
        document.write('<ul class="footer_sort_list">');
        document.write('<li>');
        document.write('<span class="tit">대표</span>');
        document.write('<span class="txt">서국한</span>');
        document.write('</li>');
        document.write('<li>');
        document.write('<span class="tit">주소</span>');
        document.write('<span class="txt">서울시 마포구 토정로 194 (두리번)</span>');
        document.write('</li>');
        document.write('<li>');
        document.write('<span class="tit">TEL</span>');
        document.write('<span class="txt">+82)02-6395-3926</span>');
        document.write('</li>');
        document.write('<li>');
        document.write('<span class="tit">FAX</span>');
        document.write('<span class="txt">+82)02-6395-3926</span>');
        document.write('</li>');
        document.write('<li>');
        document.write('<span class="tit">E-mail</span>');
        document.write('<span class="txt">itubernft@dooribun.com</span>');
        document.write('</li>');
        document.write('</ul>');
        document.write('</div>');
        document.write('<div class="footer_licence">');
        document.write('<ul class="footer_sort_list">');
        document.write('<li>');
        document.write('<span class="tit">사업자등록번호</span>');
        document.write('<span class="txt">468-81-00729</span>');
        document.write('</li>');
        document.write('<li>');
        document.write('<span class="tit">통신판매업신고번호</span>');
        document.write('<span class="txt">제2013-SEOUL MAPO-0418</span>');
        document.write('</li>');
        document.write('</ul>');
        document.write('</div>');
        document.write('<div class="footer_menu">');
        document.write('<ul class="footer_menu_list">');
        document.write('<li>');
        document.write('<a href="#none">');
        document.write('<span>개인정보처리방침</span>');
        document.write('</a>');
        document.write('</li>');
        // document.write('<li>');
        // document.write('<a href="#none">');
        // document.write('<span>이메일주소무단수집거부</span>');
        // document.write('</a>');
        // document.write('</li>');
        document.write('<li>');
        document.write('<a href="#none">');
        document.write('<span>이용약관</span>');
        document.write('</a>');
        document.write('</li>');
        document.write('</ul>');
        document.write('<p class="copy">');
        document.write('Copyright (c) 2022 DOORIBUN All Rights Reserved');
        document.write('</p>');
        document.write('</div>');
        document.write('</div>');
        document.write('</div>');
        document.write('</footer>');
    },
}