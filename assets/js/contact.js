'use strict';

const form = document.querySelector("[data-form]");
const formSuccessMsg = document.querySelector("[data-form-success]");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  })
    .then(response => {
      if (response.ok) {
        form.reset();
        formSuccessMsg.classList.add("active");

        // hide message again after a few seconds
        setTimeout(() => {
          formSuccessMsg.classList.remove("active");
        }, 5000);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Oops! Something went wrong. Please try again.");
    });
});
