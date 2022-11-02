console.log('试用-体验师-全部');
// 渲染数据

// 请求数据

var datalis = [];
var loadimg = document.getElementsByClassName('load')[0].children[0];
ajaxfn()
function ajaxfn() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
    ajax_.open('get', 'http://127.0.0.1:3000/useing/master', true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                datalis = data;
                show(datalis);
                loadimg.src = './../img/more.png'
            } else {
                console.log('请求失败');
            }
        }
    }
}
var str = '';
function show(a) {
    for (var item of a) {
        if (item.apply == undefined || item.totalnum == undefined || item.num == undefined) {
            item.apply = '1392';
            item.totalnum = '2032';
            item.num = '20'
        }
        item.info_ty = '体验师专享';
        // console.log(item.info_ty == undefined);
        str += `
            <div>
            <em class="sign">${item.info_ty}</em>
            <img src="${item.img}">
            <div class="describe">${item.text}</div>
            <div class="s_num">
                <span class='green'>${item.totalnum}</span>
                <span class='green'>${item.num}</span>
            </div>
            <div class="s_apply"><span>${item.apply}</span>申请</div>
            <div class="s_time green">查看试用名单</div>
        </div>
            `
    }
    var s_content = document.getElementsByClassName('s_content')[0];
    s_content.innerHTML = str;
}
// 体验师专享下边边框是绿色
var signlis = document.getElementsByClassName('sign');
for (var item of signlis) {
    // console.log(item);
    var spans = item.nextElementSibling.nextElementSibling.nextElementSibling.children;
    for (var item1 of spans) {
        // console.log(item1);
        item1.style.borderColor = '#80c269';
        item1.style.color = '#80c269';
    }
    var span1 = item.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    span1.style.color = '#80c269';
    span1.innerHTML = '查看试用名单'
}
// 点击加载更多
var load = document.getElementsByClassName('load')[0];
var flgg = true;

load.onclick = function () {
    loadimg.src = './../img/loading-icon.gif'
    if (flgg) {
        setTimeout(ajaxfn, 2000);
        flgg = false;
    } else {
    }
}


