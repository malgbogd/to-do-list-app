const page = document.getElementById("content");


const createAddProject = (()=> {
    const addProject = document.createElement("button");
    addProject.innerHTML = "+ add new project";
    page.appendChild(addProject);
})();