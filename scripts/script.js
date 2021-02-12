const allProjects = [];

let projName;
let projDescriptionL; 
let projDeadline;
let projChecklist;

const page = document.getElementById("content");
let cards;


const createBtnAddProject = (()=> {
    const btnDiv = document.createElement("div");
    btnDiv.id = "btnDiv";
    const addProject = document.createElement("button");
    addProject.innerHTML = "+ add new project";
    addProject.id = "addProjBtn";
    btnDiv.appendChild(addProject);
    page.appendChild(btnDiv);
    
    addProject.addEventListener("click", ()=> { 
        if (document.getElementById("addProjWin") == null) {
            createModal();
        }
        document.getElementById("addProjWin").style.display = "block";
        });
    
    
})();

const createProjectCardsDiv = (()=>{
    cards = document.createElement("div");
    page.appendChild(cards);
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

function createModal() {
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

    addBtnWin.addEventListener("click", ()=>{
        getInput()
        let newProject = project(projName,projDescription,projDeadline, projChecklist);
        allProjects.push(newProject);
        clearInput();
        document.getElementById("addProjWin").style.display = "none";
        displayProjects() 
    });
};
    
function getInput() {
    projName = document.getElementById("projectName").value;
    projDescription= document.getElementById("projectDescription").innerHTML; 
    projDeadline= document.getElementById("projectDeadline").value;
    projChecklist = document.getElementById("projectChecklist").value;
}
   
function clearInput() {
    document.getElementById("projectName").value = "";
    document.getElementById("projectDescription").value = "";
    document.getElementById("projectDeadline").value= "";
    document.getElementById("projectChecklist").value = "off";
}    

function displayProjects() {
 
    cards.innerHTML="";

    allProjects.forEach((element) => {

    const closeDiv = document.createElement("div");
    closeDiv.id ="closeDiv";
    
    const closeSign = document.createElement("span");
    closeSign.innerHTML = "&times;";
    closeSign.className = "delete";
    closeSign.addEventListener("click", () =>{
    allProjects.pop(element);
    cards.removeChild(projectCard);
        });

    closeDiv.appendChild(closeSign);

    const projectCard = document.createElement("div");
    projectCard.className = "projCard";

    const headerDiv = document.createElement("div");
    headerDiv.className = "projectHeader"

    const projTitle = document.createElement("div");
    projTitle.innerHTML = String(element.name);
    projTitle.className = "projTitle"

    const projDead = document.createElement("div");
    projDead.innerHTML = (element.deadline).toDateString();

    headerDiv.appendChild(projTitle);
    headerDiv.appendChild(projDead);

    const checklistDiv = document.createElement("div");

    const projDescr = document.createElement("div");
    projDescr.innerHTML = String(element.description);
    projDescr.className = "projDescr";

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttonDiv";

    const changeName = document.createElement("button");
    changeName.innerHTML = "Edit Name";
    changeName.className = "projBtn";

    const changeDate = document.createElement("button");
    changeDate.innerHTML = "Edit Deadline";
    changeDate.className = "projBtn";

    const changeDesription = document.createElement("button");
    changeDesription.innerHTML = "Edit Description"
    changeDesription.className = "projBtn";

    const addChecklistPosition = document.createElement("button");
    addChecklistPosition.innerHTML = "Add Checklist Position"
    addChecklistPosition.className = "projBtn";

    buttonDiv.appendChild(changeName);
    buttonDiv.appendChild(changeDate);
    buttonDiv.appendChild(changeDesription);
    buttonDiv.appendChild(addChecklistPosition);

    projectCard.appendChild(closeDiv);
    projectCard.appendChild(headerDiv);
    projectCard.appendChild(projDescr);
    projectCard.appendChild(checklistDiv);
    projectCard.appendChild(buttonDiv);
    cards.appendChild(projectCard);
    
        
    })
}

const addSampleProjec = (() => {
    const exampleProj = project("New project", "This is a sample project",new Date(2021,02,05), "on");
    allProjects.push(exampleProj);
    displayProjects();
}
)();