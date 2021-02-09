const allProjects = [];

const page = document.getElementById("content");


const createBtnAddProject = (()=> {
    const addProject = document.createElement("button");
    addProject.innerHTML = "+ add new project";
    addProject.id = "addProjBtn";
    page.appendChild(addProject);
})();

const createProject = (name, description, deadline, checklist) => {
    const getName = () => name;
    const getDesription = () => description;
    const getDeadline = () => deadline;
    const getChecklist = () => checklist;

    let id = allProjects.length;
    allProjects[id] = this; //Czy to będzie działać nie w konstruktrze?

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
};


// pierwsze próby stworzenia modala

const createModal = (() => {

    const modal = document.createElement("div");
    modal.id = "addProjWin"

    const closeSign = document.createElement("span");
    closeSign.innerHTML = "&times;";
    closeSign.className = "close"

    const nameTag = document.createElement("div");
    nameTag.innerHTML = "Project name";

    const nameInput = document.createElement("input");
    nameInput.id = "projectName";
    nameInput.type = "text";

    const descriptionTag = document.createElement("div");
    descriptionTag.innerHTML = "Description";

    const descriptionInput = document.createElement("input");
    descriptionInput.id = "projectDescription";
    descriptionInput.type = "text";

    const deadlineTag = document.createElement("div");
    deadlineTag.innerHTML = "Deadline";

    const deadlineInput = document.createElement("input")
    deadlineInput.id = "projectDeadline";
    deadlineInput.type = "date";

    const checklistDiv = document.createElement("div");
    checklistDiv.id = "checklistDiv";

    const checklistTag = document.createElement("div");
    checklistTag.innerHTML = "Do you want to add checklist?"
    
    const checklistInput =document.createElement("Input");
    checklistInput.id = "projectChecklist";
    checklistInput.type = "checkbox";

    checklistDiv.appendChild(checklistTag);
    checklistDiv.appendChild(checklistInput);
    
    const addBtnWin = document.createElement("button");
    addBtnWin.innerHTML= "Add"

    modal.appendChild(closeSign);
    modal.appendChild(nameTag);
    modal.appendChild(nameInput);
    modal.appendChild(descriptionTag);
    modal.appendChild(descriptionInput);
    modal.appendChild(deadlineTag);
    modal.appendChild(deadlineInput);
    modal.appendChild(checklistDiv);
    modal.appendChild(addBtnWin);
    document.body.appendChild(modal);
})();