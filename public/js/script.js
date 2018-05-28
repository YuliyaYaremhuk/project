'use strict';

$(function () {
    var menuIsOpened = false;
    var menuIcon = $('#js-menu-icon');
    var menuList = $('#js-menu');

    var toggleMenu = function toggleMenu() {
        menuIsOpened = !menuIsOpened;
        menuIcon.toggleClass('active');
        menuList.toggleClass('active');
    };
    menuIcon.on('click', toggleMenu);
    console.log(12);
});