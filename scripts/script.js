const allProjects = [];
let newProject;

let newProjectName = document.getElementById("projectName");
let newProjectDescription = document.getElementById("projectDescription"); 
let newProjectDeadline = document.getElementById("projectDeadline");
let newProjectChecklist = document.getElementById("projectChecklist");

const page = document.getElementById("content");


const createBtnAddProject = (()=> {
    const addProject = document.createElement("button");
    addProject.innerHTML = "+ add new project";
    addProject.id = "addProjBtn";
    page.appendChild(addProject);
    addProject.addEventListener("click", ()=> {
        document.getElementById("addProjWin").style.display = "block";
    });
})();

const project = (name, description, deadline, checklist) => {
    
    const getName = () => name;
    const getDesription = () => description;
    const getDeadline = () => deadline;
    const getChecklist = () => checklist;

    setName = (name) => {
      this.name = name;
      return this;
    };

    setDescription = (description) => {
        this.description = description;
        return this;
    };

    setDeadline = (deadline) => {
        this.deadline = deadline;
        return this;
    };

    setChecklist = (checklist) => {
        this.checklist = checklist;
        return this;
    };

    return {name,description,deadline,checklist, getName, getDesription, getDeadline, getChecklist, setName, setDescription, setDeadline, setChecklist}

};


const createModal = (() => {

    const modal = document.createElement("div");
    modal.id = "addProjWin"

    const winTitle = document.createElement("div");
    winTitle.id = "winTitle";
    winTitle.innerHTML = "Add New Project"

    const closeDiv = document.createElement("div");
    closeDiv.id ="closeDiv";

    const closeSign = document.createElement("span");
    closeSign.innerHTML = "&times;";
    closeSign.className = "close";
    closeSign.addEventListener("click", () =>{
        modal.style.display = "none";
    });

    closeDiv.appendChild(closeSign);

    const nameTag = document.createElement("div");
    nameTag.innerHTML = "Project name";
    nameTag.className = "modalTag";

    const nameInput = document.createElement("input");
    nameInput.id = "projectName";
    nameInput.type = "text";
    nameInput.className = "modalInput";

    const descriptionTag = document.createElement("div");
    descriptionTag.innerHTML = "Description";
    descriptionTag.className = "modalTag";

    const descriptionInput = document.createElement("input");
    descriptionInput.id = "projectDescription";
    descriptionInput.type = "text";
    descriptionInput.className = "modalInput";

    const deadlineTag = document.createElement("div");
    deadlineTag.innerHTML = "Deadline";
    deadlineTag.className = "modalTag";

    const deadlineInput = document.createElement("input")
    deadlineInput.id = "projectDeadline";
    deadlineInput.type = "date";
    deadlineInput.className = "modalInput";

    const checklistDiv = document.createElement("div");
    checklistDiv.id = "checklistDiv";
    checklistDiv.className = "modalInput";

    const checklistTag = document.createElement("div");
    checklistTag.innerHTML = "Add checklist?"
    checklistTag.className = "modalTag";
    
    const checklistInput =document.createElement("Input");
    checklistInput.id = "projectChecklist";
    checklistInput.type = "checkbox";

    checklistDiv.appendChild(checklistTag);
    checklistDiv.appendChild(checklistInput);
    
    const addBtnWin = document.createElement("button");
    addBtnWin.innerHTML= "Add";
    addBtnWin.id ="add";

    modal.appendChild(closeDiv);
    modal.appendChild(winTitle);
    modal.appendChild(nameTag);
    modal.appendChild(nameInput);
    modal.appendChild(descriptionTag);
    modal.appendChild(descriptionInput);
    modal.appendChild(deadlineTag);
    modal.appendChild(deadlineInput);
    modal.appendChild(checklistDiv);
    modal.appendChild(addBtnWin);
    document.body.appendChild(modal);
    
    return [nameInput, descriptionInput, deadlineInput, checklistInput];
})();

document.getElementById("add").addEventListener("click", ()=>{
    getInput()
    newProject = project(newProjectName,newProjectDescription,newProjectDeadline, newProjectChecklist);
    allProjects.push(newProject);
    console.log(allProjects);
    clearInput(); 
    return newProject;
});
    
    
function getInput() {
newProjectName = document.getElementById("projectName").value;
newProjectDescription = document.getElementById("projectDescription").value; 
newProjectDeadline = document.getElementById("projectDeadline").value;
newProjectChecklist = document.getElementById("projectChecklist").value;
return [newProjectName, newProjectDescription, newProjectDeadline, newProjectChecklist];
}

function clearInput() {
    newProjectName.value = "";
    newProjectDescription.value = "";
    newProjectDeadline.value= "";
    newProjectChecklist.value = "off";
}