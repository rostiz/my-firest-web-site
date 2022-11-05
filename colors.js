  var Links = {
    setColor:function (color){
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i<alist.length){
    //       alist[i].style.color = color;
    //       i=i+1;
    // }
    $('a').css('color', color);
  }
}
nightDayHandler = (aaa) => {
var target = document.querySelector('body');
var Body = {
  setColor:function (color){
    // target.style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    // target.style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
if(aaa.value === 'night'){
Body.setBackgroundColor('black');
Body.setColor('white');
aaa.value = 'day';

Links.setColor('powderblue');

} else {
Body.setBackgroundColor('white');
Body.setColor('black');
aaa.value = 'night';

Links.setColor('blue');

}

}
