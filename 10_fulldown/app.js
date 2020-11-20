//해드높이 80px=> 400px 고정되어있을때 스크립트

// $(function(){
//   console.log('연결확인!!')

//   var header = $('.header')
//   var gnb = header.find('.gnb')

//   header.on('mouseover', function(){
//     header.stop().animate({height:400},'fast')
//   })

//   header.on('mouseleave', function(){
//     header.stop().animate({height:80},'fast')
//   })

//   gnb.find('ul').css('min-height', 400)
// })


//--------------------- 서브메뉴의 갯수가 증가함에 따라 헤드높이가 자동 조절되는 스크립트------------
$(function() {
  var header = $('.header')
  var gnb = header.find('.gnb')

  var headerHeight = header.innerHeight()  //padding을 포함한 높이
  var subMenuHeight = gnb.find('ul li').innerHeight()
  var paddingValue = 40


  var menuCount = []
   
  gnb.find('ul').each(function(){
    var liCount = $(this).find('li').length
    console.log(liCount)
    menuCount.push(liCount)
  })

  console.log(menuCount)

  // maxCount  배열중에서 큰수를 저장하는 변수

  var maxCount = Math.max.apply(null, menuCount)
  console.log(maxCount)

  var autoHeight =headerHeight + paddingValue + (subMenuHeight * maxCount)
  console.log(autoHeight)

    header.on('mouseover', function(){
    header.stop().animate({height:autoHeight},'fast')
  })

  header.on('mouseleave', function(){
    header.stop().animate({height:headerHeight},'fast')
  })
})