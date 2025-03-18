document.getElementById("openPopup").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("popupOverlay").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popupOverlay").style.display = "none";
});

document.getElementById("projectForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("projectForm").reset();
});

document.querySelector(".rq-visit a").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("popupOverlay").style.display = "flex";
});