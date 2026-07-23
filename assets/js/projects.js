'use strict';




const projectData = {
  outbreak: {
    title: "OutBreak",
    description: "OutBreak is a horror-inspired game built in Unity, developed with a teammate as part of a school design project. I designed the layout of the game's map, shaping the environment and spatial flow to build tension and guide player movement, and contributed to parts of the user interface.",
    images: [
      "./assets/images/outbreak_layout.jpg",
      "./assets/images/outbreak_still1.png",
      "./assets/images/outbreak_still2.png"
    ]
  },

  rytbookstore: {
    title: "RyT Bookstore",
    description: "RyT Bookstore is a full-stack e-commerce website built from scratch with a partner for a school project, using MySQL for the database and Apache Tomcat as the server environment. The site lets users browse and search for books, add items to a functional shopping cart, and complete purchases through a checkout page.",
    images: [
      "./assets/images/rytbookstore_still1.png",
      "./assets/images/rytbookstore_still2.png",
      "./assets/images/rytbookstore_still3.png"
    ]
  },

  bahoot: {
    title: "BaHoot!",
    description: "BaHoot! is a Kahoot-inspired Android mobile app co-created with a friend for a school design project. Users answer 5 trivia questions by selecting from multiple-choice options (A–D), with live statistics and results reflected on a companion web browser dashboard.",
    images: [
      "./assets/images/bahoot_still1.png",
      "./assets/images/bahoot_still2.png",
      "./assets/images/bahoot_still3.png",
      "./assets/images/bahoot_still4.png"
    ]
  }
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






const lightbox = document.querySelector("[data-lightbox]");
const lightboxImg = document.querySelector(".image-lightbox-img");
const lightboxCloseBtns = document.querySelectorAll("[data-lightbox-close]");

modalGallery.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    lightboxImg.src = e.target.src;
    lightboxImg.alt = e.target.alt;
    lightbox.classList.add("active");
  }
});

for (const btn of lightboxCloseBtns) {
  btn.addEventListener("click", function () {
    lightbox.classList.remove("active");
  });
}