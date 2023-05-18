const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-container");
const selectOut = document.querySelector(".selection");
const submitBtn = document.querySelector(".submit-button");
const selectRate = document.querySelector("#select");
const selectAll = document.querySelectorAll(".btnslct");

submitBtn.addEventListener("click", () =>{
    mainContainer.style.display = "none";
    thanksContainer.classList.remove("hidden");
});

selectAll.forEach((theSelect) => {
    theSelect.addEventListener("click", () => {
        selectRate.innerHTML = theSelect.innerHTML;
    });
});

selectRate



