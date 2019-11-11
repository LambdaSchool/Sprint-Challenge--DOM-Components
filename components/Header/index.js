// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

function Header(date, title, temp) {
    const newHeader = document.createElement('div');
    const newDate = document.createElement('span');
    const newTitle = document.createElement('h1');
    const newTemp = document.createElement('span');

    //set classes
    newHeader.classList.add('header');
    newDate.classList.add('date');
    newTemp.classList.add('temp')

    //set structure
    newHeader.appendChild(newDate);
    newHeader.appendChild(newTitle);
    newHeader.appendChild(newTemp);

    //set text content
    newDate.textContent = date;
    newTitle.textContent = title;
    newTemp.textContent = temp;

    return newHeader

}

headerContainer.appendChild(Header("MARCH 28, 2019", "Lambda Times", "98°"));

