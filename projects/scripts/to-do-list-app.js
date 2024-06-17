const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
const modal = document.getElementById("myModal");

function addTask() {
  if (inputBox.value === "") {
    modal.style.display = "block"; // Display the modal
  } else {
    //create the element
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //clear input box
  inputBox.value = "";
}

function closeModal() {
  modal.style.display = "none"; // Hide the modal
}

listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
});
