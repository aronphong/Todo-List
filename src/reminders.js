const createReminderInput = () => {

    const remindersList = document.getElementById("reminders-list");
    const listItem = document.createElement("li");

    const reminderInput = document.createElement("input");
    reminderInput.type ="text";
    reminderInput.id = "task-item";
    reminderInput.maxLength="50";

    const priorityHigh = document.createElement("button");
    priorityHigh.className = "priority high";

    const priorityMed = document.createElement("button");
    priorityMed.className = "priority medium";

    const priorityLow = document.createElement("button");
    priorityLow.className = "priority low";

    listItem.appendChild(priorityLow);
    listItem.appendChild(priorityMed);
    listItem.appendChild(priorityHigh);
    listItem.appendChild(reminderInput);

    remindersList.appendChild(listItem);
    reminderInput.focus();
}

const removeReminders = (element) => {
    console.log(element);
    element.parentNode.remove();
    // element.parentElement = "";
};

export { createReminderInput, removeReminders }