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
