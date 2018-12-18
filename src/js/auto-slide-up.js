
!function(){
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offSet')
    }
    findClosestAndRemoveOffset()
    window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset()
    })

    /*helper */
    function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]')//前面加了div就是获取含data-x标记的div，所以别加div
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
        //specialTags[minIndex离窗口顶部最近的元素]
        specialTags[minIndex].classList.remove('offSet')
        //console.log(minIndex)
    }

    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.remove('hightLight')
    }
    //console.log('min-s')
    //console.log(specialTags[minIndex].offsetTop, minIndex)
    specialTags[minIndex].classList.add('hightLight')
    let id = specialTags[minIndex].id//得到当前画面标签的id
    let a = document.querySelector('a[href="#' + id + '"]')//返过去找当前对应画面a标签
    let li = a.parentNode//继续回头找a标签对应其父元素，因为下划线是标记在其父元素上
    let brotherAndMe = li.parentNode.children
    for (let i = 0; i < brotherAndMe.length; i++) {
        brotherAndMe[i].classList.remove('hightLight')
    }
    //将其父元素下所有子元素的active去掉
    li.classList.add('hightLight')//将需要active的元素加上
    }

}.call()
