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

function openWhats() {
    const numero = "5511984393259";
    window.open(`https://wa.me/${numero}`, "_blank");
}