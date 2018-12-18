"use strict";

!function () {
  var specialTags = document.querySelectorAll('[data-x]');

  for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offSet');
  }

  findClosestAndRemoveOffset();
  window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset();
  });
  /*helper */

  function findClosestAndRemoveOffset() {
    var specialTags = document.querySelectorAll('[data-x]'); //前面加了div就是获取含data-x标记的div，所以别加div

    var minIndex = 0;

    for (var _i = 1; _i < specialTags.length; _i++) {
      if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = _i;
      } //specialTags[minIndex离窗口顶部最近的元素]


      specialTags[minIndex].classList.remove('offSet'); //console.log(minIndex)
    }

    for (var _i2 = 0; _i2 < specialTags.length; _i2++) {
      specialTags[_i2].classList.remove('hightLight');
    } //console.log('min-s')
    //console.log(specialTags[minIndex].offsetTop, minIndex)


    specialTags[minIndex].classList.add('hightLight');
    var id = specialTags[minIndex].id; //得到当前画面标签的id

    var a = document.querySelector('a[href="#' + id + '"]'); //返过去找当前对应画面a标签

    var li = a.parentNode; //继续回头找a标签对应其父元素，因为下划线是标记在其父元素上

    var brotherAndMe = li.parentNode.children;

    for (var _i3 = 0; _i3 < brotherAndMe.length; _i3++) {
      brotherAndMe[_i3].classList.remove('hightLight');
    } //将其父元素下所有子元素的active去掉


    li.classList.add('hightLight'); //将需要active的元素加上
  }
}.call();