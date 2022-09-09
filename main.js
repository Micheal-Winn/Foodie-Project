import './style.scss'
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import  'waypoints/lib/noframework.waypoints';



var options = {
    strings: ['Food...', 'Drink...'],
    typeSpeed: 90,
    backDelay:1000,
    backSpeed:100,
    loop: true
};

var typed = new Typed('.element', options);


var toDown = {
    distance: '50px',
    origin: 'top',
    interval: 300,
    duration:800,
};

ScrollReveal().reveal('.to-down', toDown);

var toRight = {
    distance: '50px',
    origin: 'left',
    interval: 530,
    duration:800,
};

ScrollReveal().reveal('.to-right', toRight);

var toLeft = {
    distance: '50px',
    origin: 'right',
    interval: 300,
    duration:800,
};

ScrollReveal().reveal('.to-left', toLeft);
new Waypoint({
    element: document.getElementById('home-contant'),
    handler: function(direction) {
        let oldNav = document.querySelector('.nav-link.active')
        if(oldNav != null)
        {
            oldNav.classList.remove('active')
        }

        let currentNavLink = document.querySelector(`[href='#home']`);
        currentNavLink.classList.add('active')


    },
    offset: '10%'
})

new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        let oldNavLink = document.querySelector('.nav-link.active');
        oldNavLink.classList.remove('active');
        let currentNavLink = document.querySelector(`[href='#about']`);
        currentNavLink.classList.add('active')
    },
    offset: '25%'
})



