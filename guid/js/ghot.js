var dataList = [];
var img_more = document.getElementsByClassName('img_more')[0];
var on = document.getElementById('on')
function getData() {
  var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
  ajax_.open("get", "http://127.0.0.1:3000/guid/new");
  ajax_.send();
  ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
      if (ajax_.status == 200) {
        data = ajax_.responseText;
        dataList = JSON.parse(data);
        show();
        img_more.parentNode.removeChild(img_more);
        on.innerHTML = '数据加载完成~'
      } else {
        console.log("加载错误");
      }
    }
  };
}
var xinFlg = true;
function onclickImg(obj) {
  var xinnum = obj.previousElementSibling.innerHTML;
  if (xinFlg) {
    xinnum++;
    xinFlg = false;
    obj.src = '../img/xinRedh.png'
    obj.style.width = '12px'
  } else {
    xinnum--;
    xinFlg = true;
    obj.src = '../img/xinRedo.png'
    obj.style.width = '12px'
  }
  obj.previousElementSibling.innerHTML = xinnum;
}
var ul = document.getElementsByClassName('list')[0];
function show() {
  var str = "";
  for (var item of dataList) {
    str +=
      `
        <li>
        <a href="./gdetail.html">
        <img src="${item.img}" width="220" height="130"  />
        </a>
        <div class="font">
          <p>${item.text}</p>
          <span></span>
          <div class="font_bottom">
            <span class="left"></span>
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

  ul.innerHTML += str;

}
on.onclick = function () {
  img_more.src = '../img/loading-icon.gif'
  setTimeout(getData, 2000)

}
// 登陆成功用户名改变
var suc = window.localStorage.getItem("succeed");
var lo = document.getElementsByClassName('login')[0];


if (suc) {
  lo.innerHTML = window.localStorage.getItem("user")
  lo.style.borderColor = '#fff'
  lo.style.fontSize = '14px'
}
