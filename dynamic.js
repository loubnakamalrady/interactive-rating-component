const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-container");
const selectOut = document.querySelector(".selection");
const submitBtn = document.querySelector(".submit-button");

submitBtn.addEventListener("click", () =>{
    mainContainer.style.display = "none";
    thanksContainer.classList.remove("hidden");
});

