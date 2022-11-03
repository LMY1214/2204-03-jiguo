// 注册页功能

var input_tel = document.getElementsByClassName("tel")[0];
var input_verify = document.getElementsByClassName("verify")[0];
var input_yz = document.getElementsByClassName("yanzheng")[0];
var btn_code = document.getElementsByClassName("code")[0];
var input_user = document.getElementsByClassName("user")[0];
var input_pws = document.getElementsByClassName("pws")[0];
var input_confirmPws = document.getElementsByClassName("confirmPws")[0];
var btn_ = document.getElementsByClassName("btn")[0];
var span_ = document.getElementsByTagName("span");

// 手机号验证功能
var telBool = false;
var reg_tel = /^1[3-9][0-9]{9}$/;
input_tel.addEventListener("focus", () => {
    span_[0].className = "";
    span_[0].innerHTML = "请输入11位手机号";
});
input_tel.addEventListener("blur", () => {
    var judge = reg_tel.test(input_tel.value);
    if (input_tel.value == "") {
        span_[0].innerHTML = "手机号不能为空";
    }
    if (input_tel.value == "") {
        span_[0].className = "error";
        span_[0].innerHTML = "手机号不能为空";
        telBool = false;
    } else if (!judge) {
        span_[0].className = "error";
        span_[0].innerHTML = "输入格式错误请重新输入";
        telBool = false;
    } else {
        span_[0].className = "correct";
        span_[0].innerHTML = "正确";
        telBool = true;
    }
});

// 图片效验码功能
var verifyBool = false;
var reg_verify = /[r]{1}[2]{1}[B]{1}[7]{1}/i;
input_verify.addEventListener("focus", () => {
    span_[1].className = "";
    span_[1].innerHTML = "请输入图片验证码";
});
input_verify.addEventListener("blur", () => {
    var yard = reg_verify.test(input_verify.value);
    if (input_verify.value == "") {
        span_[1].className = "error";
        span_[1].innerHTML = "图片验证码不能为空";
        verifyBool = false;
    } else if (yard) {
        span_[1].className = "correct";
        span_[1].innerHTML = "正确";
        verifyBool = true;
    } else {
        span_[1].className = "error";
        span_[1].innerHTML = "输入的图片验证码与图中不符";
        verifyBool = false;
    }
});

// 设置验证码倒计时
var countDown_yz = 60;
// 定时器
var timer_yz = null;
var index_yz = 0;
var diGit = [];
// 获取验证码功能
btn_code.addEventListener("click", () => {
    if (telBool) {
        if (btn_code) {
            // 当点击了之后禁选
            btn_code.setAttribute("disabled", "true");
            // 先清空一下
            clearInterval(timer_yz);
            timer_yz = setInterval(function () {
                countDown_yz--;
                btn_code.innerHTML = "( " + countDown_yz + " 秒 ) 重发";
                if (countDown_yz == 0) {
                    btn_code.innerHTML = "重新获取验证码";
                    clearInterval(timer_yz);
                    countDown_yz = 59;
                    btn_code.removeAttribute("disabled");
                }
                if (countDown_yz == 58) {
                    diGit = [];
                    // 设置随机验证码
                    for (let i = 1; i <= 4; i++) {
                        var number = Math.floor(Math.random() * 10);
                        diGit.push(number);
                    }
                    diGit = diGit.join("").slice(",");
                    alert(
                        `您注册的验证码为：${diGit}，请您尽快注册，请不要把验证码泄露给其他人，如非本人请勿操作！`
                    );
                }
            }, 1000);
        }
    } else {
        alert(`请先输入手机号`);
    }
});

// 数字验证码验证
var yzBool = false;
input_yz.addEventListener("focus", () => {
    span_[2].className = "";
    span_[2].innerHTML = "请输入获取的验证码";
});
input_yz.addEventListener("blur", () => {
    if (input_yz.value == "") {
        span_[2].className = "error";
        span_[2].innerHTML = "验证码不能为空";
        yzBool = false;
    } else if (input_yz.value == diGit) {
        span_[2].className = "correct";
        span_[2].innerHTML = "正确";
        yzBool = true;
    } else {
        span_[2].className = "error";
        span_[2].innerHTML = "验证码错误";
        yzBool = false;
    }
});

// 用户名验证
var userBool = false;
var reg_user = /^([\u4e00-\u9fa5]|\w){2,7}$/;
input_user.addEventListener("focus", () => {
    span_[3].className = "";
    span_[3].innerHTML = "由中文数字字母下划线组成2~7位";
});
input_user.addEventListener("blur", () => {
    var consumer = reg_user.test(input_user.value);
    if (input_user.value == "") {
        span_[3].className = "error";
        span_[3].innerHTML = "您的用户名不能为空";
        userBool = false;
    } else if (consumer) {
        span_[3].className = "correct";
        span_[3].innerHTML = "正确";
        userBool = true;
    } else {
        span_[3].className = "error";
        span_[3].innerHTML = "用户名输入格式错误";
        userBool = false;
    }
});

// 密码验证
var pwsBool = false;
var reg_pws = /^\d{6}$/;
input_pws.addEventListener("focus", () => {
    span_[4].className = "";
    span_[4].innerHTML = "密码为6位数字";
});
input_pws.addEventListener("blur", () => {
    var pass = reg_pws.test(input_pws.value);
    if (input_pws.value == "") {
        span_[4].className = "error";
        span_[4].innerHTML = "密码不能为空";
        pwsBool = false;
    } else if (pass) {
        span_[4].className = "correct";
        span_[4].innerHTML = "正确";
        pwsBool = true;
    } else {
        span_[4].className = "error";
        span_[4].innerHTML = "密码格式错误";
        pwsBool = false;
    }
    if (pass) {
        if (input_pws.value != input_confirmPws.value) {
            span_[5].className = "error";
            span_[5].innerHTML = "两次密码输入不一致";
            conBool = false;
        } else {
            span_[5].className = "correct";
            span_[5].innerHTML = "正确";
            conBool = true;
        }
    } else {
        span_[5].className = "error";
        span_[5].innerHTML = "输入错误";
        conBool = false;
    }
});

// 确认密码验证
var conBool = false;
input_confirmPws.addEventListener("focus", () => {
    span_[5].className = "";
    span_[5].innerHTML = "确认密码";
});
input_confirmPws.addEventListener("blur", () => {
    var pass = reg_pws.test(input_pws.value);
    if (input_confirmPws.value == "") {
        span_[5].className = "error";
        span_[5].innerHTML = "确认密码不能为空";
        conBool = false;
    }
    if (pass) {
        if (input_pws.value != input_confirmPws.value) {
            span_[5].className = "error";
            span_[5].innerHTML = "两次密码输入不一致";
            conBool = false;
        } else {
            span_[5].className = "correct";
            span_[5].innerHTML = "正确";
            conBool = true;
        }
    } else {
        span_[5].className = "error";
        span_[5].innerHTML = "确认密码输入错误";
        conBool = false;
    }
});

// 当点击立即注册时
btn_.onclick = function () {
    if (
        telBool == true &&
        verifyBool == true &&
        yzBool == true &&
        userBool == true &&
        pwsBool == true &&
        conBool == true
    ) {
        alert("注册成功");
        // 往 localStorage 存储 内容
        window.localStorage.setItem("tel", input_tel.value);
        window.localStorage.setItem("pwd", input_pws.value);
        window.localStorage.setItem("user", input_user.value);
        setTimeout(function () {
            // console.log('11');
            window.location.href = '../../login/login.html'
        }, 1000);
    } else {
        alert("注册失败");
    }
};
