const inputBox = document.getElementById("inputBox");
let addTaskButton = document.querySelector(".row button");
const listContainer = document.getElementById("list-container");
const modal = document.getElementById("myModal");

function addTask() {
  if (inputBox.value === "") {
    modal.style.display = "block"; // Display the modal
  } else {
    //create the element
    createTasksElement();
  }
  //clear input box
  inputBox.value = "";
  saveLocalData();
}

function createTasksElement() {
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
}

function saveLocalData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getLocalData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getLocalData();

function closeModal() {
  modal.style.display = "none"; // Hide the modal
}

addTaskButton.addEventListener("click", createTasksElement);

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      createTasksElement()
      inputBox.value = "";
  }
});

listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveLocalData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveLocalData();
  }
});
