import { renderProjectTitles, renderProjectContents } from "./page-layout.js";
import { createReminderInput, removeReminders } from "./Reminders.js";

const Reminder = (title, priority="low", description, dueDate) => {
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

    // create or add reminder object to array
    const addReminder = (reminder) => {
        todoItems.push(reminder);
        itemCounter++;
    };

    const deleteReminder = (reminder) => {
        let index = todoItems.indexOf(reminder.title);
        todoItems.pop(index);
        itemCounter--;
    };

    return {title, todoItems, itemCounter ,addReminder, deleteReminder}
};

const controller = (() => {

    let projectList = [];
    let currentProject;
    let projectName;
    
    const selectProject = () => {
        currentProject = projectList.filter(item => item.title == projectName)[0]
        renderProjectContents(currentProject);
        listenFinishedReminders();
        return currentProject
    };
 
    const listenProjectNames = () => {
        const sideBar = document.querySelectorAll(".project-item");
        sideBar.forEach(element => element.addEventListener("click", () => {
            projectName = element.querySelector(".project-title").textContent;
            selectProject();
            return projectName
        }));
    };
    
    const newProject = () => {

        const addProject = document.getElementById("project-item");

        if (addProject.value != "") {
            let checkName = projectList.findIndex(element => element.title == addProject.value);
            if (checkName == -1) {
                projectList.push(Project(addProject.value));
                renderProjectTitles(projectList);
                listenProjectNames();
            }
        }
    };

    const newReminder = () => {
    
        let priorityStatus;
        createReminderInput();
        reminderButton.disabled = true;

        const addReminder = () => {
            if (taskItem.value != "") {
                currentProject.addReminder(Reminder(taskItem.value, priorityStatus))
            }
            reminderButton.disabled = false; 
            renderProjectContents(currentProject);
            listenFinishedReminders();
        };

        const taskItem = document.getElementById("task-item");
        taskItem.addEventListener("keydown", () => {
            if (event.key === "Enter") {
                addReminder();
            }
        });

        // listen for priority click
        const priorityButtons = document.querySelectorAll(".priority");
        priorityButtons.forEach(element => element.addEventListener("click", () => {
            priorityStatus = element.className.split(" ")[1];
            addReminder();
        }));
    
    };

    // get project, get reminder and pop
    const listenFinishedReminders = () => {
        let reminderTitle;
        const priorityButton = document.querySelectorAll(".priority");

        priorityButton.forEach(element => element.addEventListener("click", ()=> {
            reminderTitle = element.nextElementSibling.textContent;
            currentProject.deleteReminder(reminderTitle);
            removeReminders(element);
        }));
    };

    const projectButton = document.querySelector("#add-project");
    projectButton.addEventListener("click", newProject);

    const reminderButton = document.querySelector("#add-reminder");
    reminderButton.addEventListener("click", newReminder)

    projectList.push(Project("Reminders"));
    renderProjectTitles(projectList);
    listenProjectNames();
    renderProjectContents(projectList[0]);
    projectName = projectList[0].title;
    selectProject();

})();
