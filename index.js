console.log('首页');
var applying = document.getElementsByClassName('applying')[0];
var people = document.getElementsByClassName('people')[0];
var numLose = document.getElementsByClassName('numLose')[0];
var flg = true;
applying.onclick = function () {
    var numadd = people.innerHTML;
    if (flg == true) {
        numadd++;
    }
    people.innerHTML = numadd;
    var numlose = numLose.innerHTML;
    numlose--;

    if (numlose <= 0) {
        this.innerHTML = '申请已满';
        numlose = 0;
        this.style.color = '#a3a3a3';
        var numxaddend = numadd;
        flg = false;
        people.innerHTML = numxaddend;
    }
    numLose.innerHTML = numlose;
}
// 倒计时函数
// countDown()
setInterval(countDown, 1000)
function fn(a) {
    return a >= 10 ? a : '0' + a;
}
function countDown() {
    var nowTime = new Date();
    var goTime = new Date(2022, 11, 11);
    var mistimingTime = goTime - nowTime;
    var day1 = parseInt(mistimingTime / 1000 / 60 / 60 % 24);
    var day = fn(parseInt(mistimingTime / 1000 / 60 / 60 % 24));
    var sh1 = parseInt(mistimingTime / 1000 / 60 % 60);
    var sh = fn(parseInt(mistimingTime / 1000 / 60 % 60));
    var m1 = parseInt(mistimingTime / 1000 % 60);
    var m = fn(parseInt(mistimingTime / 1000 % 60));
    var str = day + '天' + sh + '小时' + m + '分钟';
    var time = document.getElementsByClassName('time')[0];
    time.innerHTML = str;
    if (day1 <= 0 && sh1 <= 0 && m1 <= 0) {
        var timebig = document.getElementsByClassName('timebig')[0];
        timebig.innerHTML = '申请已结束'
    }

}

// 点击返回顶部
var clickTop = document.getElementsByClassName('clickTop')[0];
var height;
var scrollHeight;
window.onscroll = function () {
    height = document.documentElement.clientHeight;
    scrollHeight = document.documentElement.scrollTop;
    if (scrollHeight >= height) {
        clickTop.style.display = 'block';
    } else {
        clickTop.style.display = 'none';

    }
}
clickTop.onclick = function () {
    var timer;
    timer = setInterval(function () {
        var top2 = document.documentElement.scrollTop;
        speed = (-top2 / 7);
        document.documentElement.scrollTop = top2 + speed;
        if (top2 == 0) {
            clearInterval(timer);
        }
    }, 20);
}
// // 点赞
// var r_praiselis = document.getElementsByClassName('r_praise');
// for (var item of r_praiselis) {
//     item.onclick = function () {
//         var praiseNum = this.innerHTML;
//         praiseNum++;
//         this.innerHTML = praiseNum;
//     }
// }
// var r_content = document.getElementsByClassName('hh')[0].children[0];
// console.log(r_content);
// 页面请求数据,底部加载页面函数
var load = document.getElementsByClassName('load')[0];
var datalis = [];
var loadimg = document.getElementsByClassName('load')[0].children[0];
var flggnum = 0;
ajaxfn()
function ajaxfn() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
    ajax_.open('get', 'http://127.0.0.1:3000/play/new', true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var datalis = JSON.parse(ajax_.responseText);
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
    for (var item of a[0]) {
        // console.log(item.img);
        str += `
 <li class='hs'>
 <img src="${item.img}" alt="">
 <span>${item.text}</span>
 <div class="circle"></div>
 <span class="r_name">苏苏</span>
 <span class="r_praise">${item.like}</span>
 <span class="r_comment">${item.words}</span>
</li>
            `
    }
    var r_content = document.getElementsByClassName('hh')[0].children[0];
    r_content.innerHTML = str;
    // 点击跳转详情页
    var lis = document.getElementsByClassName('hs');
    for (var item1 of lis) {
        var iteming = item1.children[0];
        iteming.onclick = function () {
            console.log(this);
            window.location.href = './try/tryDetail.html'
        }
    }
    // 点赞
    var r_praiselis = document.getElementsByClassName('r_praise');
    for (var item of r_praiselis) {
        var flgclick = true;
        item.onclick = function () {
            console.log('kk');
            var praiseNum = this.innerHTML;
            if (flgclick) {
                praiseNum++;
                flgclick = false;
            } else {
                praiseNum--;
                flgclick = true;
            }
            this.innerHTML = praiseNum;
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

