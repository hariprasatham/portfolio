const hamBurger = document.getElementById('hamburger');
const navList = document.getElementById('navlist');

hamBurger.addEventListener('click', (event)=>{
    if(navList.classList.contains('navlist')){
        navList.classList.remove('navlist');
        navList.classList.add('navlistshow')
    }
    else if(navList.classList.contains('navlistshow')){
        navList.classList.remove('navlistshow');
        navList.classList.add('navlist');
    }

})
