let addTask = document.getElementById("addTask");
let inputField = document.getElementById("inputField");
let notesContainer = document.getElementById("notesContainer");


addTask.addEventListener("click", function(){
    // if(inputField.value != ""){
        let taskBox = document.createElement('div');
        taskBox.classList.add("taskBox");
        let noteText = document.createElement('input');
        noteText.disabled = true;
        noteText.classList.add("noteText");
        noteText.classList.add("paragraph-styling");
        noteText.value = inputField.value;
        // notesContainer.appendChild(taskBox);
        notesContainer.insertBefore(taskBox,notesContainer.firstChild);
        taskBox.appendChild(noteText);
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



        editButton.addEventListener("click", function(){
            if(editButton.innerText.toLowerCase() == "edit"){
                noteText.disabled = false;
                noteText.focus();
                noteText.style.color = "rgba(255, 12, 255, 1)";
                editButton.innerText = "Save";
                editButton.style.marginRight = "0px"; 
            }
            else{
                noteText.disabled = false;
                noteText.style.color = "White";
                inputField.focus();
                editButton.innerText = "Edit";
                editButton.style.marginRight = "7px";
            }
            
        });
    // }

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
// document.addEventListener('keypress', (event)=>{
//     if(event.key === "Delete") {
//       deleteButton.click();
//     }
// });