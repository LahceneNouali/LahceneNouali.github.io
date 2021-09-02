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
        "title": "Django Boards",
        "thumbnailPath": "assets/django-boards.png",
        "desc": "This project is a discussion board (a forum). The whole idea is to maintain several boards, which will behave like categories.",
        "demoLink": "http://djangoboards.pythonanywhere.com/",
        "github": "https://github.com/lahcene13/django-discussion-board",
        "technologies": ['Python', 'Django', 'html', 'css', 'Postgres'],
        "tag": "tutorial"
    },
    {
        "title": "Photo Gallery App with Django",
        "thumbnailPath": "assets/django-gallery-app.jpg",
        "desc": "A photo album website with django on pythonanywhere.com.",
        "demoLink": "http://galleryapp.pythonanywhere.com/",
        "github": "https://github.com/lahcene13/django-gallery-app",
        "technologies": ['Python', 'Django', 'html', 'css', 'bootstrap'],
        "tag": "personal"
    },
    {
        "title": "Stack Overflow 2018 Developer Survey Analysis",
        "thumbnailPath": "assets/stackoverflow-analysis.png",
        "desc": " data exploration and visualization on the Stack-Overflow-2018-Developer-Survey.",
        "demoLink": "#",
        "github": "#",
        "technologies": ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn'],
        "tag": "personal"
    },
    {
        "title": "SearchEngine",
        "thumbnailPath": "assets/searchEngine.png",
        "desc": "Text Search Engine to search through text files.",
        "demoLink": "#",
        "github": "#",
        "technologies": ['Python', 'PyQt'],
        "tag": "university"
    },
    {
        "title": "Landing Page",
        "thumbnailPath": "assets/product-landing.png",
        "desc": "A product landing web page which is a project from the freecodecamp Resposive Web Design Certification.",
        "demoLink": "#",
        "github": "#",
        "technologies": ['html', 'css'],
        "tag": "freecodecamp"
    },
    {
        "title": "Technical Documentation",
        "thumbnailPath": "assets/technical-documentation.png",
        "desc": "A technical documentation web page which is a project from the freecodecamp Resposive Web Design Certification.",
        "demoLink": "#",
        "github": "#",
        "technologies": ['html', 'css'],
        "tag": "freecodecamp"
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

document.getElementById('university').addEventListener('click', function(event) {
    filter_by_tag('university');
    event.preventDefault();
});

document.getElementById('freecodecamp').addEventListener('click', function(event) {
    filter_by_tag('freecodecamp');
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
