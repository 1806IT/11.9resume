"use strict";

!function () {
  var view = document.querySelector('nav.menu');
  var controller = {
    view: null,
    aTags: null,
    initAnimation: function initAnimation() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }

      requestAnimationFrame(animate);
    },
    scrollToElement: function scrollToElement(element) {
      var top = element.offsetTop;
      var currentTop = window.scrollY;
      var targetTop = top - 80;
      var s = targetTop - currentTop; //路程

      var coords = {
        y: currentTop
      }; // 起始位置

      var t = Math.abs(s / 100 * 300); //时间

      if (t > 1000) {
        t = 1000;
      }

      var tween = new TWEEN.Tween(coords) //起始位置
      .to({
        y: targetTop
      }, t) //结束位置和时间
      .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
      .onUpdate(function () {
        console.log(coords.y);
        window.scrollTo(0, coords.y); //如何更新界面
      }).start(); //开始缓动
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var aTags = this.view.querySelectorAll('nav.menu > ul > li >a');

      for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          x.preventDefault(); //阻止默认动作，本例是阻止a标签的自动跳转

          var a = x.currentTarget;
          var href = a.getAttribute('href');
          var element = document.querySelector(href);

          _this.scrollToElement(element);
        };
      }
    },
    init: function init(view) {
      this.view = view;
      this.initAnimation();
      this.bindEvents();
    }
  };
  controller.init(view);
}.call();
/*let liTags = view.querySelectorAll('nav.menu > ul >li')//可以选择相匹配的所有li
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function (x) {
                x.currentTarget.classList.add('active')//正式修改前为 let li =x.currentTarget.classList
                //let brother = li.getElementsByTagName('ul')[0]
                //brother.classList.add('active')
            }
            liTags[i].onmouseleave = function (x) {
                let li = x.currentTarget
                x.currentTarget.classList.remove('active')//正式修改前为let brother = li.getElementsByTagName('ul')[0]
                //brother.classList.remove('active')
            }
        }*/
//let aTags = document.querySelectorAll('nav.menu > ul > li >a')
//console.log(aTags)
//缓动函数