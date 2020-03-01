import { renderProjectTitles, renderProjectContents, createReminderInput } from "./page-layout.js";

const Reminder = (title, description="-",dueDate, priority="low") => {
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
    
    const selectProject = () => {
        currentProject = projectList.filter(item => item.title == projectName)[0]
        renderProjectContents(currentProject);
        return currentProject
    }
 
    const listenProjectNames = () => {
        const sideBar = document.querySelectorAll(".project-item");
        sideBar.forEach(element => element.addEventListener("click", () => {
            // element.id = "selected-project";
            projectName = element.querySelector(".project-title").textContent;
            selectProject();
            return projectName
        }));

    }
    
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
    
        const addReminder = () => {
            currentProject.todoItems.push(Reminder(newTask.value));
            currentProject.itemCounter++;
            renderProjectContents(currentProject);
        }

        createReminderInput();

        const newTask = document.getElementById("task-item");
        newTask.addEventListener("blur", addReminder);
        
        // newTask.addEventListener("keydown", () => {
        //     if (event.key === "Enter") {
        //         addReminder();
        //     }
        // });
    }

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
