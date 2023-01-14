const textAnim = document.querySelector('span');

new Typewriter(textAnim, {
    deleteSpeed: 10,
    loop: true,
})
    .typeString("Bonjour, je suis <span class='test' style='color: red'>Mamoudou DIALLO</span>")
    .pauseFor(300)
    .deleteChars(35)
    .typeString("Je suis <span class='test' style='color: red'>étudiant en Informatique</span>")
    .pauseFor(500)
    .start()




//JQuery
$('.btn-opened').on('click', function () {
    $('.aff').css('display', 'none');
    $('.btn-opened').css('display', 'none');
    $('.cacher').css('display', 'block');
    $('.cacher').css('transition', 'ease-in-out 1s');
})

$('.btn-closed').on('click', function () {
    $('.btn-opened').css('display', 'flex');
    $('.cacher').css('display', 'none');
})




/*********** Reponsive Menu ************/
function redimensionner() {
    var width = $(window).width();
    if (width > 460) {
        $('.aff').css('display', 'block');
        $('.btn-opened').css('display', 'none');
    }
    else {
        $('.aff').css('display', 'none');
        $('.btn-opened').css('display', 'block');
    }
}

$(window).resize(redimensionner);
redimensionner();
