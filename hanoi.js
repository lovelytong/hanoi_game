var floor = 2
async function hanoi(a,b,c,count) {
  if (count > 0) {
     await hanoi(a,c,b,count-1);
     await move(a,c);
     await hanoi(b,a,c,count-1)
  }
}

async function move(a,b) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      x = $('#'+ a).children(":first");
      $('#'+ b).prepend(x);
      resolve();
    },1000);
  })
}

$(document).ready(function () {
  $('#one').addClass("one");
  for (var i = 0; i < floor-1; i++) {
    $('#one').after('<div class="one"></div>');
    $('#one').next().css('width',(50 + (floor - 1 - i) * 20).toString() + 'px');
  }
  hanoi('a', 'b', 'c', floor)
})