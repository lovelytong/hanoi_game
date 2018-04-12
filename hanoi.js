var floor = 1
async function hanoi(a,b,c,count) {
  if (count > 0) {
     await hanoi(a,c,b,count-1);
     await move(a,c);
     await hanoi(b,a,c,count-1)
  }
}

function move(a,b) {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      x = $('#'+ a).children(":first").remove();
      $('#'+ b).prepend(x);
      $('#board').text(a + '=>' + b)
      resolve();
    },1000);
  })
}

function button_ready(){
  $("button").removeAttr("disabled");
}

function play() {
  $('button').attr("disabled","disabled");
  $('#c').empty()
  floor = $('input').val()
  $('#a').prepend('<div id="one" class="one"></div>');
  for (var i = 0; i < floor-1; i++) {
    $('#one').after('<div class="one"></div>');
    $('#one').next().css('width',(50 + (floor - 1 - i) * 20).toString() + 'px');
  }
  hanoi('a', 'b', 'c', floor).then(button_ready);

}

$(document).ready(function () {
  $('button').click(play)
})



