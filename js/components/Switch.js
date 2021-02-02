export class Switch{
  constructor(){
    const thisSwitch = this;
    
    thisSwitch.addClass();
  }

  addClass(){
    const header = document.querySelector('header');
    const button = document.getElementById('btn');
    console.log(button);
    button.addEventListener('click', function(){
      header.classList.add('active');
    })
    console.log("hehe");
  }
}

export const switchOn = new Switch();