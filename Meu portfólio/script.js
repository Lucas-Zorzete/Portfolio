function closeSidebar() {
    const sidebar = document.getElementById('sideBar');
    sidebar.style.display = "none";
}

function openSidebar() {
    const sidebar = document.getElementById('sideBar');
    sidebar.style.display = "flex";
}

function openInsta() {
    window.location.href = "https://www.instagram.com/luc4s_.r3is/";
}

function openGit() {
    window.location.href = "https://github.com/Lucas-Zorzete";
}

function toSectionProj() {
    const sectionProj = document.getElementById('projects');
    const sidebar = document.getElementById('sideBar');

    sectionProj.scrollIntoView({ behavior: "smooth" });
    sidebar.style.display = "none";
}

function toSectionHome() {
    const sectionProj = document.getElementById('home');
    const sidebar = document.getElementById('sideBar');

    sectionProj.scrollIntoView({ behavior: "smooth" });
    sidebar.style.display = "none";
}

function toSectionAbout() {
    const sectionAbout = document.getElementById('about');
    const sidebar = document.getElementById('sideBar');

    sectionAbout.scrollIntoView({ behavior: "smooth" });
    sidebar.style.display = "none";
}

function toSectionContact() {
    const sectionContact = document.getElementById('contact');
    const sidebar = document.getElementById('sideBar');

    sectionContact.scrollIntoView({ behavior: "smooth" });
    sidebar.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const btnHome = document.getElementById('btn-home');
    const btnProjects = document.getElementById('btn-projects');
    const btnAbout = document.getElementById('btn-about');
    const btnContact = document.getElementById('btn-contact');

    btnHome.addEventListener('click', () => {
        btnHome.classList.add('active');
        btnProjects.classList.remove('active');
        btnAbout.classList.remove('active');
        btnContact.classList.remove('active');
    }) 
    btnProjects.addEventListener('click', () => {
        btnHome.classList.remove('active');
        btnProjects.classList.add('active');
        btnAbout.classList.remove('active');
        btnContact.classList.remove('active');
    }) 
    btnAbout.addEventListener('click', () => {
        btnHome.classList.remove('active');
        btnProjects.classList.remove('active');
        btnAbout.classList.add('active');
        btnContact.classList.remove('active');
    }) 
    btnContact.addEventListener('click', () => {
        btnHome.classList.remove('active');
        btnProjects.classList.remove('active');
        btnAbout.classList.remove('active');
        btnContact.classList.add('active');
    }) 
}),

function sendWhats(event) {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const number = '5511984393259';
    
    const text = `Olá! Me chamo ${name}. ${message}`;
    const msgFormated = encodeURIComponent(text);
    
    const url = `https://whatsa.me/${number}/?t=${msgFormated}`;
    
    window.open(url, '_blank');
}