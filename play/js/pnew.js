window.onload = function () {
  getData()
}
var dataList = []
function getData() {
  var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
  ajax_.open("get", "http://127.0.0.1:3000/play/new");
  ajax_.send();
  ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
      if (ajax_.status == 200) {
        data = ajax_.responseText;
        dataList = JSON.parse(data);
        show();
      } else {
        console.log("加载错误");
      }
    }
  };
}


var ul = document.getElementsByClassName('list')[0]
var index = -1;
var flg = true
function show() {
  if (moreflg) {
    on.innerHTML = '数据加载完成~'
    img_more.parentNode.removeChild(img_more);

  }
  index += 2;
  var str = "";
  for (var i = 0; i <= index; i++) {
    if (index % 2 == 0) {
      break
    }
    for (var item of dataList[i]) {
      str +=
        `
        <li>
        <a href="../guid/gdetail.html">
        <img src="${item.img}" width="220" height="130" class="detail" />
        </a>
        <div class="font">
          <p>${item.text}</p>
          <span>${item.description}</span>
          <div class="font_bottom">
            <span class="left">${item.price}</span>
            <div class="right">
              <span class="xin">${item.like}</span>
              <img class="img1" src="../img/xin.png" alt="" onclick="onclickImg(this)" />
              <span class="look">${item.words}</span>
              <img class="img2" src="../img/reply.png" alt="" />
            </div>
          </div>
        </div>
         </li>
        `;
    }
  }
  ul.innerHTML = str;
  //点击爱心加减
  var xinFlg = true;
  var imglis = document.getElementsByClassName('img1');
  for (var item1 of imglis) {
    item1.onclick = function () {
      var xinnum = this.previousElementSibling.innerHTML;
      if (xinFlg) {
        xinnum++;
        xinFlg = false;
        this.src = '../img/xinRedh.png'
        this.style.width = '12px'
      } else {
        xinnum--;
        xinFlg = true;
        this.src = '../img/xinRedo.png'
        this.style.width = '12px'
      }
      this.previousElementSibling.innerHTML = xinnum
    }
  }
}
var ind = 0
var more = document.getElementsByClassName('more')[0]
var img_more = document.getElementsByClassName('img_more')[0]
var on = document.getElementById('on');
var moreflg = false;
on.onclick = function () {
  moreflg = true;
  img_more.src = '../img/loading-icon.gif'
  setTimeout(show, 2000)
  ind++

}

// 登陆成功用户名改变
var suc = window.localStorage.getItem("succeed");
var lo = document.getElementsByClassName('login')[0];


if (suc) {
  lo.innerHTML = window.localStorage.getItem("user")
  lo.style.borderColor = '#fff'
  lo.style.fontSize = '14px'
}


