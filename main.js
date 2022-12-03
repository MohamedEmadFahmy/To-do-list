let addTask = document.getElementById("addTask");
let inputField = document.getElementById("inputField");
let notesContainer = document.getElementById("notesContainer");


addTask.addEventListener("click", function(){
    // if(inputField.value != ""){
        let taskBox = document.createElement('div');
        taskBox.classList.add("taskBox");
        let paragraph = document.createElement('p');
        paragraph.classList.add("noteText");
        paragraph.classList.add("paragraph-styling");
        paragraph.innerHTML = inputField.value;
        notesContainer.appendChild(taskBox);
        taskBox.appendChild(paragraph);
        let editButton  = document.createElement("button");
        editButton.classList.add("editTask");
        editButton.innerHTML = "Edit";
        let deleteButton  = document.createElement("button");
        deleteButton.classList.add("deleteTask");
        deleteButton.innerHTML = "Delete";
        taskBox.appendChild(editButton);
        taskBox.appendChild(deleteButton);
        inputField.value = "";
        inputField.focus();
    // }s

    deleteButton.addEventListener("click", function(){
        notesContainer.removeChild(taskBox);
        inputField.value = "";
        inputField.focus();
    })
});
document.addEventListener('keypress', (event)=>{
    if(event.key === "Enter") {
      addTask.click();
    }
});