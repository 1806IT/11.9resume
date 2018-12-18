!function(){
    //console.log(window.Swiper)//测试引入的轮播是否成功
    var view=document.querySelector('#mySlides')
    var controller={
        view:null,
        swiper:null,
        swiperOptions:{
            // Optional parameters可选参数
            loop: true,//表示是否为无缝的
            // If we need pagination是否需要分页器(页码)
            pagination: {
                el: '.swiper-pagination',
            },
            // Navigation arrows导航箭头
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        init:function(view){
            this.view=view
            this.initSwiper()
        },
        initSwiper: function(){
          this.swiper = new Swiper(
          this.view.querySelector('.swiper-container'), 
          this.swiperOptions)  
        }
    }
    controller.init(view)

}.call()
