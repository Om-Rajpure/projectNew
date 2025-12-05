const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector('.elem-con');
var imgC = document.querySelector('.images');
elemC.addEventListener('mouseenter', function() {
    imgC.style.display = 'block';
});
elemC.addEventListener('mouseleave', function() {
    imgC.style.display = 'none';
});

var elems = document.querySelectorAll('.elem');
elems.forEach(function(elem) {
    elem.addEventListener('mouseenter', function() { 
        var imgSrc = elem.getAttribute('data-img');
        imgC.style.backgroundImage = `url(${imgSrc})`;
    });
});