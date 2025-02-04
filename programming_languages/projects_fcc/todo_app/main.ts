// The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.   element.classList.toggle("class-to-toggle");
/**
 * splice() is an array method that modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements. It can take up to three arguments: the first one is the mandatory index at which to start, the second is the number of items to remove, and the third is an optional replacement element.
 */

/**
 * localStorage offers methods for saving, retrieving, and deleting items. The items you save can be of any JavaScript data type.

For instance, the setItem() method is used to save an item, and the getItem() method retrieves the item. To delete a specific item, you can utilize the removeItem() method, or if you want to delete all items in the storage, you can use clear().
Everything you save in localStorage needs to be in string format.

In order to fix this, we need to create a function called removeSpecialChars that takes a string as input and removes all special characters.
  function removeSpecialChars(str) {
    return str.replace(/[^a-zA-Z0-9 ]/g, '');
  }
 */

new EventSource('/esbuild').addEventListener('change', () => location.reload())

const taskForm = document.getElementById("task-form")!;
const confirmCloseDialog = document.getElementById("confirm-close-dialog")!;
const openTaskFormBtn = document.getElementById("open-task-form-btn")!;
const closeTaskFormBtn = document.getElementById("close-task-form-btn")!;
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn")!;
const cancelBtn = document.getElementById("cancel-btn")!;
const discardBtn = document.getElementById("discard-btn")!;
const tasksContainer = document.getElementById("tasks-container")!;
const titleInput = document.getElementById("title-input") as HTMLInputElement;
const dateInput = document.getElementById("date-input") as HTMLInputElement;
const descriptionInput = document.getElementById("description-input") as HTMLInputElement;

const taskData = JSON.parse(localStorage.getItem("data") || '[]') || [];
let currentTask = {};

const removeSpecialChars = (val: string) => {
    return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
    // trim() remove espaços em branco no início e no final da string.
    // [^A-Za-z0-9\-\s]/g expressão regular regex
    // [^A-Za-z0-9\-\s] corresponde a qualquer caractere que não seja uma letra, um número, um hífen ou um espaço em branco.
}

const addOrUpdateTask = () => {
    if (!titleInput.value.trim()) {
        alert("Please provide a title");
        return;
    }
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

    const taskObj = {
        id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: removeSpecialChars(titleInput.value),
        date: removeSpecialChars(dateInput.value),
        description: removeSpecialChars(descriptionInput.value),
    };

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[dataArrIndex] = taskObj;
    }

    localStorage.setItem("data", JSON.stringify(taskData));
    updateTaskContainer()
    reset()
};

const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";

    taskData.forEach(
        ({ id, title, date, description }) => {
            (tasksContainer.innerHTML += `
<div class="task" id="${id}">
<p><strong>Title:</strong> ${title}</p>
<p><strong>Date:</strong> ${date}</p>
<p><strong>Description:</strong> ${description}</p>
<button onclick="editTask(this)" type="button" class="btn">Edit</button>
<button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
</div>`)
        });
};


const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(taskData));
}

const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    currentTask = taskData[dataArrIndex];

    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");
}

const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
}

if (taskData.length) {
    updateTaskContainer();
}

openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset()
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addOrUpdateTask();
});