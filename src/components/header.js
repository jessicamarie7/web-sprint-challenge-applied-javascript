const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

//creating the header div
const theHeader = document.createElement('div')
theHeader.classList.add('header')

//creating the date span
const theDate = document.createElement('span')
theDate.classList.add('date')
theDate.textContent = date
theHeader.appendChild(theDate)

//creating the title h1
const theTitle = document.createElement('h1')
theTitle.textContent = title
theHeader.appendChild(theTitle)

//creating the temp span
const theTemp = document.createElement('span')
theTemp.classList.add('temp')
theTemp.textContent = temp
theHeader.appendChild(theTemp)

return theHeader
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const mainHeader = Header('The Lambda Times', 'October 29th, 2021', '38°')
const appender = document.querySelector(selector)
appender.appendChild(mainHeader)
}

export { Header, headerAppender }
