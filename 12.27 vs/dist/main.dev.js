"use strict";

var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId);
  var nav = document.getElementById(navId);
  console.log(toggle);
  console.log(nav);

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
      toggle.classList.toggle('bx-x');
    });
  }
};

showMenu('header-toggle', 'nav-menu');