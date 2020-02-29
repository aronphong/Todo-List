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
    title.id = "current-title";
    title.textContent = project.title;

    const reminders = document.createElement("div");
    reminders.id = "current-items";

    const remindersList = document.createElement("ul");
    remindersList.id = "reminders-list";

    for (let i = 0; i < todoItems.length; i++) {
        const listItem = document.createElement("li");
        const listDiv = document.createElement("div");

        const reminderTitle = document.createElement("h3");
        reminderTitle.textContent = todoItems[i].title;

        const reminderDescription = document.createElement("p");
        reminderDescription.textContent = todoItems[i].description;

        listItem.appendChild(reminderTitle);
        listItem.appendChild(reminderDescription);
        remindersList.appendChild(listItem);
    }

    content.appendChild(title);
    content.appendChild(reminders);
    reminders.appendChild(remindersList);
}

const createReminderInput = () => {

    const remindersList = document.getElementById("reminders-list");
    const listItem = document.createElement("li");

    const reminderInput = document.createElement("input");
    reminderInput.type ="text";
    reminderInput.id = "task-item";

    listItem.appendChild(reminderInput);
    remindersList.appendChild(listItem);
    reminderInput.focus();
}

export { renderProjectTitles, renderProjectContents, createReminderInput };