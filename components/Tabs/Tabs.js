class TabCard {
  constructor(element){
    // Use a jQuery selector to assign this.element to the DOM reference
    this.element = $(element)
  }
  selectCard(){
    // show the card
    this.element.show();
  }
  deselectCard(){
    // hide the card
    this.element.hide();
  }
}
    // Use a jQuery selector to assign this.element to the DOM reference  
    // assign this.parent to the parent parameter    
    // Note that we are calling getCards() on Tabs (The parent of TabLink) and passing the data attribute: data-tab, no need to update this line of code.
class TabLink {
  constructor(element, parent){
    this.element = $(element);
    this.parent = parent;
    this.cards = this.parent.getCards(this.element.data('tab'));
    // Using jQuery, map over the array of cards.  In your callback function, create new instances of the TabCard class that contain a card reference. TabCard(card) as an example.
    this.cards.map((index, cards) => {
      return new TabCard($(cards))
    })

    // You will need to create a click handler for the TabLink element that calls selectTab()
    this.element.click(() => {
      this.selectTab()
    })
  }

  selectTab(){
    // use this.parent to call the updateActive() method and pass the `this` keyword as a parameter
    this.parent.updateActive(this);
    // using a jQuery method, add a class to this.element named "active-tab"
    this.element.addClass('active-tab');
    // iterate over each card using the .each() method in jQuery. call the selectCard() method in your callback function
    $('.card').each(() => {
      selectCard()
  })
  }

  deselectTab(){
    // use a jQuery method to remove the class "active-tab" from this.element
    this.element.removeClass('active-tab');
    // iterate over each card using the .each() method in jQuery. call the deselectCard() method in your callback function
    this.cards.each(() => {
      deselectCard()
    })
  }
}
    // Using jQuery, find all of the tabs on this element.   
     // Set the initial active tab to the first tab in the list.
    // use activeTab to call the selectTab() method    
    // use activeTab to call the deselectTab() method    
    // assign activeTab to tabElement
    // This method is meant to get all the cards from the HTML page.  
    // If the data supplied is 'all' then all of the cards should be returned. 
    // Otherwise, only cards matching the data attribute should be returned. 
    // Using jQuery, select the correct tabs component. Then initialize the Tabs class.
class Tabs {
  constructor(element){
    this.element = $(element); 
    this.tabs = this.element.find('.tab');
    this.tabs = this.tabs.map( (i, tab) => new TabLink(tab, this) ); // Question - Why didn't we return this line when we've returned this in a similar example?  When I tried to return it, it gave e a jQuery reference error.
    this.activeTab = this.tabs[0];
    this.init();
  }
  init(){
    this.activeTab.selectTab();
  }
  updateActive(tabElement){
    this.activeTab.deselectTab();
    this.activeTab = tabElement;
  }
  getCards(data){
    $('.card').each(() => {
    if ($(this).data('tab') == 'all') {
      return this.element
      } else {
        return this.element.find(`.card[data-tab="${data}"]`)
      }
    })
  }
}
let tabs = $('.tabs');
tabs = new Tabs(tabs);// Question two: Why didn't we have to map this time when we had to map yesterday?  Again, it threw a jQuery reference error when I tried mapping here.
 



