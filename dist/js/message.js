"use strict";

!function () {
  var view = document.querySelector('section.message');
  var model = {
    //获取数据
    init: function init() {
      var APP_ID = '9FkLrAn2scR5DPXiEJ8fFLiI-gzGzoHsz';
      var APP_KEY = '8fdY0vz80kOe05K4Puc6GBWx';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function fetch() {
      var query = new AV.Query('Message');
      return query.find(); //返回promise对象
    },
    //创建数据
    save: function save(name, content) {
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({
        //返回promise对象
        'name': name,
        'content': content
      });
    }
  };
  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function init(view, model) {
      this.view = view;
      this.model = model;
      this.messageList = view.querySelector('#messageList');
      this.myForm = view.querySelector('#postMessageForm');
      this.model.init();
      this.loadMessage();
      this.bindEvents();
    },
    loadMessage: function loadMessage() {
      var _this = this;

      this.model.fetch().then(function (message) {
        var array = message.map(function (item) {
          return item.attributes;
        });
        array.forEach(function (item) {
          var li = document.createElement('li');
          li.innerText = "".concat(item.name, ":").concat(item.content);

          _this.messageList.appendChild(li);
        });
      }, function (error) {
        alert('提交失败，请改天留言');
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      this.myForm.addEventListener('submit', function (e) {
        e.preventDefault();

        _this2.saveMessage();
      });
    },
    saveMessage: function saveMessage() {
      var myForm = this.myForm;
      var content = myForm.querySelector('input[name=content]').value;
      var name = myForm.querySelector('input[name=name]').value;
      this.model.save(name, content).then(function (object) {
        var li = document.createElement('li');
        li.innerText = "".concat(object.attributes.name, ":").concat(object.attributes.content);
        var messageList = document.querySelector('#messageList');
        messageList.appendChild(li);
        myForm.querySelector('input[name=content]').value = '';
      });
    }
  };
  controller.init(view, model);
}.call();