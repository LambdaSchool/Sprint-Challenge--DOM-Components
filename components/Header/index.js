// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    headerDiv.append(dateSpan);

    const title = document.createElement("h1");
    headerDiv.append(title);

    const tempSpan = document.createElement("span");
    tempSpan.classList.add("temp");
    headerDiv.append(tempSpan);
}

let headerParent = document.querySelector("div.header-container");
headerParent.appendChild(Header());

