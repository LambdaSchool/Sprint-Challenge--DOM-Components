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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    // console.log(res)
    // console.log(res.data)
    // console.log(res.data.articles)
    let articles = res.data.articles;
    articles.forEach(article => {
        
    })
})
.catch(err => {
    console.log('no data found', err);
})

function createArticle(article) {
    //creating elements
    let card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imageContainer = document.createElement('div'),
        image = document.createElement('img'),
        by = document.createElement('span');

    //adding classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    //appending elements
    card.append(headline, author);
    author.append(imageContainer, by);
    imageContainer.append(image);

    //textContent
    headline.textContent = article.headline;
    image.src = article.authorPhoto;
    by.textContent = article.authorName;

    return card; //returning parent element
}

let cardsContainer = document.querySelector('.cards-container')