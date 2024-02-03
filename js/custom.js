// navigation  menu js
function openNav() {
    $("#myNav").addClass("menu_width");
    $(".menu_btn-style").fadeIn();
}

function closeNav() {
    $("#myNav").removeClass("menu_width");
    $(".menu_btn-style").fadeOut();
}


// get current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
displayYear();



//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// slider carousel control


$('.slider_btn_prev').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('prev')
    $('.slider_image_carousel').carousel('prev')
})


$('.slider_btn_next').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('next')
    $('.slider_image_carousel').carousel('next')
})


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(20.5937, 78.9629),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // Coordinates for each place
    const places = [
        { name: 'Havelock Island', location: new google.maps.LatLng(11.9614, 92.9647) },
        { name: 'Gokarna', location: new google.maps.LatLng(14.5490, 74.3197) },
        { name: 'Varkala', location: new google.maps.LatLng(8.7350, 76.7034) },
        { name: 'Hampi', location: new google.maps.LatLng(15.3350, 76.4600) },
        { name: 'Varanasi', location: new google.maps.LatLng(25.3176, 82.9739) },
        { name: 'Meenakshi Temple', location: new google.maps.LatLng(9.9190, 78.1198) },
        { name: 'Ladakh', location: new google.maps.LatLng(34.1526, 77.5771) },
        { name: 'Munnar', location: new google.maps.LatLng(10.0889, 77.0595) },
        { name: 'Coorg', location: new google.maps.LatLng(12.4208, 75.7397) },
        { name: 'Mawlynnong', location: new google.maps.LatLng(25.2978, 91.5822) },
        { name: 'Ziro Valley', location: new google.maps.LatLng(27.6446, 93.8287) },
        { name: 'Dzukou Valley', location: new google.maps.LatLng(25.4081, 94.0520) },
    ];

    // Add markers for each place
    places.forEach(place => {
        const marker = new google.maps.Marker({
            position: place.location,
            map: map,
            title: place.name,
        });

        // Add info window for each marker
        const infoWindow = new google.maps.InfoWindow({
            content: `<strong>${place.name}</strong>`,
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}