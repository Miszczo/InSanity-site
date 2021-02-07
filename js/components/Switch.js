export class Switch {
  constructor(){
    this.switchPage();
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

export const switchPage = new Switch();