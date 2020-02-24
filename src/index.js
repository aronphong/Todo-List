// create factory for task objects
    // title
    // description
    // dueDate
    // priority
    // notes?
    // checkist?

// separate list of todos
    // have defaults

import { renderPageContent } from "./page-layout.js";

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
    return {todoItems, addReminder, deleteReminder}
};

const controller = (() => {
    //create project(s)
    //create reminder(s)
    let projectItems = [];
    let itemCount = 0;

    const newProject = () => {

    }


    const newReminder = () => {
        // create unique reminder object
        // append reminder to project
        // iterate itemcount
    }


    let reminderButton = document.querySelector("#add-reminder");
    let addReminder = document.querySelector("task-item");
    reminderButton.addEventListener("click", newReminder)





})();

const Project1 = Project("test");

const eat = Reminder();
Project1.addReminder();
console.log(Project1.todoItems);
console.log(eat.getPriority());