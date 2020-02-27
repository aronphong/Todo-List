// create factory for task objects
    // title
    // description
    // dueDate
    // priority
    // notes?
    // checkist?

// separate list of todos
    // have defaults

import { renderPageContent, renderProjectTitles, renderProjectContents } from "./page-layout.js";

renderPageContent();


const Reminder = (title, description="",dueDate, priority="low") => {
    const getName = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return {title, description, dueDate, priority, getName, getDueDate, getPriority }
};

const Project = (title) => {

    const getTitle = () => title;

    let todoItems = [];
    let itemCounter = 0;
    // push reminder object(s) to array in ea project object


    // create or add reminder object to array
    const addReminder = (reminder) => {
        // const newReminder = Reminder("shower", "1", "tomorrow", "low");

        todoItems.push(reminder);
    }

    const deleteReminder = (reminder) => {
        let index = todoItems.indexOf(reminder.title);
        todoItems.pop(index);
    }

    const completeReminder = (reminder) => {
        // find specific reminder in arr
        // call reminder.complete method
    }
    return {title, todoItems, itemCounter ,addReminder, deleteReminder}
};

const controller = (() => {
    //create project(s)
    //create reminder(s)

    let projectList = [];
    let itemCount = 0;
    const test = {};
    let currentProject;

    // separate both responsibilities
    const selectProject = () => {
        let projectName;
        const sideBar = document.querySelectorAll(".project-item");
        sideBar.forEach(element => element.addEventListener("click", () => {
            projectName = element.querySelector(".project-title").textContent;
            console.log(projectName);
            return projectName
        }));

        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].title == projectName) {
                currentProject = projectList[i];
                console.log(currentProject);
                return currentProject
            }
        }
    }
 
    //iterate through projectlist to find matching title and return project objct


    const newProject = () => {
        const addProject = document.getElementById("project-item");
        projectList.push(Reminder(addProject.value));
        renderProjectTitles(projectList);
    };

    // pass in project object?
    const newReminder = (currentProject) => {
        const addReminder = document.getElementById("task-item");
        // console.log(currentProject);
        // test[`item-${itemCount}`] = Reminder(addReminder.value);
        test[currentProject.itemCounter] = Reminder(addReminder.value);

        // add new reminder to specific project
        currentProject.todoItems.push(test);
        console.log(projectList);
        // itemCount++;
        return itemCount
    };

    const projectButton = document.querySelector("#add-project");
    projectButton.addEventListener("click", newProject);

    const reminderButton = document.querySelector("#add-reminder");
    reminderButton.addEventListener("click", newReminder)

    projectList.push(Reminder("Reminders"));
    renderProjectTitles(projectList);
    renderProjectContents(projectList[0]);
})();
