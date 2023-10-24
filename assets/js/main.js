/*=============== REMOVE NAV_IMG MOBILE ===============*/
const headerNav = document.querySelector('.header__nav')
const headerLogo = document.querySelector('.header__logo')
const navClose = document.getElementById('nav-close')
const toggleMenu = document.getElementById('toggle-menu')
/*===== MENU SHOW =====*/
if(toggleMenu){
    toggleMenu.addEventListener('click', () => {
        headerNav.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        headerNav.classList.remove('show-menu')
    })
}


