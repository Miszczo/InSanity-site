export class EnterInside{
  constructor(){
    this.addClass();
  }

  addClass(){
    const header = document.querySelector('header');
    const homePage = document.querySelector('.pages__home');
    const welcomePage = document.querySelector('.welcome-page');
    const welcomeButton = document.querySelector('.welcome-page__button');

    console.log(welcomeButton);
    welcomeButton.addEventListener('click', ()=> {
        header.classList.add('active');
        homePage.classList.add('active');
        welcomePage.style.display = 'none';
        console.log('Greeetings sire!');
      })

    console.log("im alive!");
  }
}

export const EnterInsidePage = new EnterInside();