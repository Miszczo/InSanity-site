class HamburgerSwitch {
  constructor() {
    this.hamburgerToggle();
  }
  hamburgerToggle() {
    const hamburgerSelector = document.querySelector('.hamburger-button-selector');
    const hiddenMenuSelector = document.querySelector('.hidden-menu');
    const socialMediaHEaderIcons = document.querySelector('.social-media__header-mobile');
    
    console.log(hamburgerSelector);
    console.log(hiddenMenuSelector);

    hamburgerSelector.addEventListener('click', () => {
      hiddenMenuSelector.classList.toggle('post-active');
      socialMediaHEaderIcons.classList.toggle('post');
      console.log('click');
    });
  }
}

export const hamburgerToggle = new HamburgerSwitch();