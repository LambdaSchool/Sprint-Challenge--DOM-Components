// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container




function Header(date, title, temp) {
    const header = document.createElement('div');
    const span1 = document.createElement('span');
    // const h1 = document.createElement('h1');
    // const span2 = document.createElement('span');
    
    header.classList.add('header')
    span1.classList.add('date')
    // span2.classList.add('temp')
    

    span1.textContent = 'SMARCH 28, 2019'
// h1.textContent = 'Lambda Times'
// span2.textContent = '98 degrees idk where the degrees symbol is on this....'

return Header
}




// const header = header();
// const header = document.querySelector('.headerContainer')
const div = Header ();

// header.appendChild(date)
// // header.appendChild(title)
// // header.appendChild(temp)
