const removeReminders = (element) => {
    console.log(element);
    element.parentNode.remove();
    // element.parentElement = "";
};

export { removeReminders }