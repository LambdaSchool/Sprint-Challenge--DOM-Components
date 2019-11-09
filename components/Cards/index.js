// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

class CardCreator {
  function (card1){
      const card = document.createElement('div');
      const head1 = document.createElement('div');
      const auth1 = document.createElement('div');
      const img_cont = document.createElement('div');
      const img1 = document.createElement('img');
      const text1 = document.createElement('span');

      card.appendChild(head1);
      card.appendChild(auth1);
      head1.appendChild(img_cont);
      img_cont.appendChild(img1);
      auth1.appendChild(text1);

      card.classList.add('card');
      head1.classList.add('headline');
      auth1.classList.add('author');
      img_cont.classList.add('img-container');

      head1.textContent = card1.headline;
      img1.src = card1.authorPhoto;
      text1.textContent = `By ${card1.authorName}`;

      return card;

  }
}
  const cardsContainer = document.querySelector('.cards-container');

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( response => {
      
      console.log(response);
  
      let  obj = response.data.articles;
      
      let newArray = Object.keys(obj).map(function(key) {
          return [obj[key]];
      });
  
      // Need to loop over nested arrays to make one large array
  
      let largeArray = [];
  
      for ( let i=0; i<newArray.length; i++ )
      {
          for ( let j=0; j<newArray[i].length; j++ )
          {
              for ( let k=0; k<newArray[i][j].length; k++ )
              {            
              largeArray.push(newArray[i][j][k]);
              }
          }
      }
          
      largeArray.forEach( item => {
          let card = new CardCreator(item);
          cardsContainer.appendChild(card);
      })      
  
      return obj;
  })
  .then(response => {
      console.log('Second .then', response);
  
      response.forEach( item => {
          let card = new CardCreator(item);
          cardsContainer.appendChild(card);
          })    
  })
  .catch( error => {
      console.log("Error:", error);
  })