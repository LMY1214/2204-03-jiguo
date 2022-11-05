// 注册页功能
var tel = document.getElementsByClassName('tel')[0];
var tuyan = document.getElementsByClassName('tuyan')[0];
var yan = document.getElementsByClassName("yan")[0];
var yzbtn = document.getElementsByClassName("yzbtn")[0];
var user = document.getElementsByClassName("user")[0];
var psw1 = document.getElementsByClassName('psw1')[0];
var psw2 = document.getElementsByClassName('psw2')[0];
var span = document.getElementsByTagName("span");
var btn = document.getElementById('btn');

// 手机号验证功能
var telBool = false;
tel.onfocus = function () {
    tel.style.display = 'inline block';
    span[0].className = "";
    span[0].innerHTML = "请输入11位手机号";
}

tel.onblur = function () {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (tel.value == '') {
        span[0].innerHTML = '不能为空';
        span[0].className = 'erro'
        telBool = false;
    } else if (!reg.test(tel.value)) {
        tel.innerHTML = '格式不对，请重新输入'
        span[0].className = 'erro'
        telBool = false;
    } else {
        span[0].innerHTML = '正确'
        span[0].className = 'true'
        telBool = true;
    }
}



// 图片效验码功能
var tuyanBool = false;
tuyan.onfocus = function () {
    tuyan.style.display = 'inline block';
    span[1].className = "";
    span[1].innerHTML = "请输入图片验证码";
}
tuyan.onblur = function () {
    var reg_tuyan = /[r]{1}[2]{1}[B]{1}[7]{1}/i;
    var yard = reg_tuyan.test(tuyan.value);
    if (tuyan.value == "") {
        span[1].className = "erro";
        span[1].innerHTML = "图片验证码不能为空";
        tuyanBool = false;
    } else if (yard) {
        span[1].className = "true";
        span[1].innerHTML = "正确";
        tuyanBool = true;
    } else {
        span[1].className = "erro";
        span[1].innerHTML = "输入的图片验证码与图中不符";
        tuyanBool = false;

    }
}

// 设置验证码倒计时
var timer = null;
// 获取四位随机数
var num = 0;
// var time = 60;
// 验证码输入框
var yan = document.getElementsByClassName('yan')[0];
// 验证码按钮
var yzbtn = document.getElementsByClassName('yzbtn')[0];

yzbtn.onclick = function () {
    var time = 60;
    yan.value = '';
    yzbtn.innerHTML = "( " + time + " 秒 ) 重发"
    yzbtn.style.backgroundColor = '#fff';
    yzbtn.style.color = '#57565f';
    var time = 60;
    timer = setInterval(function () {
        time--;
        yzbtn.innerHTML = "( " + time + " 秒 ) 重发"
    }, 1000)
    if (time == 0) {
        yzbtn.innerHTML = "重新获取验证码";
        clearInterval(timer);
        time = 59;
        yzbtn.removeAttribute("disabled");
    }
    setTimeout(function () {
        num = Math.ceil(Math.random() * 10000);
        if (num < 1000) {
            num = num + '0';
        }
        alert('【极果】欢迎注册极果！验证码为' + num + '，为保障账户安全，请勿泄露给他人')
        clearInterval(timer);
        yzbtn.innerHTML = '重新获取验证码'
    }, 3000)
}
yan.onblur = function () {
    if (yan.value != num) {
        span[2].innerHTML = '验证码不正确';
        span[2].className = 'erro'
    } else {
        span[2].innerHTML = '正确;'
        span[2].className = 'true'
        span[2].innerHTML = '获取验证码'
        span[2].style.backgroundColor = '#57565f';
        span[2].style.color = '#fff';
    }
}

// 数字验证码验证
var yanBool = false;
yan.onfocus = function () {
    span[2].className = "";
    span[2].innerHTML = "请输入获取的验证码";
}
yan.onblur = function () {
    if (yan.value != num) {
        span[2].innerHTML = '验证码不正确';
        span[2].className = 'erro'
        yanBool = false;
    } else {
        span[2].innerHTML = '正确'
        span[2].className = 'true'
        yanBool = true;
        // yzbtn.innerHTML = '获取验证码'
        // yzbtn.style.backgroundColor = '#57565f';
        // yzbtn.style.color = '#fff';
    }
}

// 用户名验证
var userBool = false;
user.onfocus = function () {
    span[3].className = "";
    span[3].innerHTML = "由中文数字字母下划线组成2~7位";
}
user.onblur = function () {
    var reg_user = /^([\u4e00-\u9fa5]|\w){2,7}$/;
    var consumer = reg_user.test(user.value);
    if (user.value == "") {
        span[3].className = "erro";
        span[3].innerHTML = "您的用户名不能为空";
        userBool = false;
    } else if (consumer) {
        span[3].className = "true";
        span[3].innerHTML = "正确";
        userBool = true;
    } else {
        span[3].className = "erro";
        span[3].innerHTML = "用户名输入格式错误";
        userBool = false;
    }
}

// 密码验证
var psw1Bool = false;
psw1.onblur = function () {
    var reg = /^\w{6,8}$/;
    var reg1 = /[^0-9]/;
    var reg2 = /[^a-zA-Z]/;
    // console.log(reg.test(psw1.value));
    if (psw1.value == '') {
        span[4].innerHTML = '不能为空';
        span[4].className = 'erro'
        psw1Bool = false;
    } else if (!reg.test(psw1.value)) {
        span[4].innerHTML = '最少6位，最多8位'
        span[4].className = 'erro'
        psw1Bool = false;
    } else if (!reg1.test(psw1.value)) {
        span[4].innerHTML = '不能全是数字';
        span[4].className = 'erro'
        psw1Bool = false;
    } else if (!reg2.test(psw1.value)) {
        span[4].innerHTML = '不能全是字母';
        span[4].className = 'erro'
        psw1Bool = false;
    }
    else {
        span[4].innerHTML = '正确'
        span[4].className = 'true'
        psw1Bool = true;
    }
}

// 确认密码验证
var psw2Bool = false;
psw2.onblur = function () {
    var reg = /^\w{6,8}$/;
    if (psw2.value == '') {
        span[5].innerHTML = '不能为空';
        span[5].className = 'erro'
    } else if (!reg.test(psw2.value)) {
        span[5].innerHTML = '最少6位，最多8位'
        span[5].className = 'erro'
        psw2Bool = false;
    } else if (psw2.value != psw1.value) {
        span[5].innerHTML = '两次密码输入不一致'
        span[5].className = 'erro'
        psw2Bool = false;
    } else {
        span[5].innerHTML = '正确'
        span[5].className = 'true'
        psw2Bool = true;

    }
}

// 当点击立即注册时
btn.onclick = function () {
    if (telBool == true && tuyanBool == true && yanBool == true && userBool == true && psw1Bool == true && psw2Bool == true) {
        alert("注册成功");
        // 往 localStorage 存储 内容
        window.localStorage.setItem("tel", tel.value);
        window.localStorage.setItem("psw", psw1.value);
        window.localStorage.setItem("user", user.value);
        setTimeout(function () {
            // console.log('ll');
            window.location.href = '../login/login.html'
        }, 1000);
    } else {
        alert("注册失败");
    }

}





