const welcomeButton = document.querySelector('.welcome-page__button');
const welcomePage = document.querySelector('.welcome-page');
const loadingPage = document.querySelector('.loading-page');
const square = document.querySelector('.loading-page__loading-square');
const addActiveClassToPages = document.querySelectorAll('header, .main-wrapper__home, .main-wrapper, footer')
console.log(addActiveClassToPages);

class ToggleOnPages {
  constructor(){
    this.loadingPage();
  }
 
  loadingPage(){
    welcomeButton.addEventListener('click', () => {
      loadingPage.classList.toggle('active');
      square.classList.toggle('active');
      welcomePage.style.display = 'none';
      setTimeout(showContent, 300);
    });
    const showContent = () => {  
      for (const page of addActiveClassToPages) {
        page.classList.toggle('active');
      }
      loadingPage.classList.remove('active');
      square.classList.remove('active')
    };
  }
  
}

export const toggleOn = new ToggleOnPages();