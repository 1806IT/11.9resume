
!(function(){
    let view=document.querySelector('section.message');
    let model={
        //获取数据
        init: function () {
            var APP_ID = '9FkLrAn2scR5DPXiEJ8fFLiI-gzGzoHsz';
            var APP_KEY = '8fdY0vz80kOe05K4Puc6GBWx';

            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        
        fetch:function(){
            var query = new AV.Query('Message');
            return query.find()//返回promise对象
        },

        //创建数据
        save:function(name,content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({//返回promise对象
                'name': name,
                'content': content
            })
        }
    }

    let controller={
        view:null,
        model:null,
        messageList:null,
        init: function (view,model){
            this.view=view;
            this.model=model;

            this.messageList = view.querySelector('#messageList');
            this.myForm = view.querySelector('#postMessageForm');
            this.model.init();
            this.loadMessage();            
            this.bindEvents();
            
        },
        
        loadMessage:function(){
            this.model.fetch().then(
               (message) =>{
                let array = message.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    this.messageList.appendChild(li)
                    })
                    }, function (error) {
                    alert('提交失败，请改天留言')
            })  
        },
        bindEvents: function(){
            this.myForm.addEventListener('submit', (e)=> {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let myForm = this.myForm
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name,content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''

            })            
        }
    };


    controller.init(view,model)
}.call())



