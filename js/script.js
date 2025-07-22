
const parking1Button = document.getElementById("parking1");
const parking2Button = document.getElementById("parking2");
const parking1Image = document.querySelector(".parking-img-1");
const parking2Image = document.querySelector(".parking-img-2");



parking1Button.addEventListener("click", () => {
    parking1Button.classList.remove("tab-white");
    parking2Button.classList.add("tab-white");
    parking1Image.style.position = "absolute";
    parking1Image.style.transform = "translateX(120%)";
    parking2Image.style.opacity = "100";
    parking2Image.style.position = "static";
    parking2Image.style.transform = "translateX(0)";
    parking1Image.style.opacity = "0";
})
parking2Button.addEventListener("click", () => {
    parking2Button.classList.remove("tab-white");
    parking1Button.classList.add("tab-white");
    parking2Image.style.position = "absolute";
    parking2Image.style.transform = "translateX(120%)";
    parking1Image.style.position = "static";
    parking1Image.style.transform = "translateX(0)";
    parking1Image.style.opacity = "100";
    parking2Image.style.opacity = "0";
})

