import { navbar_HTML, navbar_js, navbar_styles } from "../Components/Navbar.js";

const navbar = () => {
  const navbarH = document.getElementById("navbar");
  console.log(navbarH);
  navbarH.innerHTML = navbar_HTML();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbar_styles();
    document.head.appendChild(styleTag);

    navbar_js();
  });
};

navbar();