import axios from "axios";


const Card = (article) => {
  
//   // Instantiating the elements
//   const articleContainer = document.createElement('div')
//   const articleHeadline = document.createElement('div')
//   const articleAuthor = document.createElement('div')
//   const imgContainer = document.createElement('div')
//   const articleImg = document.createElement('img')
//   const authorName = document.createElement('span')

//   // Appending the elements
//   articleContainer.appendChild(articleHeadline)
//   articleContainer.appendChild(articleAuthor)
//   articleAuthor.appendChild(imgContainer)
//   imgContainer.appendChild(articleImg)
//   articleAuthor.appendChild(authorName)

//   // Adding classes to the elements
//   articleContainer.classList.add('card')
//   articleHeadline.classList.add('headline')
//   articleAuthor.classList.add('author')
//   imgContainer.classList.add('img-container')
    
//   // Adding text content and attributes
//   articleHeadline.textContent = article.headline
//   articleImg.setAttribute = ('src', article.authorPhoto)
//   authorName.textContent = article.authorName


//   // Adding listener for click events
//   document.querySelectorAll(articleContainer).addEventListener('click', event => {
//     console.log(article.headline)
  
  
//   return articleContainer
//   })
  

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
}

const cardAppender = (selector) => {
  // axios.get('https://lambda-times-api.herokuapp.com/articles')
  // .then(res => {
  //   Array.from(res).forEach(item => {
  //   const existingCardDiv = document.querySelector(selector)
  //   const createdCard = document.createElement('div')
  //   createdCard.setAttribute = Card
  //   existingCardDiv.appendChild(createdCard)
  //   createdCard.appendChild(item)
  //   })
  // })
  // .catch(err => {
  //   debugger
  // })

  // return createdCard

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
