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

const headerContainer = document.querySelector(".header-container");


const createHeader = () => {
   
    const header = document.createElement("div");
    const date = document.createElement("span");
    date.textContent = "SMARCH 28, 2019";
    const title = document.createElement("h1");
    title.textContent = "Lambda Times"
    const temp = document.createElement("span");
    temp.textContent = "98";

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    header.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");

    return header;
}


headerContainer.appendChild(createHeader());
