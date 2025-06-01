let createProjectHeaderDiv = function(title, demoLink, githubLink) {
    let projectHeaderDiv = document.createElement("div")
    projectHeaderDiv.setAttribute('class', "project-header")

    let headerTitle = document.createElement('h1')
    headerTitle.innerText = title

    let headerLinks = document.createElement('div')

    let demoLinkTag = document.createElement('a')
    demoLinkTag.innerText = "Demo"
    demoLinkTag.setAttribute("href", demoLink)
    let githubLinkTag = document.createElement('a')
    githubLinkTag.innerText = "Github"
    githubLinkTag.setAttribute("href", githubLink)
    let seperator = document.createElement('span')
    seperator.innerText = '/'
    seperator.setAttribute('class', "separator")
    headerLinks.append(demoLinkTag, seperator, githubLinkTag)

    projectHeaderDiv.append(headerTitle, headerLinks)
    return projectHeaderDiv
}

let createProjectDescriptionDiv = function(projectData) {
    let projectDescriptionDiv = document.createElement('div');
    projectDescriptionDiv.setAttribute('class', 'project-description');
    let projectHeaderDiv = createProjectHeaderDiv(
        projectData['title'],
        projectData['demoLink'],
        projectData['github']
    )

    let projectText = document.createElement('p');
    projectText.innerText = projectData["desc"]

    projectDescriptionDiv.append(projectHeaderDiv, projectText)

    return projectDescriptionDiv
}


function addProject(projectsDiv, projectData) {

    let projectDiv = document.createElement('div');
    projectDiv.setAttribute("class", "project-tile");

    let projectThumbnailDiv = document.createElement('div');
    projectThumbnailDiv.setAttribute('class', 'project-thumbnail')

    let projectImg = document.createElement('img')
    projectImg.setAttribute('src', projectData["thumbnailPath"])
    projectThumbnailDiv.appendChild(projectImg)

    let projectDescriptionDiv = createProjectDescriptionDiv(projectData);

    let projectDescriptionFooter = document.createElement("p")
    projectDescriptionFooter.setAttribute('class', "small-p");
    for (technology of projectData['technologies']) {
        let span = document.createElement('span')
        span.setAttribute('class', 'tags')
        span.innerText = technology.toUpperCase()
        projectDescriptionFooter.appendChild(span)
    }
    projectDescriptionDiv.appendChild(projectDescriptionFooter)

    projectDiv.append(projectThumbnailDiv, projectDescriptionDiv);

    projectsDiv.appendChild(projectDiv);
}

let projects = [
	{
        "title": "File Metadata Microservice",
        "thumbnailPath": "assets/file-metadata-microservice.png",
        "desc": "The File Metadata Microservice is an API that allows users to upload a file and receive its metadata, including the file name, type, and size in bytes.",
        "demoLink": "https://file-metadata-microservice.freecodecamp.rocks/",
        "github": "https://github.com/LahceneNouali/File-Metadata-Microservice",
        "technologies": ['Node.js', 'Express.js', 'Multer'],
        "tag": "backend"
    },
	{
        "title": "Exercise Tracker",
        "thumbnailPath": "assets/exercise-tracker.png",
        "desc": "The Exercise Tracker is a microservice API that allows users to create profiles, log exercise details, and retrieve their exercise logs with optional date range and limit filters.",
        "demoLink": "https://exercise-tracker.freecodecamp.rocks/",
        "github": "https://github.com/LahceneNouali/Exercise-Tracker",
        "technologies": ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
        "tag": "backend"
    },
	{
        "title": "URL Shortener Microservice",
        "thumbnailPath": "assets/url-shortener-microservice.png",
        "desc": "The URL Shortener Microservice is an API that converts long URLs into shortened versions and redirects users from the short URL to the original link.",
        "demoLink": "https://url-shortener-microservice.freecodecamp.rocks/",
        "github": "https://github.com/LahceneNouali/URL-Shortener-Microservice",
        "technologies": ['Node.js', 'Express.js'],
        "tag": "backend"
    },
	{
        "title": "Request Header Parser Microservice",
        "thumbnailPath": "assets/request-header-parser-microservice.png",
        "desc": "The Request Header Parser Microservice is an API that returns a JSON object containing the client's IP address, preferred language, and software information.",
        "demoLink": "https://request-header-parser-microservice.freecodecamp.rocks/",
        "github": "https://github.com/LahceneNouali/Request-Header-Parser-Microservice",
        "technologies": ['Node.js', 'Express.js'],
        "tag": "backend"
    },
	{
        "title": "Timestamp Microservice",
        "thumbnailPath": "assets/timestamp-microservice.png",
        "desc": "The Timestamp Microservice is an API that returns Unix and UTC timestamps for a given date or the current time. It helps practice date parsing and JSON response handling.",
        "demoLink": "https://timestamp-microservice.freecodecamp.rocks/",
        "github": "https://github.com/LahceneNouali/Timestamp-Microservice",
        "technologies": ['Node.js', 'Express.js'],
        "tag": "backend"
    }
]


const projectsDiv = document.getElementById('projects')
for (projectData of projects) {
    addProject(projectsDiv, projectData);
}


let filter_by_tag = function (tag) {
    document.querySelector('.active').classList.toggle('active');
    let filtered = projects.filter((p) => p.tag === tag || tag === 'all');
    let projects_div = document.querySelectorAll('.project-tile')
    for (let project of projects_div) {
        project.parentElement.removeChild(project);
    }
    for (projectData of filtered) {
        addProject(projectsDiv, projectData);
    }
    document.getElementById(tag).setAttribute('class', 'active');
}

document.getElementById('backend').addEventListener('click', function(event) {
    filter_by_tag('backend');
    event.preventDefault();
});

document.getElementById('frontend').addEventListener('click', function(event) {
    filter_by_tag('frontend');
    event.preventDefault();
});

document.getElementById('personal').addEventListener('click', function(event) {
    filter_by_tag('personal');
    event.preventDefault();
});

document.getElementById('all').addEventListener('click', function(event) {
    filter_by_tag('all');
    event.preventDefault();
});
