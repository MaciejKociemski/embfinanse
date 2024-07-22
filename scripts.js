// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll("#navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top:
          targetSection.offsetTop -
          document.querySelector("#navbar").offsetHeight,
        behavior: "smooth",
      });
    });
  });
});
