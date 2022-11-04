// 登录功能

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
var loginTel = document.getElementsByClassName("loginTel")[0];
var conFirmPws = document.getElementsByClassName("conFirmPws")[0];
var check = document.getElementById("check");
var btn = document.getElementsByClassName("btn")[0];

// 记住密码 功能
window.addEventListener("load", function () {
    if (window.localStorage.getItem("check") == "true") {
        loginTel.value = window.localStorage.getItem("tel");
        conFirmPws.value = window.localStorage.getItem("pwd");
        check.checked = window.localStorage.getItem("check");
    }
});
// 判断账号密码是否输入正确
btn.addEventListener("click", function () {
    var telLocalStorage = window.localStorage.getItem("tel");
    var pwdLocalStorage = window.localStorage.getItem("pwd");
    if (loginTel.value == telLocalStorage &&
        conFirmPws.value == pwdLocalStorage) {
        alert("登录成功");
        window.location.href = "../index.html"
        window.localStorage.setItem("check", check.checked);
        window.localStorage.setItem("succeed", true);
        window.localStorage.setItem('user', loginTel.value)
        window.localStorage.setItem('登录', 'ture')

    } else {
        alert("用户名/密码输入错误");
        window.localStorage.setItem("succeed", false);
    }
});