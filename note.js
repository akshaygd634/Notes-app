const notesContainer =document.querySelector(".notes-container")
const btn=document.querySelector(".btn")
let notes=document.querySelectorAll(".input-box")

let showNotes=()=>{
    notesContainer.innerHTML=localStorage.getItem("notes")
}
showNotes()

let updateStorage=()=>{
    localStorage.setItem("notes",notesContainer.innerHTML)
}
//button click
btn.addEventListener("click",()=>{
    let inputBox=document.createElement("p")
    let image=document.createElement("img")
    inputBox.className="input-box"
    inputBox.setAttribute("contenteditable","true")
    image.src="delete.webp"
    notesContainer.appendChild(inputBox).appendChild(image)

})
//remove on clicking the image 
notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        notes=document.querySelectorAll(".input-box")
        notes.forEach(nt =>{
            nt.onkeyup=()=>{
                updateStorage()
            }
        })
    }

})
//nextline
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})