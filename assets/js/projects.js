'use strict';




const projectData = {
  outbreak: {
    title: "OutBreak",
    description: "OutBreak is a horror-inspired game built in Unity, developed with a teammate as part of a school design project. I designed the layout of the game's map, shaping the environment and spatial flow to build tension and guide player movement, and contributed to parts of the user interface.",
    images: [
      "./assets/images/outbreak_layout.png",
      "./assets/images/outbreak_still1.png",
      "./assets/images/outbreak_still2.png"
    ]
  },
  finance: {
    title: "Finance",
    description: "Add your description here.",
    images: [
      "./assets/images/finance-1.png"
    ]
  }
  // add the rest of your projects here, keyed by data-project value
};





const modal = document.querySelector("[data-modal]");
const modalCloseBtns = document.querySelectorAll("[data-modal-close]");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalGallery = document.querySelector(".modal-gallery");

const projectLinks = document.querySelectorAll(".project-link");

for (const link of projectLinks) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const key = this.dataset.project;
    const data = projectData[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalGallery.innerHTML = data.images
      .map(src => `<img src="${src}" alt="${data.title}" loading="lazy">`)
      .join("");

    modal.classList.add("active");
  });
}

for (const btn of modalCloseBtns) {
  btn.addEventListener("click", function () {
    modal.classList.remove("active");
  });
}
