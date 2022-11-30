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
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;

    // 13 points the enter key
    if(keyCode === 13) {
      // call click function of the buttonn 
      addButton.click();
    }
});