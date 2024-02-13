document.addEventListener("DOMContentLoaded", function () {
  addTask();
  console.log("hi");
});

function createList() {
  let taskList = document.querySelector(".taskList");

  let list = document.createElement("input");
  let checkBox = document.createElement("input");

  list.style.backgroundColor = "#ffb0b0";
  list.style.color = "#0c2d57";
  list.style.border = "2px solid white";
  list.style.fontWeight = "bolder";
  list.style.width = "410px";
  list.style.height = "25px";
  list.style.margin = "10px 10px";
  list.style.outline="none"

  checkBox.style.width = "20px";
  checkBox.style.height = "20px";

  checkBox.type = "checkbox";
  list.type = "text";

  taskList.appendChild(list);
  taskList.appendChild(checkBox);

  checkBox.addEventListener("change", function(){
    if(checkBox.checked){
        list.style.textDecoration="line-through"
    }
    else{
        list.style.textDecoration="none"
    }
  })
}

function addTask() {
  createList();
}
