window.onload=function(){
  var my$adClose=document.getElementById("ad_close");
  var my$adPic=document.getElementById("ad_pic");
  var my$jdList=document.getElementById("jd_list");
  var my$listMore=document.getElementById("list_more");
  // 获取所有li标签
  var my$lis = my$jdList.getElementsByTagName("li");
  // 获取list_con类名数组
  var my$listCon = my$listMore.getElementsByClassName("list_con");
    // 获取按钮
  var my$btnL=document.getElementById("btn_left");
  var my$btnR=document.getElementById("btn_right");
  // 获取当前图片所对的li下角标
  var my$jdBanner=document.getElementById("jd_banner");
  var my$jdBnrList=my$jdBanner.getElementsByTagName("li");
  // 获取当前图片下对应的小圆点
  var my$ballCon=document.getElementById("ball_con");
  var my$Ball=my$ballCon.getElementsByClassName("slider_con");
  var my$search = document.getElementById("search_rim");
  // 获取促销公告id
  var my$pcyL=document.getElementById("sale_news");
  var my$pcyR=document.getElementById("notice_news");
  // 移动红条
  var my$pcy=document.getElementById("pcy");
  // 获取促销公告列表信息
  var my$newsList=document.getElementById("news_list");
  var my$noticeList=document.getElementById("notice_list");
  // 滚动轮播图
  var my$roll=document.getElementById("roll_pic");
  var my$btnLeft=document.getElementById("btnLeft");
  var my$btnRight=document.getElementById("btnRight");
  // 滚动轮播  start------------------------
  my$btnRight.onclick=function(){
    var left=my$roll.offsetLeft;
    console.log(my$roll.offsetLeft);
      if(left<=1||left>=795){
        left=1;
      }
      clearInterval(timers);
      var timers=setInterval(function(){
        left+=10;
        if(left>=798){
          clearInterval(timers);
          my$roll.style.left=1+"px";
        }else{
          my$roll.style.left=-left+"px";
        }
        console.log(-left);
      },5);
    }
  // TODO:点击左键头  问题为解决
  my$btnLeft.onclick=function(){
    var left=my$roll.offsetLeft;
    console.log(my$roll.offsetLeft);
    clearInterval(timers);
    if(left>=1){
      left=-798;
    }
      var timers=setInterval(function(){
        left+=10;
        if(left>=1){
          clearInterval(timers);
          my$roll.style.left=-795+"px";
        }else{
          my$roll.style.left=left+"px";
        }
        console.log(my$roll.style.left);
      },5);
    }
      
    
  
  // 滚动轮播  end------------------------


  // TODO:top 广告  关闭   start--------------------
  my$adClose.onclick=function(){
    my$adPic.style.display="none";
  }
  // top 广告   关闭  end----------------------

  // TODO:广告栏右侧促销公告红条移动  start-------------
  my$pcyR.onmouseover=function(){
    my$pcy.className="active_pcy pcy_right";
    my$newsList.style.display="none";
    my$noticeList.style.display="block";
  }
  my$pcyL.onmouseover=function(){
    my$pcy.className="active_pcy pcy_left";
    my$newsList.style.display="block";
    my$noticeList.style.display="none";
  }
  // 广告栏右侧促销公告红条移动  end-------------

  // TODO:左侧菜单栏鼠标事件   start------------------
  // 循环遍历，添加鼠标事件
  for(var i=0;i<my$lis.length;i++){ 在鼠标进入之前将索引值保存在li中="" my$lis[i].setattribute("index",i);="" my$lis[i].onmouseover="function(){" my$listmore.style.display="block" ;="" var="" num="this.getAttribute(" index");"="" console.log(num);="" 把所有的li的样式设置为="" display="none" for(var="" j="0;j<my$listCon.length;j++){" my$listcon[j].style.display="none" }="" my$listcon[num].style.display="block" my$jdlist.onmouseleave="function(){" 左侧菜单栏鼠标事件="" end--------------------="" 显示方式为高度逐渐增加="" window.onscroll="function(){" heighty="window.pageYOffset||document.documentElement.scrollTop||document.body.scrolltop;" console.log(heighty);="" 左侧菜单栏="" 距顶部距离="" if(heighty="">=254){
      my$listMore.style.top=heightY-264+"px";
    }else{
      my$listMore.style.top="-10px";
    }
    
    // TODO:搜索框   当滚动条滚动到一定高度时  搜索框显示  start---------------
    if(heightY>=680){
      my$search.className="search_box box_after";
    }else{
      my$search.className="search_box";
    }
    // 搜索框    end  ---------------------------------
  }
  


  // TODO:banner 轮播图    start-------------------------
  // 自动轮播

  var timer=setInterval(function(){
    num();
    my$jdBanner.onmouseover=function(){
      clearInterval(timer);
    }
    my$jdBanner.onmouseout=function(){
      timer=setInterval(function(){
        num();
      },5000);
    }
  },5000);
  
  

  // 左侧按钮点击事件
  my$btnR.onclick=function (){
    num();
  }
  // 右侧按钮点击事件
  my$btnL.onclick=function(){
    var num,i;
    var o=1;
    for(i=0;i<my$jdbnrlist.length;i++){ var="" sty="cStyle(my$jdBnrList[i]," display");"="" if(sty="=" block"){"="" i-1<0?num="7:num=i-1;" }="" my$jdbnrlist[i].style.display="none" ;="" my$ball[i].style.border="5px solid transparent" my$ball[i].getelementsbytagname("i")[0].style.backgroundcolor="transparent" my$jdbnrlist[num].style.display="block" my$jdbnrlist[num].classname="banner_style" times="setInterval(function(){" clearinterval(times);="" if(o<10){="" o++;="" my$jdbnrlist[num].style.opacity="o/10;" console.log(o="" 10);="" }else{="" },100);="" my$ball[num].style.border="5px solid rgb(254, 254, 254,.3)" my$ball[num].getelementsbytagname("i")[0].style.backgroundcolor="#fff" 小广告图自动轮播。鼠标进入事件="" my$ad="document.getElementById(" ad");"="" my$cir1="document.getElementById(" cir1");"="" my$cir2="document.getElementById(" cir2");"="" timeid="setInterval(function(){" my$l="my$ad.offsetLeft;" num="0;" if(my$l<="-360){" my$ad.style.left="0px" console.log(my$l);="" timerid="setInterval(function(){" num+="10;" if(num<="180){" if(my$l<0){="" my$cir2.style.backgroundcolor="#c0c0c0" my$cir1.style.backgroundcolor="#e33333" clearinterval(timerid);="" },60)="" },5000);="" 获取外连css样式="" 浏览器兼容="" function="" cstyle="" (obj,str){="" if(obj.currentstyle){="" return(obj.currentstyle[str]);="" return(window.getcomputedstyle(obj,null)[str]);="" console.log(window.getcomputedstyle(obj,null)[str]);="" 自动轮播图张数轮动="" (){="" num,i;="" o="1;" for(i="0;i<my$jdBnrList.length;i++){" wsty="cStyle(my$jdBnrList[i]," if(wsty="=" i+1="">7?num=0:num=i+1;
      }
    my$jdBnrList[i].style.display="none";
    // my$jdBnrList[i].className="banner_begin";
    my$Ball[i].style.border="5px solid transparent";
    my$Ball[i].getElementsByTagName("i")[0].style.backgroundColor="transparent";
    }
    my$jdBnrList[num].style.display="block";
    my$jdBnrList[num].className="banner_begin banner_style";
    var times=setInterval(function(){
      // clearInterval(times);
      if(o</my$jdbnrlist.length;i++){></my$lis.length;i++){></=1||left>