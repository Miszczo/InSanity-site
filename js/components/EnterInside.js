const welcomeButton = document.querySelector('.welcome-page__button');
const header = document.querySelector('header');
const homePage = document.querySelector('.main-wrapper__home');
const welcomePage = document.querySelector('.welcome-page');
const mainWrapper = document.querySelector('.main-wrapper');
const footer = document.querySelector('footer');
const loadingPage = document.querySelector('.loading-page');
const square = document.querySelector('.loading-page__loading-square')
const loadingProgress = document.querySelector('.loading-progress');

class EnterInside {
  constructor(){
    this.loadingPage();
  }
 
  loadingPage(){
    welcomeButton.addEventListener('click', () => {
      loadingPage.classList.add('active');
      square.classList.add('active');
      welcomePage.style.display = 'none';
      setTimeout(addClass, 3000);
    });

    const addClass = () => {  
      console.log("im working");
      header.classList.add('active');
      homePage.classList.add('active');
      mainWrapper.classList.add('active');
      footer.classList.add('active');
      loadingPage.classList.remove('active');
      square.classList.remove('active')
    };
  }
  
}

export const enterInsidePage = new EnterInside();