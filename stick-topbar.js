!function(){
    var view=document.querySelector('#topNavBar')
    view.style.border='1px solid red'
    var controller={
        view:null,
        init:function(view){
            this.view=view
            this.bindEvents()
        },
        bindEvents: function(){
            var view=this.view
            window.addEventListener('scroll',(x)=>{
                if(window.scrollY>0){
                    this.active()
                }else{
                    this.deactive()
                }
            })
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
        active:function(){
            this.view.classList.add('sticky')
        },
        deactive:function(){
            this.view.classList.remove('sticky')
        }
    }   
    controller.init(view)
}.call()
 