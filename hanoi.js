let floor = 0

async function hanoi(a,b,c,count) {
  if (count > 0) {
     await hanoi(a,c,b,count-1);
     await move(a,c);
     await hanoi(b,a,c,count-1)
  }
}

function move(a,b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let x = $('#'+ a).children(":first").remove();
      $('#'+ b).prepend(x);
      $('#board').text(a + '=>' + b)
      resolve();
    },1000);
  })
}

function button_ready(){
  $("#clickbutton").removeAttr("disabled");
}

function play() {
  $('#clickbutton').attr("disabled", "disabled");
  $('#C').empty()
  floor = $('input').val()
  $('#A').prepend('<div id="one" class="one"></div>');
  for (let i = 0; i < floor - 1; i++) {
    $('#one').after('<div class="one"></div>');
    $('#one').next().css('width',(50 + (floor - 1 - i) * 20).toString() + 'px');
  }
  hanoi('A', 'B', 'C', floor).then(button_ready);

}

$(document).ready(function () {
  $('#clickbutton').click(play);
  $('#resetbutton').click(() => {location.reload()})
})
