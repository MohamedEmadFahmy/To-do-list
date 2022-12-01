let addButton = document.getElementById("addTask");
let inputField = document.getElementById("inputField");
let notesContainer = document.getElementById("notesContainer");


addButton.addEventListener("click", function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add("currentnote");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerHTML = inputField.value;
    notesContainer.appendChild(paragraph);
    inputField.value = "";
    inputField.focus();
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick", function(){
        notesContainer.removeChild(paragraph);
    })
})
document.addEventListener('keypress', (event)=>{
    if(event.key === "Enter") {
      addButton.click();
    }
});