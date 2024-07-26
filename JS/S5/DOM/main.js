const tasks = [];
// const tasks = Array();
const tasksListElement = document.getElementById("tasks-list");
const addBtn = document.getElementById("add");
const inputTask = document.getElementById("input-task");

function render() {
  tasksListElement.innerHTML = "";
  tasks.forEach((element) => {
    const newTask = document.createElement("li");
    newTask.innerText = element;
    // const firstChild = tasksListElement.children[0];
    // tasksListElement.insertBefore(newTask, firstChild);

    tasksListElement.insertAdjacentElement("afterbegin", newTask);
  });
}
const handelNewTask = () => {
  const task = inputTask.value;
  inputTask.value = "";
  tasks.push(task);
  render();
};
addBtn.addEventListener("click", handelNewTask);

inputTask.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    handelNewTask();
  }
});
