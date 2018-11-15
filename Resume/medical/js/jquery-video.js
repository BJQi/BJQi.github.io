/*
  思路:
    1.加载效果,总时长显示
    2.播放功能/暂停功能
    3.播放中,进度条显示,当前播放时间的显示
    4.全屏和取消全屏
    5.跃进功能
    6.播放完毕,重置功能
*/

$(function () {
  // 获取余姚操作的元素
  var $video = $('video');
  // api属于原生dom元素   jquery转dom对象 [0]或get(0)   dom对象转jquery对象 $()
  var video = $video.get(0);
  var $total = $('.total');
  var $switch = $('.switch');
  var $line = $('.line');
  var $current = $('.current');
  var $expand = $('.expand');
  var $bar = $('.bar');
  var formatTime = function (time) { //时间格式化
    // 格式:  01:02:20 
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 60);
    h = h >= 10 ? h : "0" + h;
    m = m >= 10 ? m : "0" + m;
    s = s >= 10 ? s : "0" + s;
    return h + ":" + m + ":" + s;
  }
  //1. 加载效果(当视频可以播放时,显示视频)
  video.oncanplay = function () { //oncanplay属于js原生方法 当浏览器可播放视频或音频时
    $video.show();
    // console.log(video.duration);   video.duration 获取视频总时长
    $total.html(formatTime(video.duration))
  }
  // 2.播放/暂停
  $switch.on('click', function () {
    if ($switch.hasClass('fa-play')) {
      // 播放   video.play  js原生播放方法
      video.play();
      // 暂停 按钮  
      $switch.removeClass('fa-play').addClass('fa-pause');
    } else {
      // 暂停
      video.pause();
      // 播放  按钮
      $switch.removeClass('fa-pause').addClass('fa-play');
    }
  })
  // 3.播放时间的显示  获取当前播放时间的时间点
  // .ontimeupdate原生dom方法
  video.ontimeupdate = function () {
    // console.log(video.currentTime);//.currentTime原生dom属性 获取当前播放时间
    // 当前播放时间
    $current.html(formatTime(video.currentTime));
    // 进度条显示   通过长度  百分比
    var ratio = video.currentTime / video.duration;
    var p = ratio * 100 + '%';
    $line.css('width', p);
  }
  // 全屏/取消全屏
  $expand.on('click', function () {
    if ($expand.hasClass('fa-expand')) {
      //全屏操作
      video.webkitRequestFullScreen();
      // 改按钮  取消全屏
      $expand.removeClass('fa-expand').addClass('fa-compress');
    } else {
      // 取消全屏
      document.webkitCancelFullScreen();
      // 改按钮  全屏
      $expand.removeClass('fa-compress').addClass('fa-expand');
    }
  })
  // 跃进功能
  $bar.on('click', function (e) {
    // 获取点击的位置和进度条宽度的比例
    // 通过比例计算播放时间
    // 把播放时间设置好 进度也会改变
    var width = $bar.width();
    // console.log(e);   e.offsetX与e.offsetY 当前点击的地方距离坐标和上边的坐标  相当于当前元素的
    var place = e.offsetX;
    // 计算播放时间
    var time = place / width * video.duration;
    // 设置
    video.currentTime = time;
    // 触发   播放时间更改事件
    // 视频未加载完  跃进功能有bug  必须视频加载完成 才可以用跃进功能  
  })
  // 6.播放重置功能
  video.onended = function () {
    video.currentTime = 0;
    $switch.removeClass('fa-pause').addClass('fa-play');
  }
})