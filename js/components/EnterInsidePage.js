export class EnterInside{
  constructor(){
    this.addClass();
  }

  addClass(){
    const header = document.querySelector('header');
    const homePage = document.querySelector('.pages__home');
    const welcomePage = document.querySelector('.welcome-page');
    const buttons = document.querySelectorAll('.switch-button-selector');

    console.log(buttons);
    for(const btn of buttons){
      btn.addEventListener('click', ()=>{
        header.classList.add('active');
        homePage.classList.add('active');
        welcomePage.style.display = 'none';
        console.log('im working!');
      })
    }

    console.log("im alive!");
  }
}

export const EnterInsidePage = new EnterInside();