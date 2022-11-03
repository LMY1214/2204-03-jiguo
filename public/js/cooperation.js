console.log('合作');
// 登陆成功用户名改变
var suc = window.localStorage.getItem("succeed");
var lo = document.getElementsByClassName('login')[0];
console.log(lo);

if (suc) {
    lo.innerHTML = window.localStorage.getItem("user")
    lo.style.borderColor = '#fff'
    lo.style.fontSize = '14px'
}
