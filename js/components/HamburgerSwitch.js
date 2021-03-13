const hamburgerSelector = document.querySelector('.hamburger-button-selector');
const hiddenMenuSelector = document.querySelector('.hidden-menu');
const socialMediaHEaderIcons = document.querySelector('.social-media__header-mobile');
const headerButtonSelector = document.querySelectorAll('.hidden-header-button-selector');

class HamburgerSwitch {
  constructor() {
    this.hamburgerToggle();
    this.hideMenuAfterSectionChoose();
  }

  hamburgerToggle() {
 
    console.log(hamburgerSelector);
    console.log(hiddenMenuSelector);
    console.log(headerButtonSelector);
    hamburgerSelector.addEventListener('click', () => {
      hiddenMenuSelector.classList.toggle('post-active');
      socialMediaHEaderIcons.classList.toggle('post');
      console.log('click');
    });
  }

  hideMenuAfterSectionChoose(){
    for(let button of headerButtonSelector){
      button.addEventListener('click', ()=> {
        hiddenMenuSelector.classList.toggle('post-active');
        socialMediaHEaderIcons.classList.toggle('post');
        console.log('click');
      });
    }
  }
}

export const hamburgerToggle = new HamburgerSwitch();