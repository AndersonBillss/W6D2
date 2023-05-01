for (let i=0; i<4;){
    $('.boxes').append('<div class = "row"><div class = "box"></div><div class = "box"></div><div class = "box"></div><div class = "box"></div></div>')
    i++
}

$('.boxes').on('click','.box',function(){
    $(this).toggleClass('light');
  })


