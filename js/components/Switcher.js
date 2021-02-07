export class Switcher {
  constructor() {
    this.addClass();
    this.switchPage();

  }

  addClass(){
    const header = document.querySelector('header');
    const homePage = document.querySelector('.pages__home');
    const welcomePage = document.querySelector('.welcome-page');
    const welcomeButton = document.querySelector('.welcome-page__button');

    // console.log(welcomeButton);
    welcomeButton.addEventListener('click', ()=> {
        header.classList.add('active');
        homePage.classList.add('active');
        welcomePage.style.display = 'none';
        // console.log('Greeetings sire!');
      })

    // console.log("im alive!");
  }

  switchPage(){
    const headerButtonSelector = document.querySelectorAll('.header-button-selector');
    const allPages = document.querySelectorAll('.pages-selector')
    console.log("pages:", allPages);

    for(const singleButton of headerButtonSelector) {
      singleButton.addEventListener('click', ()=> {
        for(const singlePage of allPages){
          if(singleButton.id == singlePage.id && !singlePage.classList.contains('active')) {
            singlePage.classList.add('active');
          } else {
            singlePage.classList.remove('active');
          }
        }
      });
    }
  }
}

export const switchPages = new Switcher();