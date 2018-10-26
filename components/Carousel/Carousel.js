class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.images = element.querySelectorAll('img');
        this.currentIndex = 0;
        this.images[0].style.display = 'block';
        this.leftButton.addEventListener('click', () => {this.leftButtonClick()})
        this.rightButton.addEventListener('click', () => { this.rightButtonClick() })
    }

    leftButtonClick(){
        this.images[this.currentIndex].style.display = 'none'
        if(this.currentIndex === 0){
            this.currentIndex = this.images.length - 1
        } else {
            this.currentIndex = this.currentIndex - 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }

    rightButtonClick(){
        this.images[this.currentIndex].style.display = 'none'
        if (this.currentIndex === this.images.length - 1) {
            this.currentIndex = 0
        } else {
            this.currentIndex = this.currentIndex + 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Make sure you are importing the carousel.js file properlly in your index.html file, go and check right now. 
    3. Those buttons are gonna need some click handlers.
    4. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    5. Have fun!
*/