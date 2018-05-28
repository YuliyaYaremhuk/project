$(() => {
    let menuIsOpened = false;
    let menuIcon = $('#js-menu-icon');
    let menuList = $('#js-menu');

    const toggleMenu = () => {
        menuIsOpened = !menuIsOpened;
        menuIcon.toggleClass('active');
        menuList.toggleClass('active');

    };
    menuIcon.on('click', toggleMenu);
    console.log(12);

});
