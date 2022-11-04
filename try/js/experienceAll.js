/*试用下边四个html都引用的这个js */
var first = document.getElementsByClassName('first')[0];
var spans = first.children[0].children;
var second = document.getElementsByClassName('second')[0];
var spans1 = second.children[0].children;
for (var i = 0; i < spans.length; i++) {
    spans[i].setAttribute('index', i)
}
for (var j = 0; j < spans1.length; j++) {
    spans1[j].setAttribute('index1', j)
}
var index_ = '0';
var index1_ = '0';
// 一级标题点击变红
for (var item of spans) {
    item.onclick = function () {
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = ''
        }
        index_ = this.getAttribute('index')
        this.className = 'on';
        jump()
    }
}
// 二级标题点击变黑
for (var item1 of spans1) {
    // var flg1 = item1.className != '';
    item1.onclick = function () {
        for (var j = 0; j < spans1.length; j++) {
            spans1[j].className = ''
        }
        index1_ = this.getAttribute('index1')
        this.className = 'on1'
        jump()
    }
}

function jump() {

    if (index_ == 0 && index1_ == 0) {
        window.location.href = '././publicAll.html';

    } else if (index_ == 0 && index1_ == 1) {
        window.location.href = '././publicApplying.html';

    } else if (index_ == 0 && index1_ == 2) {
        window.location.href = '././publicFeel.html';

    } else if (index_ == 0 && index1_ == 3) {
        window.location.href = '././publicEnd.html';

    } else if (index_ == 1 && index1_ == 0) {
        window.location.href = '././experienceAll.html';

    } else if (index_ == 1 && index1_ == 1) {
        window.location.href = '././experienceApplying.html';

    } else if (index_ == 1 && index1_ == 2) {
        window.location.href = '././experienceFeel.html';

    } else if (index_ == 1 && index1_ == 3) {
        window.location.href = '././experienceEnd.html';
    }
}

// 试用页面请求数据,底部加载页面函数
tryLoading('http://127.0.0.1:3000/useing/master');
function tryLoading(address) {
    var load = document.getElementsByClassName('load')[0];
    var datalis = [];
    var loadimg = document.getElementsByClassName('load')[0].children[0];
    var flggnum = 0;
    ajaxfn()
    function ajaxfn() {
        var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
        ajax_.open('get', address, true);
        ajax_.send();
        ajax_.onreadystatechange = function () {
            if (ajax_.readyState == 4) {
                if (ajax_.status == 200) {
                    var data = JSON.parse(ajax_.responseText);
                    datalis = data;
                    show(datalis);
                    loadimg.src = './../img/more.png';
                    flggnum++;
                    if (flggnum == 2) {
                        load.innerHTML = '没有更多了~'
                    }
                } else {
                    console.log('请求失败');
                }
            }
        }
    }
    var str = '';
    function show(a) {
        for (var item of a) {
            if (item.info_ty == undefined || item.apply == undefined || item.totalnum == undefined || item.num == undefined) {
                item.info_ty = '首发';
                item.apply = '1392';
                item.totalnum = '2032';
                item.num = '20'
            }
            if (item.info_ty == '首发') {
                str += `
            <div>
            <em class="hrcplor">${item.info_ty}</em>
            <img src="${item.img}">
            <div class="describe">${item.text}</div>
            <div class="s_num">
                <span>${item.totalnum}</span>
                <span>${item.num}</span>
            </div>
            <div class="s_apply"><span>${item.apply}</span>申请</div>
            <div class="s_time">剩余2天</div>
        </div>
            `
            } else {
                str += `
            <div>
            <em class="sign">${item.info_ty}</em>
            <img src="${item.img}">
            <div class="describe">${item.text}</div>
            <div class="s_num">
                <span>${item.totalnum}</span>
                <span>${item.num}</span>
            </div>
            <div class="s_apply"><span>${item.apply}</span>申请</div>
            <div class="s_time">剩余2天</div>
        </div>
            `
            }

        }
        var s_content = document.getElementsByClassName('s_content')[0];
        s_content.innerHTML = str;
        // 体验师专享下边边框是绿色
        var signlis = document.getElementsByClassName('sign');
        for (var item of signlis) {
            var spans = item.nextElementSibling.nextElementSibling.nextElementSibling.children;
            for (var item1 of spans) {
                item1.style.borderColor = '#80c269';
                item1.style.color = '#80c269';
            }
            var span1 = item.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
            span1.style.color = '#80c269';
            span1.innerHTML = '查看试用名单'
        }
        // 点击跳转详情页
        var s_contents = document.getElementsByClassName('s_content')[0].children;
        for (var item1 of s_contents) {
            item1.onclick = function () {
                window.location.href = './tryDetail.html'
            }
        }
    }
    // // // 首发下边边框改变颜色
    var hrlis = document.getElementsByClassName('hrcplor');
    for (var item of hrlis) {
        var spans = item.nextElementSibling.nextElementSibling.nextElementSibling.children;
        for (var i in hrlis) {
            var spans = hrlis[i].nextElementSibling.nextElementSibling.nextElementSibling.children;
            if (i % 3 == 0) {
                for (var item1 of spans) {
                    item1.style.borderColor = '#cccccc';
                    item1.style.color = '#cccccc';
                }
                var span1 = hrlis[i].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
                span1.style.color = '#cccccc';
                span1.innerHTML = '查看试用名单'
            }
        }
    }

    // 点击加载更多
    var flgg = true;
    load.onclick = function () {
        loadimg.src = './../img/loading-icon.gif'
        if (flgg) {
            setTimeout(ajaxfn, 2000);
            flgg = false;
        }
    }
}
// 登陆成功用户名改变
var suc = window.localStorage.getItem("succeed");
var lo = document.getElementsByClassName('login')[0];

if (suc) {
    lo.innerHTML = window.localStorage.getItem("user")
    lo.style.borderColor = '#fff'
    lo.style.fontSize = '14px'
}
