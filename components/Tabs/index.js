// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const entryPoint = document.querySelector(".topics")

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log('response', response.data.topics)

    response.data.topics.forEach(topics => {
        const newTab = singleTab(topics)
        entryPoint.appendChild(newTab)
    })

    allTab.appendChild(singleTab(response.data.topics))
})

const singleTab = () => {

    const tabComp = document.createElement("div")

    tabComp.classList.add("tab")

    return tabComp
}

const allTab = document.querySelector(".topics")