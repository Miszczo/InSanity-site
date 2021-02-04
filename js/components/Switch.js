export class Switch{
  constructor(){
    const thisSwitch = this;
    
    thisSwitch.addClass();
  }

  addClass(){
    const header = document.querySelector('header');
    const buttons = document.querySelectorAll('.button');

    console.log(buttons);
    for(const btn of buttons){
      btn.addEventListener('click', ()=>{
        header.classList.add('active');
        console.log('im working!');
      })
    }

    console.log("jestem");
  }
}

export const switchOn = new Switch();