import axios from "axios";

// // Creating the container that holds the topic tabs
const Tabs = (topics) => {
//   const topicsDiv = document.createElement('div')
//   topicsDiv.classList.add('topics')
  
// // Creating each topic tab
//   topics.forEach(topicTitle => {
//     const innerTopics = document.createElement('div')
//     topicsDiv.appendChild.add(innerTopics)
//     innerTopics.classList.add('tab')
//     innerTopics.textContent = topicTitle
//   })

    
//   return topicsDiv

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  // axios.get("https://lambda-times-api.herokuapp.com/topics")
  // .then(res => {
  //   const topicData = res.data.topics
  //   topicData.forEach(item => {
  //     const appendData = document.querySelector(selector)
  //     appendData.appendChild(Tabs(item))
  //   })
    
   

  // })
  // .catch(err => {
  //   debugger
  // })

  // return topicData
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}


export { Tabs, tabsAppender }
