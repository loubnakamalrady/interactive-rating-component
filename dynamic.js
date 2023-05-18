// Assigning variables
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-container");
const selectOut = document.querySelector(".selection");
const submitBtn = document.querySelector(".submit-button");
const selectRate = document.querySelector("#select");
const selectAll = document.querySelectorAll(".btnslct");

// EventListener where when the user click on submit button
// it hides the first container and showing the next container
submitBtn.addEventListener("click", () =>{
    // hiding main container
    mainContainer.style.display = "none";
    //displaying thanks container
    thanksContainer.classList.remove("hidden");
});

// EventListener which shows the rating selected by the user
// in the next page by adding it to the paragraph shown 
selectAll.forEach((theSelect) => {
    theSelect.addEventListener("click", () => {
        //assigning the numbers selected inside the buttons
        //to be printed out inside the span in the paragraph
        selectRate.innerHTML = theSelect.innerHTML;
    });
});



