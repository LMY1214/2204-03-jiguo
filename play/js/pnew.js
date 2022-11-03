window.onload=function(){
    getData()
}
var dataList=[]
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
  //点击跳转页面
//   function onclickHover(obj){
// // obj.href='http://127.0.0.1:5500/2204-03-jiguo/guid/gnew.html'
// obj.href='http://127.0.0.1:5500/2204-03-jiguo/guid/gnew.html'
//   }

  //点击爱心加减
// function  onclickImg(obj){
// var red='http://127.0.0.1:5500/2204-03-jiguo/img/xinRedh.png'
// var black='http://127.0.0.1:5500/2204-03-jiguo/img/xinRedo.png'
// var src=obj.src==red?black:red;
// obj.src=src;
// obj.style.width='13px'
// obj.style.hight='13px'
// if(obj.src==red){
//   obj.previousElementSibling.innerHTML++;
// }else{
//   obj.previousElementSibling.innerHTML--;
// }
//   }


  var ul=document.getElementsByClassName('list')[0]
  var index=-1;
  var flg=true
function show(){
  index+=2;
  var str = "";
  for(var i=0;i<=index;i++){
  if(index%2==0){
  break
    }
    for (var item of dataList[i]) {
        str +=
         `
        <li>
        <a  onclick="onclickHover(this)" >
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
      ul.innerHTML=str;
       // 点击跳转详情页
       var detail = document.getElementsByClassName('detail');
       for (var item1 of detail) {
           item1.onclick = function () {
               window.location.href = '../../guid/gdetail.html'
           }
       }
         //点击爱心加减
         var xinFlg=true;
         var imglis = document.getElementsByClassName('img1');
         for (var item1 of imglis) {
             item1.onclick = function () {
              var xinnum=this.previousElementSibling.innerHTML;
            if(xinFlg){
              xinnum++;
              xinFlg=false;
              this.src='../img/xinRedh.png'
              this.style.width='12px'
            }else{
              xinnum--;
              xinFlg=true;
              this.src='../img/xinRedo.png'
              this.style.width='12px'
            }
             this.previousElementSibling.innerHTML=xinnum
             }
         }
}
var ind=0
var more=document.getElementsByClassName('more')[0]
var img_more=document.getElementsByClassName('img_more')[0]
var on=document.getElementById('on')
on.onclick=function(){
  img_more.src='http://127.0.0.1:5500/2204-03-jiguo/img/loading-icon.gif'
  setTimeout(show,2000)
  ind++
  if(ind>=2){
    on.innerHTML='数据加载完成~'
    img_more.src='http://127.0.0.1:5500/2204-03-jiguo/img/more.png'
 
   }
 
}
// on.onclick = function () {
//   img_more.src = '../img/loading-icon.gif'
//   setTimeout(show, 2000)

// }
// window.onscroll = function () {
//   // 窗口高度
//   var winHeight =
//     document.documentElement.clientHeight || document.body.clientHeight;
//   //滚动条的高度  滚动出页面的高度
//   var scrollTop =
//     document.documentElement.scrollTop || document.body.scrollTop;
//   //页面的整体高度
//   var scrollH =
//     document.documentElement.scrollHeight || document.body.scrollHeight;
//   if (winHeight + scrollTop >= scrollH) {
 
//   }
// };


    
