// // 获取全部图片
// var pics = document.getElementsByClassName("pic");
// for (let item of pics) {
//     item.addEventListener("click", function () {
//         window.location.href = "../shop/shopProduct.html";
//     });
// }

// // 体检报告最新部分点赞
// var zans_1 = null;
// function zan_1() {
//     zans_1 = document.getElementsByClassName("zan");
// }
// zan_1();
// for (let i = 0; i < zans_1.length; i++) {
//     zans_1[i].setAttribute("index", 0);
//     zans_1[i].addEventListener("click", function () {
//         this.setAttribute("index", this.getAttribute("index") - 0 + 1);
//         if (this.getAttribute("index") % 2) {
//             this.style.backgroundImage = "Url(../img/use5.png)";
//             this.style.backgroundSize = "12px";
//             this.innerHTML = this.innerHTML - 0 + 1;
//         } else {
//             this.style.backgroundImage = "Url(../img/zan.png)";
//             this.style.backgroundSize = "12px";
//             this.innerHTML = this.innerHTML -= 1;
//         }
//     });
//     // 鼠标滑上去的时候 红心点量
//     zans_1[i].addEventListener("mouseenter", function () {
//         this.style.backgroundImage = "Url(../img/use5.png)";
//         this.style.backgroundSize = "12px";
//     });
//     // 鼠标滑走的时候判断是奇数次还是偶数次 奇数次变红 偶数次变灰
//     zans_1[i].addEventListener("mouseleave", function () {
//         if (this.getAttribute("index") % 2) {
//             this.style.backgroundImage = "Url(../img/use5.png)";
//             this.style.backgroundSize = "12px";
//         } else {
//             this.style.backgroundImage = "Url(../img/zan.png)";
//             this.style.backgroundSize = "12px";
//         }
//     });
//     zans_1 = document.getElementsByClassName("zan");
// }

// // 点击加载更多
// var More = document.getElementsByClassName('More')[0];
// var flgg = true;

// More.onclick = function () {
//     Moreimg.src = './../img/loading-icon.gif'
//     if (flgg) {
//         setTimeout(ajaxfn, 2000);
//         flgg = false;
//     } else {
//     }
// }

// window.onload = function () {
//     getData()
// }
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
                // console.log(dataList);
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
    // console.log(item);
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
        // console.log(item.img);
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

    // 点击跳转详情页
    // var s_contents = document.getElementsByClassName('s_content')[0].children;
    // for (var item1 of s_contents) {
    //     item1.onclick = function () {
    //         window.location.href = './tryDetail.html'
    //     }
    // }
}
// 点击加载更多
console.log(more);
var flgg = true;
more.onclick = function () {
    // console.log('11');

    // loadimg.src = './../img/loading-icon.gif'
    if (flgg) {
        setTimeout(getData, 2000);
        // flgg = false;
    }
}

