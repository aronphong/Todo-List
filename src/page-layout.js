const renderPageContent = () => {

    const container = document.querySelector("#container");

    console.log(container);

    // container.appendChild(navBar);
}

const renderProjectTitles = (arr) => {

    const sideBar = document.querySelector("#side-bar");
    sideBar.innerHTML = "";

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

// pass in project object to display
const renderProjectContents = (project) => {

    const todoItems = project.todoItems;

    const content = document.querySelector("#content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.id = "project-title";
    title.textContent = project.title;

    const reminders = document.createElement("div");
    reminders.id = "reminder-items";

    const remindersList = document.createElement("ul");

    for (let i = 0; i < todoItems.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = todoItems[i].title;
        remindersList.appendChild(listItem);
    }

    content.appendChild(title);
    content.appendChild(reminders);
    reminders.appendChild(remindersList);
}

export { renderPageContent, renderProjectTitles, renderProjectContents };