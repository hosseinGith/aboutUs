const dropDownBtn = document.querySelector(".dropDown");

dropDownBtn.addEventListener("click", () =>
  dropDownBtn.parentElement.children[1].classList.toggle("active")
);
