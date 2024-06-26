import { navbar_HTML, navbar_Styles, navbar_js } from "../Components/Navbar.js";

const navbar = () => {
  const navbarH = document.getElementById("navbar");
  console.log(navbarH);
  navbarH.innerHTML = navbar_HTML();

  document.addEventListener("DOMContentLoaded", function () {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbar_Styles();
    document.head.appendChild(styleTag);

    // Move navbar_js() call inside the DOMContentLoaded event listener
    navbar_js();
  });
};

navbar();
