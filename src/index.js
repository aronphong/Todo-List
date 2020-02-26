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


    const selectProject = () => {
        const sideBar = document.querySelectorAll(".project-item");
        sideBar.forEach(element => element.addEventListener("click", () => {
            currentProject = element.querySelector(".project-title").textContent;
            return currentProject
        }));

    }
 
    const newProject = () => {
        const p1 = Project("Reminders");
        const p2 = Project("Things To Learn");
        projectList.push(p1);
        projectList.push(p2);
        renderProjectTitles(projectList);
    };

    newProject();
    selectProject();

    // pass in project object?
    const newReminder = () => {
        const addReminder = document.getElementById("task-item");
        // test[`item-${itemCount}`] = Reminder(addReminder.value);
        test[p1.itemCounter] = Reminder(addReminder.value);

        // add new reminder to specific project
        projectList[0].todoItems.push(test);
        console.log(projectList);
        // itemCount++;
        return itemCount
    };

    // renderProjectContents();

    const reminderButton = document.querySelector("#add-reminder");
    reminderButton.addEventListener("click", newReminder)

})();
