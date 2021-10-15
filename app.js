const pages = [
    "about",
    "experience",
    "blog",
];

let active = pages[0];

let url = window.location.href;

if (url.includes('#')) {
    const arr = url.split('#');
    const el = arr[arr.length - 1];

    pages.forEach(function (page) {
        if (page === el)
            active = el;
    });

    url = url.split('#')[0];
}
updateTabs();


function updateTabs() {
    $('.section').removeClass('section_active');
    $('#' + active).addClass('section_active');

    $('.tab').removeClass('tab_active');
    $('#link_' + active).addClass('tab_active');

    let refresh = url + '#' + active;
    window.history.pushState({path: refresh}, '', refresh);


    $('#background').css('height', $('body').css('height'));
    // console.log('123');
    // console.log($('#' + active).css('height'));
    // console.log();

}


pages.forEach(function (el) {
    $('#link_' + el).on('click', function () {
        active = el;
        updateTabs();
    })
});


$('#open-mavka').on('click', function () {
    const player = new Plyr('#mavka-player');
    MicroModal.show('modal-mavka');
})
$('#open-sharik').on('click', function () {
    const player = new Plyr('#sharik-player');
    MicroModal.show('modal-sharik');
})


$('#open-witals24').on('click', function () {
    const player = new Plyr('#witals24-player');
    MicroModal.show('modal-witals24');
})