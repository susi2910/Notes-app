const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    
    img.src = "images/delete.png";
    img.alt = "Delete"; 
    
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    
    
    inputBox.addEventListener("input", updateStorage);
    img.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });
});


notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});


notesContainer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.execCommand("insertLineBreak"); 
    }
});

// Initialize notes display
showNotes();