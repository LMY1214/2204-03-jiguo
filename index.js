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
    var sh = parseInt(mistimingTime / 1000 / 60 % 60);
    var sh = fn(parseInt(mistimingTime / 1000 / 60 % 60));
    var m1 = parseInt(mistimingTime / 1000 % 60);
    var m = fn(parseInt(mistimingTime / 1000 % 60));
    var str = day + '天' + sh + '小时' + m + '分钟';
    var time = document.getElementsByClassName('time')[0];
    time.innerHTML = str;
    if (day1 <= 0 && sh1 <= 0 && m1 <= 0 && s1 <= 0) {
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

// 登录成功后 注册变用户名
// - setCookie()——创建Cookie

function setCookie(key, val, time) {
    var date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = `${key}=${val};expires=${date}`;
}


// - getCookie()——获取Cookie
function getCookie(key) {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        if (newArry[0] == key) {
            return newArry[1]
        }
    }
}
// - removeCookie()——删除Cookie
function removeCookie(key_) {
    this.setCookie(key_, '', -1);
}


// 清空cookie
function clearCookie() {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        console.log(newArry[0]);
        this.removeCookie(newArry[0]);
    }
}
// setCookie('登录1', '11')
// console.log(getCookie('登录'));
var tel = getCookie(user);
if (tel == 'loginTel.value') {

}



