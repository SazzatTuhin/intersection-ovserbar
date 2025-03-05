// const section = document.querySelectorAll("section");
// const nav = document.querySelector("nav");
// const navList = document.querySelectorAll(".nav-list li");

// const options = {
//   threshold: "0.6",
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((e) => {
//     if (e.isIntersecting) {
//       //changing navbar style on scroll to next section

//       if (e.target.id !== "base") {
//         nav.classList.add("active");
//       } else {
//         nav.classList.remove("active");
//       }

//       //section indicator
//       navList.forEach((link) => {
//         //to remove active class from other
//         link.classList.remove("active");

//         if (e.target.id === link.dataset.nav) {
//           link.classList.add("active");
//         }
//       });
//     }
//   });
// }, options);

// sections.forEach((section) => {
//   observer.observe(section);
// });

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const observerTarget = document.querySelector(".observer");

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    },
    { threshold: 0 }
  );

  observer.observe(observerTarget);
});
