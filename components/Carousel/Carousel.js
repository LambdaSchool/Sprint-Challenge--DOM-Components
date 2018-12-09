class Carousel {
    constructor(carousel){
      this.carousel = carousel;
      this.buttonRight = document.querySelector('.right-button');
      this.buttonRight.addEventListener('click', () => this.rightClick());
      this.buttonLeft = document.querySelector('.left-button');
      this.buttonLeft.addEventListener('click', () => this.leftClick());
      this.images = document.querySelectorAll('.carousel img');
      this.images.forEach(image => image.style.display = 'none');
      this.CurrentIndex = 1;
      this.max = this.images.length;
      this.displayImage();
    }
    // Maybe ill combine right and left click into 1 function. Param = right or left
    rightClick() {
      document.querySelector(`.carousel img[data-value="${this.CurrentIndex}"]`).style.display = 'none';
      if (this.CurrentIndex < this.max){
        this.CurrentIndex++;
      }
      else this.CurrentIndex = 1;
      this.displayImage();
    }
    leftClick() {
      document.querySelector(`.carousel img[data-value="${this.CurrentIndex}"]`).style.display = 'none';
      if (this.CurrentIndex <= 1){
        this.CurrentIndex = this.max;
      }
      else this.CurrentIndex--;
      this.displayImage();
    }
    displayImage() {
      document.querySelector(`.carousel img[data-value="${this.CurrentIndex}"]`).style.display = 'inline';
    
    }
  }
  
  let carousel = document.querySelector('.carousel');
  carousel = new Carousel(carousel);
  
  /* If You've gotten this far, you're on your own! Although we will give you some hints:
      1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
      2. You will need to grab a reference to all of the images
      3. Create a current index
      4. Those buttons are gonna need some click handlers.
      5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
      6. Have fun!
  */
  