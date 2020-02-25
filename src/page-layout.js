const renderPageContent = () => {

    const container = document.querySelector("#container");

    console.log(container);





    // container.appendChild(navBar);
}

const renderProjectTitles = (arr) => {

    const sideBar = document.querySelector("#side-bar");

    for (let i = 0; i < arr.length ; i++) {
        let newItem = document.createElement("div");
        newItem.className = "project-item";

        let itemTitle = document.createElement("h1");
        itemTitle.className = "project-title"
        itemTitle.textContent = arr[i].title;

        let itemLogo = document.createElement("div");
        itemLogo.className = "project-logo";

        newItem.appendChild(itemLogo);
        newItem.appendChild(itemTitle);
        sideBar.appendChild(newItem);
    }

}


export { renderPageContent, renderProjectTitles };