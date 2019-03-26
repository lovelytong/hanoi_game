let floor = 0



function play() {
    $('#clickbutton').attr("disabled", "disabled");
    floor = $('input').val()
    $('#A').prepend('<div id="one" class="one" draggable="true" ondragstart="drag(event)" ></div>');
    for (let i = 0; i < floor - 1; i++) {
        $('#one').after(`<div class="one" draggable="true" id="'m${i}'" ondragstart="drag(event)"> </div>`);
        $('#one').next().css('width',(50 + (floor - 1 - i) * 20).toString() + 'px');
    }

}

function drag (event) {
    console.log('drag', event)
    event.dataTransfer.setData("Text",event.target.id);
}

function allowDrop (event) {
    console.log('allowDrop', event)
    event.preventDefault();
}

function drop (event) {
    console.log('drop', event)
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    console.log(data)
    event.target.appendChild(document.getElementById(data));
}

$(document).ready(function () {
    $('#clickbutton').click(play)
    $('#resetbutton').click(() => {location.reload()})
})
