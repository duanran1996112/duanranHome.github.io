$(document).ready(function () {
    // 取消默认事件
    document.addEventListener('touchmove',function (event) {
        var event = event || window.event;
        event.preventDefault();
    }, false);

    // 分享语
    var shareConfig = [
        {
            title: "较真发布：三月10大食药谣言盘点",
            desc: "面条洗出“胶”、米饭赛砒霜？较真三月10大食药谣言盘点",
            img: "http://home.duanran96.com/march/images/share-logo.jpg"
        },
        {
            title: '三月食药谣言NO.1：“耐撕”紫菜是塑料袋做的',
            desc: '干紫菜这么耐撕，竟是塑料袋做的？别信！|较真发布',
            img: 'http://home.duanran96.com/march/images/share-01.jpg'
        },
        {
            title: '三月食药谣言NO.2：吃大盘鸡会感染H7N9死亡',
            desc: '吃大盘鸡得禽流感？老谣言又翻新，烧透的食物放心吃。|较真发布',
            img: 'http://home.duanran96.com/march/images/share-02.jpg'
        },
        {
            title: '三月食药谣言NO.3：疫苗有毒，应该远离疫苗',
            desc: '为了孩子请远离疫苗？害人谣言，疫苗益处远大于风险。|较真发布',
            img: 'http://home.duanran96.com/march/images/share-03.jpg'
        },
        {
            title: '三月食药谣言NO.4：易燃粉丝是塑料制成的',
            desc: '易燃粉丝是塑料做的？主要成分有淀粉，易燃没毛病。|较真发布',
            img: 'http://home.duanran96.com/march/images/share-04.jpg'
        },
        {
            title: '三月食药谣言NO.5：巧克力含矿物油吃了会致癌',
            desc: '巧克力含致癌矿物油？测评存在问题，“过量”危言耸听。|较真发布',
            img: 'http://home.duanran96.com/march/images/share-05.jpg'
        },
        {
            title: '三月食药谣言NO.6：中国的煮饭方法会吃进砒霜',
            desc: '中国的煮饭方法会吃进砒霜？过度渲染，不必担心。|较真发布',
            img: 'http://home.duanran96.com/march/images/share-06.jpg'
        },
        {
            title: '三月食药谣言NO.7：柑橘橙的甜是打了甜蜜素',
            desc: '柑橘橙的甜靠打药？以讹传讹，现实里可操作性差。|较真发布',
            img: 'http://home.duanran96.com/march/images/share-07.jpg'
        },
        {
            title: '三月食药谣言NO.8：草莓又大又甜靠“打药”',
            desc: '草莓又大又甜靠“打药”？以讹传讹，现实里操作风险大。|较真发布',
            img: 'http://home.duanran96.com/march/images/share-08.jpg'
        },
        {
            title: '三月食药谣言NO.9：面条洗出“胶”，不能吃',
            desc: '面条洗出“胶”不能吃？别担心，胶状物其实只是面筋。|较真发布',
            img: 'http://home.duanran96.com/march/images/share-09.jpg'
        },
        {
            title: '三月食药谣言NO.10：啤酒中含“多菌灵”会致癌',
            desc: '啤酒含多菌灵会致癌？老谣新炒，而且还假借权威报道的名头。|较真发布',
            img: 'http://home.duanran96.com/march/images/share-10.jpg'
        },
        {
            title: "较真发布：三月10大食药谣言盘点",
            desc: "面条洗出“胶”、米饭赛砒霜？较真三月10大食药谣言盘点",
            img: "http://home.duanran96.com/march/images/share-logo.jpg"
        }
    ]; 
    var shareData = {
        title: "较真发布：三月10大食药谣言盘点",
        desc: "面条洗出“胶”、米饭赛砒霜？较真三月10大食药谣言盘点",
        img: "http://home.duanran96.com/march/images/share-logo.jpg",
        link: window.location.href
    };

    //图片预加载
    var picArr = [
        'http://home.duanran96.com/march/images/loading-icon.png',
        'http://home.duanran96.com/march/images/loading-word.png',
        'http://home.duanran96.com/march/images/page-message.png',
        'http://home.duanran96.com/march/images/m-a-1.png',
        'http://home.duanran96.com/march/images/m-a-2.png',
        'http://home.duanran96.com/march/images/m-a-3.png',
        'http://home.duanran96.com/march/images/m-a-4.png',
        'http://home.duanran96.com/march/images/m-a-5.png',
        'http://home.duanran96.com/march/images/m-a-6.png',
        'http://home.duanran96.com/march/images/m-a-7.png',
        'http://home.duanran96.com/march/images/m-a-8.png',
        'http://home.duanran96.com/march/images/m-a-9.png',
        'http://home.duanran96.com/march/images/m-a-10.png',
        'http://home.duanran96.com/march/images/m-d-1.png',
        'http://home.duanran96.com/march/images/m-d-2.png',
        'http://home.duanran96.com/march/images/m-d-3.png',
        'http://home.duanran96.com/march/images/m-d-4.png',
        'http://home.duanran96.com/march/images/m-d-5.png',
        'http://home.duanran96.com/march/images/m-d-6.png',
        'http://home.duanran96.com/march/images/m-d-7.png',
        'http://home.duanran96.com/march/images/m-d-8.png',
        'http://home.duanran96.com/march/images/m-d-9.png',
        'http://home.duanran96.com/march/images/m-d-10.png',
        'http://home.duanran96.com/march/images/m-h-1.png',
        'http://home.duanran96.com/march/images/m-h-2.png',
        'http://home.duanran96.com/march/images/m-h-3.png',
        'http://home.duanran96.com/march/images/m-h-3.png',
        'http://home.duanran96.com/march/images/m-h-4.png',
        'http://home.duanran96.com/march/images/m-h-5.png',
        'http://home.duanran96.com/march/images/m-h-6.png',
        'http://home.duanran96.com/march/images/m-h-7.png',
        'http://home.duanran96.com/march/images/m-h-8.png',
        'http://home.duanran96.com/march/images/m-h-9.png',
        'http://home.duanran96.com/march/images/m-h-10.png',
        'http://home.duanran96.com/march/images/m-l.png',
        'http://home.duanran96.com/march/images/m-p-1.png',
        'http://home.duanran96.com/march/images/m-p-2.png',
        'http://home.duanran96.com/march/images/m-p-3.png',
        'http://home.duanran96.com/march/images/m-p-4.png',
        'http://home.duanran96.com/march/images/m-p-5.png',
        'http://home.duanran96.com/march/images/m-p-6.png',
        'http://home.duanran96.com/march/images/m-p-7.png',
        'http://home.duanran96.com/march/images/m-p-8.png',
        'http://home.duanran96.com/march/images/m-p-9.png',
        'http://home.duanran96.com/march/images/m-p-10.png',
        'http://home.duanran96.com/march/images/m-s-1.png',
        'http://home.duanran96.com/march/images/m-s-2.png',
        'http://home.duanran96.com/march/images/m-s-3.png',
        'http://home.duanran96.com/march/images/m-s-4.png',
        'http://home.duanran96.com/march/images/m-s-5.png',
        'http://home.duanran96.com/march/images/m-s-6.png',
        'http://home.duanran96.com/march/images/m-s-7.png',
        'http://home.duanran96.com/march/images/m-s-8.png',
        'http://home.duanran96.com/march/images/m-s-9.png',
        'http://home.duanran96.com/march/images/m-s-10.png',
        'http://home.duanran96.com/march/images/m-t-1.png',
        'http://home.duanran96.com/march/images/m-t-2.png',
        'http://home.duanran96.com/march/images/m-t-3.png',
        'http://home.duanran96.com/march/images/m-t-4.png',
        'http://home.duanran96.com/march/images/m-t-5.png',
        'http://home.duanran96.com/march/images/m-t-6.png',
        'http://home.duanran96.com/march/images/m-t-7.png',
        'http://home.duanran96.com/march/images/m-t-8.png',
        'http://home.duanran96.com/march/images/m-t-9.png',
        'http://home.duanran96.com/march/images/m-t-10.png',
        'http://home.duanran96.com/march/images/swipe.png',
        'http://home.duanran96.com/march/images/page-teach.png',
        'http://home.duanran96.com/march/images/page-more.png',
        'http://home.duanran96.com/march/images/page-news.png',
        'http://home.duanran96.com/march/images/share-01.jpg',
        'http://home.duanran96.com/march/images/share-02.jpg',
        'http://home.duanran96.com/march/images/share-03.jpg',
        'http://home.duanran96.com/march/images/share-04.jpg',
        'http://home.duanran96.com/march/images/share-05.jpg',
        'http://home.duanran96.com/march/images/share-06.jpg',
        'http://home.duanran96.com/march/images/share-07.jpg',
        'http://home.duanran96.com/march/images/share-08.jpg',
        'http://home.duanran96.com/march/images/share-09.jpg',
        'http://home.duanran96.com/march/images/share-10.jpg',
        'http://home.duanran96.com/march/images/share-logo.jpg',
        'http://home.duanran96.com/march/images/share-bg.png'
    ];
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

    // 页面内容
    var html = '';
    html += '<div class="model-title"></div>';
    html += '<div class="model-harm"></div>';
    html += '<div class="model-lie"></div>';
    html += '<div class="model-pic"></div>';
    html += '<div class="model-appraisal"></div>';
    html += '<div class="model-degree"></div>';
    html += '<div class="model-swipe"></div>'
    

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
            this.initDomLogo();
            this.resize();
            this.active();
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
            })
            var pageTeachCount = countRect({
                printHeight: 1206,
                printWidth: 750,    
                height: 97,
                width: 553,
                top: 430
            });
            var shareCount = countRect({
                printHeight: 1206,
                printWidth: 750,
                height: 88,
                width: 88,
                right: 94,
                bottom: 101
            });
            $('.wrapper .screen .page .model-share').css({
                "width": shareCount.width + '%',
                "padding-top": shareCount.padding_top + '%',
                "right": shareCount.right + '%',
                "bottom": shareCount.bottom  + '%'              
            });
            $('.page .page-teach').css({
                "width": pageTeachCount.width + '%',
                "padding-top": pageTeachCount.padding_top + '%',
                "top": pageTeachCount.top + '%'
            });
            var pageMoreCount = countRect({
                printHeight: 1206,
                printWidth: 750,    
                height: 97,
                width: 553,
                top: 547
            });                    
            $('.page .page-more').css({
                "width": pageMoreCount.width + '%',
                "padding-top": pageMoreCount.padding_top + '%',
                "top": pageMoreCount.top + '%'
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
            })
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
                loadCount();
            })
        },
        leave: function () {
            var _this = this;
            if(_this.nowPage == 0 || _this.nowPage == 11) {
                $('.page-0' + _this.nowPage).removeClass('page-active');
            }
            else {
                $('.page-0' + _this.nowPage).find('.model-content').html("");
                $('.page-0' + _this.nowPage).removeClass('active');
            }
        },
        arrive: function () {
            var _this = this;
            if(_this.nowPage == 0 || _this.nowPage == 11) {
                $('.page-0' + _this.nowPage).addClass('page-active');
            }
            else {  
                $('.page-0' + _this.nowPage).find('.model-content').html(html);                      
                $('.page-0' + _this.nowPage).addClass('active');
                _this.initAddLogo();
            }
        },
        share: function () {
            var _this = this;
            shareData.title = shareConfig[_this.nowPage].title; 
            shareData.desc = shareConfig[_this.nowPage].desc; 
            shareData.img = shareConfig[_this.nowPage].img;
        },
        active: function () { // 绑定swipeUp swwipeDown事件
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