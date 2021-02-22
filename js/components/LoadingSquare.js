const square = document.querySelector('.loading-progress-counter')
const welcomeButton = document.querySelector('.welcome-page__button');
const progressBackground = document.querySelector('.loading-progress-background');

class LoadingSquare {
  constructor(){
    this.loadingCounter();
  }
  loadingCounter(){
    welcomeButton.addEventListener('click', () => {    
      let time = 0;
      let height = 200;
      const counter = setInterval(() => {
        time++;
        height -= 2; 
        square.innerHTML = `${time}%`
        console.log(time);
        progressBackground.style.height = height + 'px';
        if (time >= 100) {
            clearInterval(counter);
        }
      }, 30);
      
    });
  
  }
}
export const SquareLoaderOn = new LoadingSquare();