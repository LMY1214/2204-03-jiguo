var more = document.getElementById('report-btn');
var dataList = []
function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    ajax_.open("get", "http://127.0.0.1:3000/report/new");
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                data = ajax_.responseText;
                dataList = JSON.parse(data);
                show(dataList);
            } else {
                console.log("加载错误");
            }
        }
    };
}
//点赞
var zan = document.getElementsByClassName('zan');

var zanflg = true;
for (var item of zan) {
    item.onclick = function () {
        var zannum = this.innerHTML;

        if (zanflg) {
            zannum++;
            zanflg = false;
        } else {
            zannum--;
            zanflg = true;
        }
        this.innerHTML = zannum;
    }
}

var body = document.getElementsByTagName('body')[0];
var ul = document.createElement('ul');
var box1 = document.getElementsByClassName('listinfo')[0];
// ul.className = "list";
ul.setAttribute('id', 'list')
box1.appendChild(ul);

function show(a) {
    var str = '';
    for (var item of a) {
        str += ` 
      <li>
        <a href="javaScript:;">
            <img src="${item.img}" width="700" height="412" />
            <div class="info">
                <p class="title">${item.text}</p>
                <div class="btm">
                    <div class="userInfo left">
                  <span class="avt"></span>
                  <span class="name">${item.uName}</span>
                  <span class="time">2016-01-25</span>
                    </div>
                    <div class="right icon">
                       <span class="zan">3</span>
                       <span class="look">3</span>
                    </div>
                </div>
            </div>
        </a>
    </li>
    `

        list.innerHTML = str;
    }
}
// 点击加载更多
var flgg = true;
more.onclick = function () {
    if (flgg) {
        setTimeout(getData, 2000);
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

