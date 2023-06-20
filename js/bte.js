var menuLinks = document.querySelectorAll('.menu-link');

function clickMenuHandler() {   
    for (var i = 0; i < menuLinks.length; i++){
        menuLinks[i].classList.remove('menu-active');
    }
    this.classList.add('menu-active');
}

for (var i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', clickMenuHandler);
}

function btnActive()  {
  const target = document.getElementById('target_btn');
  target.disabled = false;
}

function btnDisabled()  {
  const target = document.getElementById('target_btn');
  target.disabled = true;
}
