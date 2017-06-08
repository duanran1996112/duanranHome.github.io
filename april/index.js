$(document).ready(function () {
    // 取消默认事件
    document.addEventListener('touchmove',function (event) {
        var event = event || window.event;
        event.preventDefault();
    }, false);

    // 分享数据
    var shareConfig = [
        {
            title: "四月5大食药谣言盘点",
            desc: "在外喝粥等于喝胶？塑料加工成大米？较真四月5大食药谣言盘点",
            img: "http://home.duanran96.com/april/images/share-logo.jpg"
        },
        {
            title: "四月5大食药谣言盘点",
            desc: "在外喝粥等于喝胶？塑料加工成大米？较真四月5大食药谣言盘点",
            img: "http://home.duanran96.com/april/images/share-logo.jpg"
        },
        {
            title: '四月食药谣言NO.1：皮皮虾遭人为“注胶',
            desc: '我正在看较真：皮皮虾遭人为注“胶”？那是未成熟的虾黄。',
            img: 'http://home.duanran96.com/april/images/share-01.jpg'
        },
        {
            title: '四月食药谣言NO.2：人造鸡蛋流入市场',
            desc: '我正在看较真：人造假鸡蛋流入市场？只是玩具，不必担心。',
            img: 'http://home.duanran96.com/april/images/share-02.jpg'
        },
        {
            title: '四月食药谣言NO.3：春茶含过量农药，一喝中毒',
            desc: '我正在看较真：春茶含过量农药，一就喝中毒？春茶基本不用药。',
            img: 'http://home.duanran96.com/april/images/share-03.jpg'
        },
        {
            title: '四月食药谣言NO.4：在外面喝粥等于喝胶水',
            desc: '我正在看较真：在外喝粥等于喝胶水？夸大事实。',
            img: 'http://home.duanran96.com/april/images/share-04.jpg'
        },
        {
            title: '四月食药谣言NO.5：塑料加工成大米',
            desc: '我正在看较真：视频曝光塑料加工成大米？谣言，那是塑料颗粒',
            img: 'http://home.duanran96.com/april/images/share-05.jpg'
        },
        {
            title: "四月5大食药谣言盘点",
            desc: "在外喝粥等于喝胶？塑料加工成大米？较真四月5大食药谣言盘点",
            img: "http://home.duanran96.com/april/images/share-logo.jpg"
        },
        {
            title: "四月5大食药谣言盘点",
            desc: "在外喝粥等于喝胶？塑料加工成大米？较真四月5大食药谣言盘点",
            img: "http://home.duanran96.com/april/images/share-logo.jpg"
        },
        {
            title: "四月5大食药谣言盘点",
            desc: "在外喝粥等于喝胶？塑料加工成大米？较真四月5大食药谣言盘点",
            img: "http://home.duanran96.com/april/images/share-logo.jpg"
        },
        {
            title: "四月5大食药谣言盘点",
            desc: "在外喝粥等于喝胶？塑料加工成大米？较真四月5大食药谣言盘点",
            img: "http://home.duanran96.com/april/images/share-logo.jpg"
        },
        {
            title: "四月5大食药谣言盘点",
            desc: "在外喝粥等于喝胶？塑料加工成大米？较真四月5大食药谣言盘点",
            img: "http://home.duanran96.com/april/images/share-logo.jpg"
        },
        {
            title: "四月5大食药谣言盘点",
            desc: "在外喝粥等于喝胶？塑料加工成大米？较真四月5大食药谣言盘点",
            img: "http://home.duanran96.com/april/images/share-logo.jpg"
        }
    ]; 
    var shareData = {
        title: "较真发布：四月5大食药谣言盘点",
        desc: "在外喝粥等于喝胶？塑料加工成大米？较真四月5大食药谣言盘点",
        img: "http://home.duanran96.com/april/images/share-logo.jpg",
        link: window.location.href
    };

    // 页面内容

    //模板1
    var htmlModelOne = '';
    htmlModelOne += '<div class="model-title"></div>';
    htmlModelOne += '<div class="model-harm"></div>';
    htmlModelOne += '<div class="model-lie"></div>';
    htmlModelOne += '<div class="model-pic"></div>';
    htmlModelOne += '<div class="model-appraisal"></div>';
    htmlModelOne += '<div class="model-degree"></div>';
    htmlModelOne += '<div class="model-swipe"></div>';

    //模板2
    var htmlModelTwo = '';
    htmlModelTwo += '<div class="model-joke-title"></div>';
    htmlModelTwo += '<div class="model-joke-messageOne"></div>';
    htmlModelTwo += '<div class="model-joke-messageTwo"></div>';
    htmlModelTwo += '<div class="model-joke-messageThree"></div>';
    htmlModelTwo += '<div class="model-joke-messageFour"></div>';
    htmlModelTwo += '<div class="model-swipe"></div>';

    // 图片预加载
    var picArr = [
        'http://home.duanran96.com/april/images/loading-icon.png',
        'http://home.duanran96.com/april/images/loading-word.png',
        'http://home.duanran96.com/april/images/page-m-1.png',
        'http://home.duanran96.com/april/images/swipe.png',
        'http://home.duanran96.com/april/images/share-bg.png',
        'http://home.duanran96.com/april/images/page-m-02.png',
        'http://home.duanran96.com/april/images/m-l.png',
        'http://home.duanran96.com/april/images/m-t-1.png',
        'http://home.duanran96.com/april/images/m-t-2.png',
        'http://home.duanran96.com/april/images/m-h-1.png',
        'http://home.duanran96.com/april/images/m-h-2.png',
        'http://home.duanran96.com/april/images/m-p-1.png',
        'http://home.duanran96.com/april/images/m-p-2.png',
        'http://home.duanran96.com/april/images/m-a-1.png',
        'http://home.duanran96.com/april/images/m-a-2.png',
        'http://home.duanran96.com/april/images/m-d-1.png',
        'http://home.duanran96.com/april/images/m-d-2.png',
        'http://home.duanran96.com/april/images/m-s-1.png',
        'http://home.duanran96.com/april/images/m-s-2.png',
        'http://home.duanran96.com/april/images/share-01.jpg',
        'http://home.duanran96.com/april/images/share-02.jpg',
        'http://home.duanran96.com/april/images/share-logo.jpg'
    ];
    // 加载剩余图片
    var nextArr = [ 
        'http://home.duanran96.com/april/images/m-t-3.png',
        'http://home.duanran96.com/april/images/m-t-4.png',
        'http://home.duanran96.com/april/images/m-t-5.png',
        'http://home.duanran96.com/april/images/m-h-3.png',
        'http://home.duanran96.com/april/images/m-h-4.png',
        'http://home.duanran96.com/april/images/m-h-5.png',
        'http://home.duanran96.com/april/images/m-p-3.png',
        'http://home.duanran96.com/april/images/m-p-4.png',
        'http://home.duanran96.com/april/images/m-p-5.png',
        'http://home.duanran96.com/april/images/m-a-3.png',
        'http://home.duanran96.com/april/images/m-a-4.png',
        'http://home.duanran96.com/april/images/m-a-5.png',
        'http://home.duanran96.com/april/images/m-d-3.png',
        'http://home.duanran96.com/april/images/m-d-4.png',
        'http://home.duanran96.com/april/images/m-d-5.png',
        'http://home.duanran96.com/april/images/m-s-3.png',
        'http://home.duanran96.com/april/images/m-s-4.png',
        'http://home.duanran96.com/april/images/m-s-5.png',
        'http://home.duanran96.com/april/images/share-03.jpg',
        'http://home.duanran96.com/april/images/share-04.jpg',
        'http://home.duanran96.com/april/images/share-05.jpg',
        'http://home.duanran96.com/april/images/page-m-3.png',
        'http://home.duanran96.com/april/images/joke-1-1.png',
        'http://home.duanran96.com/april/images/joke-1-2.png',
        'http://home.duanran96.com/april/images/joke-1-3.png',
        'http://home.duanran96.com/april/images/joke-1-4.png',
        'http://home.duanran96.com/april/images/joke-1-5.png',
        'http://home.duanran96.com/april/images/joke-2-1.png',
        'http://home.duanran96.com/april/images/joke-2-2.png',
        'http://home.duanran96.com/april/images/joke-2-3.png',
        'http://home.duanran96.com/april/images/joke-2-4.png',
        'http://home.duanran96.com/april/images/joke-2-5.png',
        'http://home.duanran96.com/april/images/joke-3-1.png',
        'http://home.duanran96.com/april/images/joke-3-2.png',
        'http://home.duanran96.com/april/images/joke-3-3.png',
        'http://home.duanran96.com/april/images/joke-3-4.png',
        'http://home.duanran96.com/april/images/joke-3-5.png',
        'http://home.duanran96.com/april/images/joke-4-1.png',
        'http://home.duanran96.com/april/images/joke-4-2.png',
        'http://home.duanran96.com/april/images/joke-4-3.png',
        'http://home.duanran96.com/april/images/joke-4-4.png',
        'http://home.duanran96.com/april/images/joke-4-5.png',
        'http://home.duanran96.com/april/images/page-more.png',
        'http://home.duanran96.com/april/images/page-old.png',
        'http://home.duanran96.com/april/images/page-m-4.png'
    ]
    function loadImg(arr,callback) {
        var len = arr.length;
        var index = 0;
        var imgArr = [];
        function load () {
            var image = new Image();
            function loading () {
                imgArr.push(image);
                if(index < len) {
                    callback && callback(imgArr);
                    load();
                }else {
                        imgArr.shift();
                }
                index ++;
            }
            image.onload = loading; // 图片预加载成功
            image.onerror = loading; // 图片预加载失败
            image.src = arr[index];
        }
        if (len > 0) {
            load();
        }
    }
    function changeNumber (arr) {
        $('.wrapper .loading .loading-precent').text(parseInt(arr.length / picArr.length * 100) + '%');
        if(parseInt(arr.length / picArr.length) * 100 == 100) {               
            $('.wrapper .loading').css('display','none');
            $('.wrapper .screen').css('display','block');
            layOut.init();   
            loadImg(nextArr);               
        }
    }
    loadImg(picArr,changeNumber);

    //计算
    function countRect(obj) {
        var _h = obj.height;
        var _w = obj.width;
        var _r = obj.right;
        var _l = obj.left;
        var _t = obj.top;
        var _b = obj.bottom;
        var oldH = obj.printHeight;
        var oldW = obj.printWidth;
        var newH = $(window).height();
        var newW = $(window).width();
        var viewH;
        var viewW;
        if((newW / newH) < (oldW / oldH)) {
            viewH = oldH * newW / oldW;
            return {
                width: _w * 100 / oldW,
                padding_top: _h * 100 / oldW,
                right: _r * 100 / oldW,
                left: _l * 100 / oldW,
                top: _t * 100 / oldH * viewH / newH + ((newH - viewH) / 2 / newH * 100),
                bottom: _b * 100 / oldH * viewH / newH + ((newH - viewH) / 2 / newH * 100)
            }
        } else {
            viewW = oldW * newH / oldH;
            return {
                width: _w * 100 / oldW * viewW / newW,
                padding_top: _h * 100 / oldW * viewW / newW,
                right: _r * 100 / oldW * viewW / newW + ((newW - viewW) / 2 / newW * 100),
                left: _l * 100 / oldW * viewW / newW + ((newW - viewW) / 2 / newW * 100),
                top: _t * 100 / oldH,
                bottom: _b * 100 / oldH,
            }
        }
    }
    function loadCount () { // loading封面计算
        var loadingIconCount = countRect({
            printHeight: 1206,
            printWidth: 750,
            height: 107,
            width: 107,
            top: 456
        });
        var loadingWordCount = countRect({
            printHeight: 1206,
            printWidth: 750,
            height: 21,
            width: 158,
            top: 590
        });
        var loadingPrecentCount = countRect({
            printHeight: 1206,
            printWidth: 750,    
            top: 630
        });
        $('.loading .loading-icon').css({
            "width": loadingIconCount.width + '%',
            "padding-top": loadingIconCount.padding_top + '%',
            "margin-left": '-' + loadingIconCount.width / 2 + '%',
            "top": loadingIconCount.top + '%'
        })
        $('.loading .loading-word').css({
            "width": loadingWordCount.width + '%',
            "padding-top": loadingWordCount.padding_top + '%',
            "top": loadingWordCount.top + '%'
        })
        $('.loading .loading-precent').css({
            "top": loadingPrecentCount.top + '%'
        })
    }
    loadCount();
    $(window).resize(function () {
        loadCount();
    })

    //配置初始化
    var layOut = {
        init: function () { // 配置屏幕高度，初始页数
            var _this = this;
            _this.height = $(window).height();
            _this.width = $(window).width();
            _this.length = $('.page').length;
            _this.nowPage = 0;
            $('.wrapper .screen').width(_this.width).height(_this.height * _this.length);
            $('.wrapper .screen .page').width(_this.width).height(_this.height);
            $('.page-0' + _this.nowPage).addClass('page-active');
            _this.initDomLogo();
            _this.resize();
            _this.active();
        },
        initDomLogo: function () { // 初始页面中logo                    
            var swipeCount = countRect({
                printHeight: 1206,
                printWidth: 750,
                height: 52,
                width: 50,
                bottom: 85
            });
            $('.page .page-swipe').css({
                "width": swipeCount.width + '%',
                "padding-top": swipeCount.padding_top + '%',
                "bottom": swipeCount.bottom + '%'
            });
            var shareCount = countRect({
                printHeight: 1206,
                printWidth: 750,
                height: 88,
                width: 88,
                right: 94,
                bottom: 101
            });
            $('.page .model-share').css({
                "width": shareCount.width + '%',
                "padding-top": shareCount.padding_top + '%',
                "right": shareCount.right + '%',
                "bottom": shareCount.bottom  + '%'              
            });
            var pageMoreCount = countRect({
                printHeight: 1206,
                printWidth: 750,    
                height: 97,
                width: 553,
                top: 430
            });  
            $('.page .page-more').css({
                "width": pageMoreCount.width + '%',
                "padding-top": pageMoreCount.padding_top + '%',
                "top": pageMoreCount.top + '%'
            });  
            var pageOldCount = countRect({
                printHeight: 1206,
                printWidth: 750,    
                height: 97,
                width: 553,
                top: 547
            });                    
            $('.page .page-old').css({
                "width": pageOldCount.width + '%',
                "padding-top": pageOldCount.padding_top + '%',
                "top": pageOldCount.top + '%'
            });             
        },
        initAddLogo: function () { // 配置动态添加logo
            var swipeCount = countRect({
                printHeight: 1206,
                printWidth: 750,
                height: 52,
                width: 50,
                bottom: 85
            });
            $('.page .model-swipe').css({
                "width": swipeCount.width + '%',
                "padding-top": swipeCount.padding_top + '%',
                "bottom": swipeCount.bottom + '%'
            });
        },
        resize: function () { // 窗口改变
            var _this = this;
            $(window).resize(function () {
                _this.height = $(window).height();
                _this.width = $(window).width();
                $('.wrapper .screen').width(_this.width).height(_this.height * _this.length);
                $('.wrapper .screen .page').width(_this.width).height(_this.height);
                _this.initDomLogo();
                _this.initAddLogo();
            });
        },
        share: function () { // 分享 
            var _this = this;
            shareData.title = shareConfig[_this.nowPage].title; 
            shareData.desc = shareConfig[_this.nowPage].desc; 
            shareData.img = shareConfig[_this.nowPage].img;
        },
        leave: function () { // 离开当前页面删除类
            var _this = this;
            if(_this.nowPage == 0 || _this.nowPage == 1 || _this.nowPage == 7 || _this.nowPage == 12) {
                $('.page-0' + _this.nowPage).removeClass('page-active');
            } else {
                $('.page-0' + _this.nowPage).removeClass('active');
                $('.page-0' + _this.nowPage).find('.model-content').html("");
            }
        },
        arrive: function () { // 进入下一个页面添加类
            var _this = this;
            if(_this.nowPage == 0 || _this.nowPage == 1 || _this.nowPage == 7 || _this.nowPage == 12) {
                $('.page-0' + _this.nowPage).addClass('page-active');
            } else {
                $('.page-0' + _this.nowPage).addClass('active');

                if(_this.nowPage >= 2 && _this.nowPage <= 6) {
                    $('.page-0' + _this.nowPage).find('.model-content').html(htmlModelOne);  
                } else {
                    $('.page-0' + _this.nowPage).find('.model-content').html(htmlModelTwo);  
                }

                _this.initAddLogo();
            }
        },  
        active: function () { // 绑定swipeUp swipeDown事件
            var _this = this;
            $('.wrapper .screen').on('swipeUp swipeDown',function (event) {
                var event = event || window.event;
                _this.leave();
                if(event.type == "swipeUp") {
                    _this.nowPage++;
                } else {
                    _this.nowPage--;
                }
                _this.page();
            });
        },
        page: function () { // 配置当前可视区域
            var _this = this;
            if (_this.nowPage < 0) {
                _this.nowPage = 0;
            } else if (_this.nowPage >= _this.length) {
                _this.nowPage = _this.length - 1;
            } else {
                _this.nowPage = _this.nowPage;
            }
            $('.wrapper .screen').css({
                "transform": " translate3d(0,-" +  (_this.nowPage * _this.height) + "px,0)",
                "-webkit-transform": " translate3d(0,-" +  (_this.nowPage * _this.height) + "px,0)"
            });
            _this.share();
            _this.arrive();
        }
    }  

    // 分享
    var UA = function() {
        var userAgent = navigator.userAgent.toLowerCase();
        return {
            ipad: /ipad/.test(userAgent),
            iphone: /iphone/.test(userAgent),
            android: /android/.test(userAgent),
            qqnews: /qqnews/.test(userAgent),
            weixin: /micromessenger/.test(userAgent),
            qqnews_version: userAgent.match(/qqnews/i) == "qqnews" ? userAgent.split('qqnews/')[1] : ''
        }
    };
    function shareQQNews() {
        var ua = UA();
        switch (true) {
            case ua.qqnews:
                if (window.TencentNews && window.TencentNews.setShareArticleInfo) {
                    window.TencentNews.setShareArticleInfo(shareData.title, shareData.desc, shareData.desc, shareData.link, shareData.img)
                }
                if (window.TencentNews && window.TencentNews.showShareMenu) {
                    window.TencentNews.showShareMenu(shareData.link, shareData.title, shareData.desc, shareData.img, "news_news_wc")
                } else {
                    window.TencentNews.shareFromWebView(shareData.title, shareData.desc, shareData.img)
                }
                break;
            case ua.weixin:
                var weixinLayout = document.querySelector(".weixin_layout");
                weixinLayout.style.display = "block";
                weixinLayout.addEventListener("tap", function() {
                    weixinLayout.style.display = "none"
                });
                break;
            default:
                window.location = "http://share.v.t.qq.com/index.php?c=share&a=index&appkey=801378464&url=" + shareData.link + "&title=" + shareData.desc + "&pic=" + shareData.img + "&des=" + shareData.title;
                break;
        }
    };
    function onBridgeReady() {
        WeixinJSBridge.on("menu:share:timeline", function(e) {
            var data = {
                img_width: "150",
                img_height: "112.5",
                img_url: shareData.img,
                link: shareData.link,
                desc: shareData.title,
                title: shareData.desc
            };
            WeixinJSBridge.invoke("shareTimeline", data, function(res) {
                WeixinJSBridge.log(res.err_msg)
            })
        });
        WeixinJSBridge.on("menu:share:weibo", function() {
            WeixinJSBridge.invoke("shareWeibo", {
                "content": shareData.desc,
                "url": shareData.link
            }, function(res) {
                WeixinJSBridge.log(res.err_msg)
            })
        });
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke("sendAppMessage", {
                img_width: "120",
                img_height: "120",
                img_url: shareData.img,
                link: shareData.link,
                desc: shareData.desc,
                title: shareData.title
            }, function(res) {
                WeixinJSBridge.log(res.err_msg)
            })
        })
    };
    document.addEventListener('WeixinJSBridgeReady', function() {
        onBridgeReady();
    });
    function androidQQNewsShare() {
        var head = document.getElementsByTagName('body')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'http://mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1';
        head.appendChild(script)
    }
    androidQQNewsShare();           
    $('.page .model-share').each(function () { // 每一页的分享按钮
        $(this).off().on('tap',function () {
            shareQQNews();
        })
    })   
})