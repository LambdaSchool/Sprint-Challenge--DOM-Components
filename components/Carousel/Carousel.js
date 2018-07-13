class Carousel {
    constructor(item) {
        this.item = item; // The carousel div
        this.leftButton = document.querySelector(".left-button");
        this.rightButton = document.querySelector(".right-button");
        this.imgsArray = this.item.querySelectorAll("img");
        
        this.imgsArray = Array.from(this.imgsArray);
        this.leftButton.addEventListener("click", () => { this.updateImage() });
        this.rightButton.addEventListener("click", () => { this.updateImage() });
        this.init();
    };

    init(){
        // Invoke the selectTab() method on activeTab so we can see the tab when the page loads.
        this.activeImg = this.imgsArray[0];
        this.activeImg.style.display = "block";
    }

    updateImage() {
        this.activeImg = this.imgsArray[0+1];
        if (this.imgsArray)
    }
    // updateActive(tabElement){
    // // Invoke the deselectTab() on activeTab to clear the styling on the tab
    // this.activeImg.deselectImage();
    // // assign activeTab to tabElement to update it's apperance
    // this.activeImg = tabElement;
    // }


    // updateImage(){
    //     // Notice we are invoking updateActive on the parent class of TabLink, nothing to update here
    //     this.parent.updateActive(this);
    //     console.log(this.parent)
    //     // Add a class of ".active-tab" to this.element
    //     this.element.classList.toggle("img");
    //     // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    //     this.cards.forEach(card => card.selectCard());
    // }

    // deselectImage() {
    //     this
    // }
};

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map( item => new Carousel(item));
// console.log(carousel);




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/