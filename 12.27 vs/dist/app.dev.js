"use strict";

var hero = document.querySelector(".hero");
var slider = document.querySelector('.slider');
var logo = document.querySelector('#logo');
var hamburger = document.querySelector('.hamburger');
var headline = document.querySelector(".headline");
var tl = new TimelineMax();
tl.fromTo(hero, 1, {
  height: "0%"
}, {
  height: "90%",
  ease: Power2.easeInOut
}) //有了ease:Power2.easeInOut之後hero裡的字不會不見
.fromTo(hero, 1.2, {
  width: "100%"
}, {
  width: "80%",
  ease: Power2.easeInOut
}).fromTo(slider, 1.2, {
  x: "-100%"
}, {
  x: "0%",
  ease: Power2.easeInOut
}, "-=1.2").fromTo(logo, 0.5, {
  opacity: 0,
  x: 30
}, {
  opacity: 1,
  x: 0
}, "-=0.5").fromTo(hamburger, 0.5, {
  opacity: 0,
  x: 30
}, {
  opacity: 1,
  x: 0
}, "-=0.5").fromTo(headline, 0.5, {
  opacity: 0,
  x: 90
}, {
  opacity: 1,
  x: 0
}, "-=0.5");