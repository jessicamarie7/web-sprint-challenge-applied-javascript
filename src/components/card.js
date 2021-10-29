import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //creating card div
  const eachArticle = document.createElement('div')
  eachArticle.classList.add('card')
  eachArticle.addEventListener('click', event => {
    console.log(article.headline)
  })

  //creating headline div
  const theHeadline = document.createElement('div')
  eachArticle.appendChild(theHeadline)
  theHeadline.classList.add('headline')
  theHeadline.textContent = article.headline

  //creating author div
  const theAuthor = document.createElement('div')
  eachArticle.appendChild(theAuthor)
  theAuthor.classList.add('author')

  //creating img div
  const imgContainer = document.createElement('div')
  theAuthor.appendChild(imgContainer)
  imgContainer.classList.add('img-container')

  //creating author img
  const authPhoto = document.createElement('img')
  imgContainer.appendChild(authPhoto)
  authPhoto.setAttribute = ('src', article.authorPhoto)

  //creating name span
  const authName = document.createElement('span')
  theAuthor.appendChild(authName)
  authName.textContent = article.authorName


  return eachArticle
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const allArticles = []
  const cardDiv = document.querySelector(selector)

  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    const javascriptArt = res.data.articles.javascript
    javascriptArt.forEach(jsArt => {
      allArticles.push(jsArt)
    });
  })
  .catch(err => {
    console.error(err)
  })
  return cardDiv
}

export { Card, cardAppender }
