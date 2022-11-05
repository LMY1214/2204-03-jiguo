console.log('登录');
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
        this.removeCookie(newArry[0]);
    }
}

var Tel = document.getElementsByClassName("Tel")[0];
var psw = document.getElementsByClassName("psw")[0];
var check = document.getElementById("check");
var btn = document.getElementById('btn');
// 记住密码 功能
window.addEventListener("load", function () {
    if (window.localStorage.getItem("check") == "true") {
        Tel.value = window.localStorage.getItem("tel");
        psw.value = window.localStorage.getItem("psw1");
        check.checked = window.localStorage.getItem("check");
    }
});
// 判断账号密码是否输入正确
// btn.addEventListener("click", function (){
btn.addEventListener("click", function () {
    var telLocalStorage = window.localStorage.getItem("tel");
    var pswLocalStorage = window.localStorage.getItem("psw");
    if (Tel.value == telLocalStorage &&
        psw.value == pswLocalStorage) {
        alert("登录成功");
        window.location.href = "../index.html"
        window.localStorage.setItem("check", check.checked);
        window.localStorage.setItem("succeed", true);
        window.localStorage.setItem('user', Tel.value)
        window.localStorage.setItem('登录', 'ture')

    } else {
        alert("用户名/密码输入错误");
        window.localStorage.setItem("succeed", false);
    }
});