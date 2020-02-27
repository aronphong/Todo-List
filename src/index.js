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

    let projectList = [];
    let currentProject;
    let projectName;
    
    //iterate through projectlist to find matching title and return project objct
    const selectProject = () => {
        currentProject = projectList.filter(item => item.title == projectName)[0]
        renderProjectContents(currentProject);
        return currentProject
    }
 
    const listenProjectNames = () => {

        const sideBar = document.querySelectorAll(".project-item");

        sideBar.forEach(element => element.addEventListener("click", () => {
            projectName = element.querySelector(".project-title").textContent;
            selectProject();
            return projectName
        }));

    }
    
    const newProject = () => {
        const addProject = document.getElementById("project-item");
        projectList.push(Project(addProject.value));
        renderProjectTitles(projectList);
        listenProjectNames();
    };

    const newReminder = () => {
        
        const addReminder = document.getElementById("task-item");

        currentProject.todoItems.push(Reminder(addReminder.value));
        currentProject.itemCounter++;

        console.log(projectList);
    };

    const projectButton = document.querySelector("#add-project");
    projectButton.addEventListener("click", newProject);

    const reminderButton = document.querySelector("#add-reminder");
    reminderButton.addEventListener("click", newReminder)

    projectList.push(Project("Reminders"));
    renderProjectTitles(projectList);
    renderProjectContents(projectList[0]);
    projectName = projectList[0].title;
    selectProject();

})();
