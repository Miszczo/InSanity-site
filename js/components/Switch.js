class SwitchPages {
  constructor(){
    this.switchPage();
  }

  switchPage(){
    const headerButtonSelector = document.querySelectorAll('.header-button-selector');
    const allPages = document.querySelectorAll('.pages-selector')
    // const activeElement = document.querySelector('.post-active');
    // console.log("post-active:", activeElement);
    // console.log(headerButtonSelector);
    for(const singleButton of headerButtonSelector) {
      singleButton.addEventListener('click', ()=> {
        for(const singlePage of allPages){
          if(singleButton.id == singlePage.id ) {
            singlePage.classList.add('post-active');
          } else {
            singlePage.classList.remove('post-active');
          }
          console.log('click');
        }
      });
    }
  }
}

export const switchPage = new SwitchPages();