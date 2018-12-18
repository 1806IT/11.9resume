"use strict";

!function () {
  var view = document.querySelector('#topNavBar');
  view.style.border = '1px solid red';
  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.bindEvents();
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var view = this.view;
      window.addEventListener('scroll', function (x) {
        if (window.scrollY > 0) {
          _this.active();
        } else {
          _this.deactive();
        }
      });
    },

    /*window.addEventListener('scroll', function (x) {
        //console.log(window.scrollY)//获取用户滚动高度
        if (window.scrollY > 0) {
            view.classList.add('sticky')
        } else {
            view.classList.remove('sticky')
        }
    }.bind(this))
    //箭头函数没有this，箭头函数的内外的this是一样的
    },*/
    active: function active() {
      this.view.classList.add('sticky');
    },
    deactive: function deactive() {
      this.view.classList.remove('sticky');
    }
  };
  controller.init(view);
}.call();