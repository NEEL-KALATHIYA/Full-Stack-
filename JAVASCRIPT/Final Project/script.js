// const addEventOnElem = (elem, type, callback) => {
//   if (elem.length) {
//     for (let i = 0; i < elem.length; i++) {
//       elem[i].addEventListener(type, callback);
//     }
//   } else {
//     // elem.addEventListener(type, callback);
//   }
// };

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

// addEventOnElem(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElemOnScroll); // Directly add event listener to the window

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedBtn = filterBtn[0];

// const filter = function () {
//   lastClickedBtn.classList.remove("active");
//   this.classList.add("active");
//   lastClickedBtn = this;

//   for (let i = 0; i < filterItems.length; i++) {
//     if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
//       filterItems[i].style.display = "block";
//     } else {
//       filterItems[i].style.display = "none";
//     }
//   }
// };

// addEventOnElem(filterBtn, "click", filter);

$(document).ready(() => {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
console.log(signupForm);
// document.getElementById("signupForm").addEventListener("submit", async (e) => {
//   e.preventDefault();
//
// });

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch(
      `http://localhost:8080/users?email=${email}&password=${password}`
    ); // Ensure the correct endpoint
    const users = await response.json();
    if (users.length > 0) {
      alert("Login successful!");
      localStorage.setItem("user", JSON.stringify(users[0])); // Store the user data in localStorage
      loginForm.reset();
      window.location.href = "index.html"; // Redirect to the homepage after successful login
    } else {
      alert("Invalid email or password!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

let sign = document.getElementById("signupForm");
sign.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form submitted");
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const user = {
    username,
    email,
    password,
  };

  try {
    await fetch("http://localhost:8080/users", {
      // Ensure the correct endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    alert("Signup successful!");
  } catch (error) {
    console.error("Error:", error);
  }
});
console.log(sign);
