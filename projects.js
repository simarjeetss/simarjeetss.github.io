document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.getElementById("project-list");
    const projectDetails = document.getElementById("project-details");

    projectList.addEventListener("click", function(event) {
        event.preventDefault();
        if (event.target.tagName === "A") {
            const projectId = event.target.dataset.projectId;
            // Simulate fetching project details from a database or API
            const projectData = fetchProjectDetails(projectId);
            renderProjectDetails(projectData);
        }
    });

    function fetchProjectDetails(projectId) {
        // Simulated data for project details
        const projects = {
            project1: {
                title: "Project 1",
                description: "Description of Project 1."
            },
            project2: {
                title: "Project 2",
                description: "Description of Project 2."
            }
            // Add more project details as needed
        };
        return projects[projectId];
    }

    function renderProjectDetails(project) {
        projectDetails.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        `;
    }
});
