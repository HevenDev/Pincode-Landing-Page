function showPopup() {
    setTimeout(() => {
        const popupOverlay = document.getElementById("popupOverlay");
        popupOverlay.style.display = "flex";
        setTimeout(() => {
            popupOverlay.style.opacity = "1";
            document.querySelector(".popup").style.transform = "scale(1)";
        }, 50);
    }, 50);
}

function hidePopup() {
    const popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.opacity = "0";
    document.querySelector(".popup").style.transform = "scale(0.9)";
    
    setTimeout(() => {
        popupOverlay.style.display = "none";
    }, 300);
}

document.getElementById("openPopup").addEventListener("click", function (event) {
    event.preventDefault();
    showPopup();
});

document.querySelector(".rq-visit a").addEventListener("click", function (event) {
    event.preventDefault();
    showPopup();
});

document.getElementById("closePopup").addEventListener("click", hidePopup);

document.getElementById("popupOverlay").addEventListener("click", function (event) {
    if (event.target === this) {
        hidePopup();
    }
});

document.getElementById("projectForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    hidePopup();
    document.getElementById("projectForm").reset();
});


/* active underline on the respective page */

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navLinks li a");
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});
