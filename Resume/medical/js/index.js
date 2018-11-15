window.onload = function () {
    // 顶部点击
    var my$titleTop = document.getElementById("title_top");
    // 下拉列表按钮
    var my$whiteBtn = document.getElementById("title_white_box_btn");
    // 下拉列表
    var my$whiteList = document.getElementById("title_white_box_list");
    // 主图自动轮播
    var my$Banner = document.getElementById("banner");
    // 主图img
    var my$Banner_img=my$Banner.getElementsByTagName('img');
    // 主图个数
    var my$Banner_num=2;
    // 更多了解
    var my$more1 = document.getElementById("read_more1");
    var my$more2 = document.getElementById("read_more2");
    // 详情咨询
    var my$consult = document.getElementById("consult");
    // 轮播图左右箭头
    var my$doctor_left=document.getElementById("doctor_left");
    var my$doctor_right=document.getElementById("doctor_right");
    // 轮播图ul
    var my$doctor_ul=document.getElementById("doctor_ul");
    // 轮播图左右箭头
    var my$case_left=document.getElementById("case_left");
    var my$case_right=document.getElementById("case_right");
    // 轮播图ul
    var my$case_ul=document.getElementById("case_ul");
    // 轮播图点击次数
    var my$index=0;
    // .........................................................页头...............................................
    //点击事件
    my$titleTop.onclick = function () {
      window.open('login.html', '登录窗口');
    }
    // ....................................................白色区域................................................
    // 鼠标经过事件
    my$whiteBtn.onmouseover = function () {
      my$whiteList.style.display = "inline-block";
    }
    // 鼠标离开事件
    my$whiteBtn.onmouseout = function () {
      my$whiteList.style.display = "none";
    }
    // 更多了解点击事件   点击跳转页面
    my$more1.onclick = function () {
      window.open('read_more1.html', '海外试管费用');
    }
    my$more2.onclick = function () {
      window.open('read_more2.html', '美国试管婴儿成功率');
    }
    // 详情咨询  点击事件
    my$consult.onclick = function () {
      window.open('hello.html', '咨询');
    }
    // .................................................轮播图....................................................
    // 轮播图左右按钮点击事件
    my$doctor_left.onclick=function(){
      if(my$index>0){
        my$index--;
        console.log(my$index);
        animation(my$doctor_ul,-my$index*204);
      }
    }
    my$doctor_right.onclick=function(){
      if(my$index<my$doctor_ul.children.length-6){ my$index++;="" console.log(my$index);="" animation(my$doctor_ul,-my$index*204);="" }="" my$case_left.onclick="function(){" if(my$index="">0){
        my$index--;
        console.log(my$index);
        animation(my$case_ul,-my$index*264);
      }  
    }
    my$case_right.onclick=function(){
      if(my$index<my$case_ul.children.length-4){ 10="" my$index++;="" console.log(my$index);="" animation(my$case_ul,-my$index*264);="" }="" .................................................封装函数.....................................................="" 封装运动函数="" a为需要移动的元素="" b为要移动到的位置即元素终点位置距页面左侧的距离="" function="" animation(a,="" b)="" {="" clearinterval(a.timer);="" a.timer="setInterval(function" ()="" var="" current="a.offsetLeft;" step="current" <="" b="" ?="" :="" -10;="" current+="step;" if="" (math.abs(b-current)="">Math.abs(step)) {
          a.style.left = current + "px";
        } else {
          clearInterval(a.timer);
          a.style.left = b + "px";
        }
      }, 30)
    }
  }</my$case_ul.children.length-4){></my$doctor_ul.children.length-6){>