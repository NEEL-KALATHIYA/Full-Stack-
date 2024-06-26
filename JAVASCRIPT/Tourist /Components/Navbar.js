const navbar_HTML = () => {
  return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/Exam/Tourist_Place/HTML/index.html"
          >Home</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                href="/Exam/Tourist_Place/HTML/addProduct.html"
                >Add Product</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login/Signup
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="/Exam/Tourist_Place/HTML/login.html"
                    >Login</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/Exam/Tourist_Place/HTML/signup.html"
                    >Signup</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search" id="searchForm">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="input-search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
      #product {
        display: grid !important;
        grid-template-columns: repeat(4, 280px);
        gap: 10px;
      }
      #apply {
        width: 120px !important;
        height: 50px !important;
        margin-top: 2%;
      }`;
};

const navbar_style = () => {
  return`body {
        overflow-x: hidden;
        font-family: "Roboto Slab","Helvetica Neue",Helvetica,Arial,sans-serif;
    }
    
    .text-muted {
        color: #777;
    }
    
    .text-primary {
        color: #1ee2e7;
    }
    
    p {
        font-size: 14px;
        line-height: 1.75;
    }
    
    p.large {
        font-size: 16px;
    }
    
    a,
    a:hover,
    a:focus,
    a:active,
    a.active {
        outline: 0;
    }
    
    a {
        color: #1ee2e7;
    }
    
    a:hover,
    a:focus,
    a:active,
    a.active {
        color: #17d0d5;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        text-transform: uppercase;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 700;
    }
    
    .img-centered {
        margin: 0 auto;
    }
    
    .bg-light-gray {
        background-color: #f7f7f7;
    }
    
    .bg-darkest-gray {
        background-color: #222;
    }
    
    .btn-primary {
        border-color: #1ee2e7;
        text-transform: uppercase;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 700;
        color: #fff;
        background-color: #1ee2e7;
    }
    
    .btn-primary:hover,
    .btn-primary:focus,
    .btn-primary:active,
    .btn-primary.active,
    .open .dropdown-toggle.btn-primary {
        border-color: #17d0d5;
        color: #fff;
        background-color: #17d0d5;
    }
    
    .btn-primary:active,
    .btn-primary.active,
    .open .dropdown-toggle.btn-primary {
        background-image: none;
    }
    
    .btn-primary.disabled,
    .btn-primary[disabled],
    fieldset[disabled] .btn-primary,
    .btn-primary.disabled:hover,
    .btn-primary[disabled]:hover,
    fieldset[disabled] .btn-primary:hover,
    .btn-primary.disabled:focus,
    .btn-primary[disabled]:focus,
    fieldset[disabled] .btn-primary:focus,
    .btn-primary.disabled:active,
    .btn-primary[disabled]:active,
    fieldset[disabled] .btn-primary:active,
    .btn-primary.disabled.active,
    .btn-primary[disabled].active,
    fieldset[disabled] .btn-primary.active {
        border-color: #1ee2e7;
        background-color: #1ee2e7;
    }
    
    .btn-primary .badge {
        color: #1ee2e7;
        background-color: #fff;
    }
    
    .btn-xl {
        padding: 20px 40px;
        border-color: #1ee2e7;
        border-radius: 3px;
        text-transform: uppercase;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        background-color: #1ee2e7;
    }
    
    .btn-xl:hover,
    .btn-xl:focus,
    .btn-xl:active,
    .btn-xl.active,
    .open .dropdown-toggle.btn-xl {
        border-color: #17d0d5;
        color: #fff;
        background-color: #17d0d5;
    }
    
    .btn-xl:active,
    .btn-xl.active,
    .open .dropdown-toggle.btn-xl {
        background-image: none;
    }
    
    .btn-xl.disabled,
    .btn-xl[disabled],
    fieldset[disabled] .btn-xl,
    .btn-xl.disabled:hover,
    .btn-xl[disabled]:hover,
    fieldset[disabled] .btn-xl:hover,
    .btn-xl.disabled:focus,
    .btn-xl[disabled]:focus,
    fieldset[disabled] .btn-xl:focus,
    .btn-xl.disabled:active,
    .btn-xl[disabled]:active,
    fieldset[disabled] .btn-xl:active,
    .btn-xl.disabled.active,
    .btn-xl[disabled].active,
    fieldset[disabled] .btn-xl.active {
        border-color: #1ee2e7;
        background-color: #1ee2e7;
    }
    
    .btn-xl .badge {
        color: #fed136;
        background-color: #fff;
    }
    
    .navbar-default {
        border-color: transparent;
        background-color: #222;
    }
    
    .navbar-default .navbar-brand {
        font-family: "Kaushan Script","Helvetica Neue",Helvetica,Arial,cursive;
        color: #1ee2e7;
    }
    
    .navbar-default .navbar-brand:hover,
    .navbar-default .navbar-brand:focus,
    .navbar-default .navbar-brand:active,
    .navbar-default .navbar-brand.active {
        color: #fec503;
    }
    
    .navbar-default .navbar-collapse {
        border-color: rgba(255,255,255,.02);
    }
    
    .navbar-default .navbar-toggle {
        border-color: #1ee2e7;
        background-color: #1ee2e7;
    }
    
    .navbar-default .navbar-toggle .icon-bar {
        background-color: #fff;
    }
    
    .navbar-default .navbar-toggle:hover,
    .navbar-default .navbar-toggle:focus {
        background-color: #1ee2e7;
    }
    
    .navbar-default .nav li a {
        text-transform: uppercase;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 400;
        letter-spacing: 1px;
        color: #fff;
    }
    
    .navbar-default .nav li a:hover,
    .navbar-default .nav li a:focus {
        outline: 0;
        color: #1ee2e7;
    }
    
    .navbar-default .navbar-nav>.active>a {
        border-radius: 0;
        color: #fff;
        background-color: #1ee2e7;
    }
    
    .navbar-default .navbar-nav>.active>a:hover,
    .navbar-default .navbar-nav>.active>a:focus {
        color: #fff;
        background-color: #17d0d5;
    }
    
    @media(min-width:768px) {
        .navbar-default {
            padding: 25px 0;
            border: 0;
            background-color: transparent;
            -webkit-transition: padding .3s;
            -moz-transition: padding .3s;
            transition: padding .3s;
        }
    
        .navbar-default .navbar-brand {
            font-size: 2em;
            -webkit-transition: all .3s;
            -moz-transition: all .3s;
            transition: all .3s;
        }
    
        .navbar-default .navbar-nav>.active>a {
            border-radius: 3px;
        }
    
        .navbar-default.navbar-shrink {
            padding: 10px 0;
            background-color: #222;
        }
    
        .navbar-default.navbar-shrink .navbar-brand {
            font-size: 1.5em;
        }
    }
    
    header {
        text-align: center;
        color: #fff;
        background-attachment: scroll;
        background-image: url(https://unsplash.imgix.net/uploads%2F14115408840644deb16b0%2F2dc933e3?q=75&fm=jpg&auto=format&s=7f43646e4d26049c6c39890afb2e5ced);
        background-position: center center;
        background-repeat: none;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        -o-background-size: cover;
    }
    
    header .intro-text {
        padding-top: 100px;
        padding-bottom: 50px;
    }
    
    header .intro-text .intro-lead-in {
        margin-bottom: 25px;
        font-family: "Droid Serif","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 22px;
        font-style: italic;
        line-height: 22px;
    }
    
    header .intro-text .intro-heading {
        margin-bottom: 25px;
        text-transform: uppercase;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 50px;
        font-weight: 700;
        line-height: 50px;
    }
    
    @media(min-width:768px) {
        header .intro-text {
            padding-top: 300px;
            padding-bottom: 200px;
        }
    
        header .intro-text .intro-lead-in {
            margin-bottom: 25px;
            font-family: "Droid Serif","Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 40px;
            font-style: italic;
            line-height: 40px;
        }
    
        header .intro-text .intro-heading {
            margin-bottom: 50px;
            text-transform: uppercase;
            font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 75px;
            font-weight: 700;
            line-height: 75px;
        }
    }
    
    section {
        padding: 100px 0;
    }
    
    section h2.section-heading {
        margin-top: 0;
        margin-bottom: 15px;
        font-size: 40px;
    }
    
    section h3.section-subheading {
        margin-bottom: 75px;
        text-transform: none;
        font-family: "Droid Serif","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-style: italic;
        font-weight: 400;
    }
    
    @media(min-width:768px) {
        section {
            padding: 150px 0;
        }
    }
    
    .service-heading {
        margin: 15px 0;
        text-transform: none;
    }
    
    #portfolio .portfolio-item {
        right: 0;
        margin: 0 0 15px;
    }
    
    #portfolio .portfolio-item .portfolio-link {
        display: block;
        position: relative;
        margin: 0 auto;
        max-width: 400px;
    }
    
    #portfolio .portfolio-item .portfolio-link .portfolio-hover {
        position: absolute;
        width: 100%;
        height: 100%;
        /* opacity: 0; */
        background-color: #1ee2e7;
        opacity: 0;
        -webkit-transition: all ease .5s;
        -moz-transition: all ease .5s;
        transition: all ease .5s;
    }
    
    #portfolio .portfolio-item .portfolio-link .portfolio-hover:hover {
        opacity: 0.3;
    }
    
    #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {
        position: absolute;
        top: 50%;
        width: 100%;
        height: 20px;
        margin-top: -12px;
        text-align: center;
        font-size: 20px;
        color: #fff;
    }
    
    #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i {
        margin-top: -12px;
    }
    
    #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,
    #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4 {
        margin: 0;
    }
    
    #portfolio .portfolio-item .portfolio-caption {
        margin: 0 auto;
        padding: 25px;
        max-width: 400px;
        text-align: center;
        background-color: #fff;
    }
    
    #portfolio .portfolio-item .portfolio-caption h4 {
        margin: 0;
        text-transform: none;
    }
    
    #portfolio .portfolio-item .portfolio-caption p {
        margin: 0;
        font-family: "Droid Serif","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-style: italic;
    }
    
    #portfolio * {
        z-index: 2;
    }
    
    @media(min-width:767px) {
        #portfolio .portfolio-item {
            margin: 0 0 30px;
        }
    }
    
    .timeline {
        position: relative;
        padding: 0;
        list-style: none;
    }
    
    .timeline:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 40px;
        width: 2px;
        margin-left: -1.5px;
        background-color: #f1f1f1;
    }
    
    .timeline>li {
        position: relative;
        margin-bottom: 50px;
        min-height: 50px;
    }
    
    .timeline>li:before,
    .timeline>li:after {
        content: " ";
        display: table;
    }
    
    .timeline>li:after {
        clear: both;
    }
    
    .timeline>li .timeline-panel {
        float: right;
        position: relative;
        width: 100%;
        padding: 0 20px 0 100px;
        text-align: left;
    }
    
    .timeline>li .timeline-panel:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
    }
    
    .timeline>li .timeline-panel:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
    }
    
    .timeline>li .timeline-image {
        z-index: 100;
        position: absolute;
        left: 0;
        width: 80px;
        height: 80px;
        margin-left: 0;
        border: 7px solid #f1f1f1;
        border-radius: 100%;
        text-align: center;
        color: #fff;
        background-color: #1ee2e7;
    }
    
    .timeline>li .timeline-image h4 {
        margin-top: 12px;
        font-size: 10px;
        line-height: 14px;
    }
    
    .timeline>li.timeline-inverted>.timeline-panel {
        float: right;
        padding: 0 20px 0 100px;
        text-align: left;
    }
    
    .timeline>li.timeline-inverted>.timeline-panel:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
    }
    
    .timeline>li.timeline-inverted>.timeline-panel:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
    }
    
    .timeline>li:last-child {
        margin-bottom: 0;
    }
    
    .timeline .timeline-heading h4 {
        margin-top: 0;
        color: inherit;
    }
    
    .timeline .timeline-heading h4.subheading {
        text-transform: none;
    }
    
    .timeline .timeline-body>p,
    .timeline .timeline-body>ul {
        margin-bottom: 0;
    }
    
    @media(min-width:768px) {
        .timeline:before {
            left: 50%;
        }
    
        .timeline>li {
            margin-bottom: 100px;
            min-height: 100px;
        }
    
        .timeline>li .timeline-panel {
            float: left;
            width: 41%;
            padding: 0 20px 20px 30px;
            text-align: right;
        }
    
        .timeline>li .timeline-image {
            left: 50%;
            width: 100px;
            height: 100px;
            margin-left: -50px;
        }
    
        .timeline>li .timeline-image h4 {
            margin-top: 16px;
            font-size: 13px;
            line-height: 18px;
        }
    
        .timeline>li.timeline-inverted>.timeline-panel {
            float: right;
            padding: 0 30px 20px 20px;
            text-align: left;
        }
    }
    
    @media(min-width:992px) {
        .timeline>li {
            min-height: 150px;
        }
    
        .timeline>li .timeline-panel {
            padding: 0 20px 20px;
        }
    
        .timeline>li .timeline-image {
            width: 150px;
            height: 150px;
            margin-left: -75px;
        }
    
        .timeline>li .timeline-image h4 {
            margin-top: 30px;
            font-size: 18px;
            line-height: 26px;
        }
    
        .timeline>li.timeline-inverted>.timeline-panel {
            padding: 0 20px 20px;
        }
    }
    
    @media(min-width:1200px) {
        .timeline>li {
            min-height: 170px;
        }
    
        .timeline>li .timeline-panel {
            padding: 0 20px 20px 100px;
        }
    
        .timeline>li .timeline-image {
            width: 170px;
            height: 170px;
            margin-left: -85px;
        }
    
        .timeline>li .timeline-image h4 {
            margin-top: 40px;
        }
    
        .timeline>li.timeline-inverted>.timeline-panel {
            padding: 0 100px 20px 20px;
        }
    }
    
    .team-member {
        margin-bottom: 50px;
        text-align: center;
    }
    
    .team-member img {
        margin: 0 auto;
        border: 7px solid #fff;
    }
    
    .team-member h4 {
        margin-top: 25px;
        margin-bottom: 0;
        text-transform: none;
    }
    
    .team-member p {
        margin-top: 0;
    }
    
    
    section#contact {
        background-color: #222;
        background-image: url(https://unsplash.imgix.net/44/C3EWdWzT8imxs0fKeKoC_blackforrest.JPG?q=75&fm=jpg&auto=format&s=986aaa92169d4e97975fa66ebd60bafd);
        background-position: center;
        background-repeat: no-repeat;
    }
    
    section#contact .section-heading {
        color: #fff;
    }
    
    section#contact .form-group {
        margin-bottom: 25px;
    }
    
    section#contact .form-group input,
    section#contact .form-group textarea {
        padding: 20px;
    }
    
    section#contact .form-group input.form-control {
        height: auto;
    }
    
    section#contact .form-group textarea.form-control {
        height: 236px;
    }
    
    section#contact .form-control:focus {
        border-color: #1ee2e7;
        box-shadow: none;
    }
    
    section#contact::-webkit-input-placeholder {
        text-transform: uppercase;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 700;
        color: #bbb;
    }
    
    section#contact:-moz-placeholder {
        text-transform: uppercase;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 700;
        color: #bbb;
    }
    
    section#contact::-moz-placeholder {
        text-transform: uppercase;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 700;
        color: #bbb;
    }
    
    section#contact:-ms-input-placeholder {
        text-transform: uppercase;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 700;
        color: #bbb;
    }
    
    section#contact .text-danger {
        color: #e74c3c;
    }
    
    footer {
        padding: 25px 0;
        text-align: center;
    }
    
    footer span.copyright {
        text-transform: uppercase;
        text-transform: none;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        line-height: 40px;
    }
    
    footer ul.quicklinks {
        margin-bottom: 0;
        text-transform: uppercase;
        text-transform: none;
        font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
        line-height: 40px;
    }
    
    ul.social-buttons {
        margin-bottom: 0;
    }
    
    ul.social-buttons li a {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        font-size: 20px;
        line-height: 40px;
        outline: 0;
        color: #fff;
        background-color: #222;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        transition: all .3s;
    }
    
    ul.social-buttons li a:hover,
    ul.social-buttons li a:focus,
    ul.social-buttons li a:active {
        background-color: #1ee2e7;
    }
    
    .btn:focus,
    .btn:active,
    .btn.active,
    .btn:active:focus {
        outline: 0;
    }
    
    .portfolio-modal .modal-content {
        padding: 100px 0;
        min-height: 100%;
        border: 0;
        border-radius: 0;
        text-align: center;
        background-clip: border-box;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    
    .portfolio-modal .modal-content h2 {
        margin-bottom: 15px;
        font-size: 3em;
    }
    
    .portfolio-modal .modal-content p {
        margin-bottom: 30px;
    }
    
    .portfolio-modal .modal-content p.item-intro {
        margin: 20px 0 30px;
        font-family: "Droid Serif","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-style: italic;
    }
    
    .portfolio-modal .modal-content ul.list-inline {
        margin-top: 0;
        margin-bottom: 30px;
    }
    
    .portfolio-modal .modal-content img {
        margin-bottom: 30px;
    }
    
    .portfolio-modal .close-modal {
        position: absolute;
        top: 25px;
        right: 25px;
        width: 75px;
        height: 75px;
        background-color: transparent;
        cursor: pointer;
    }
    
    .portfolio-modal .close-modal:hover {
        opacity: .3;
    }
    
    .portfolio-modal .close-modal .lr {
        z-index: 1051;
        width: 1px;
        height: 75px;
        margin-left: 35px;
        background-color: #222;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    
    .portfolio-modal .close-modal .lr .rl {
        z-index: 1052;
        width: 1px;
        height: 75px;
        background-color: #222;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    
    ::-moz-selection {
        text-shadow: none;
        background: #1ee2e7;
    }
    
    ::selection {
        text-shadow: none;
        background: #1ee2e7;
    }
    
    img::selection {
        background: 0 0;
    }
    
    img::-moz-selection {
        background: 0 0;
    }`
}

const addProduct = () => {

const createElement = (tag, innerHTML = "", attributes = {}) => {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
};

const getValue = (id) => {
  return document.getElementById(id).value;
};

const getElement = (id) => {
  return document.getElementById(id);
};


const navbar = getElement("navbar");
navbar.innerHTML = navbar_HTML();

const ProductList = JSON.parse(localStorage.getItem("productList")) || [];
const Product = getElement("product");

const UI_Product = (data) => {
  Product.innerHTML = "";
  data?.map((elem, index) => {
    const div = createElement("div", "", { class: "border  border-2" });
    const buyBtn = createElement("button", "Buy Now", {
      class: "btn btn-primary m-2",
    });
    const likeBtn = createElement("button", `Like => ${elem.like}`, {
      class: "btn btn-danger m-2",
    });
    div.append(
      createElement("img", "", { src: elem.images[0], class: "img-fluid" }),
      createElement("p", `${elem.title}`, { class: "m-2" }),
      createElement("p", `${elem.description}`, { class: "m-2" }),
      createElement("p", `Price : <span class="fw-bold">${elem.price}</span>`, {
        class: "m-2",
      }),
      buyBtn,
      likeBtn
    );
    Product.append(div);
    likeBtn.addEventListener("click", () => {
      elem.like++;
      likeBtn.innerHTML = `Like => ${elem.like}`;
      localStorage.setItem("productList", JSON.stringify(ProductList));
    });
    div.addEventListener("click", () => click_Product(index));
  });
};
const applyFilter = (event) => {
  console.log("starting..");
  event.preventDefault();
  const selectedPrice = document.querySelector(
    'input[name="Price"]:checked'
  )?.value;
  const selectedLike = document.querySelector(
    'input[name="Like"]:checked'
  )?.value;
  const sortProducts = (products, sortOrder) => {
    if (sortOrder === "HTL") {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "LTH") {
      return products.sort((a, b) => a.price - b.price);
    }
    return products;
  };
  const LikeProducts = (products, sortOrder) => {
    if (sortOrder === "HTL") {
      return products.sort((a, b) => b.like - a.like);
    } else if (sortOrder === "LTH") {
      return products.sort((a, b) => a.like - b.like);
    }
    return products;
  };
  const likeProducts = LikeProducts(ProductList, selectedLike);
  const sortedProducts = sortProducts(likeProducts, selectedPrice);
  console.log(likeProducts, sortedProducts);
  UI_Product(sortedProducts);
};

const SearchData = (event) => {
  event.preventDefault();
  const search_Value = getValue("input-search");

  const handleSearchData = (value) => {
    return ProductList.filter((ele) => ele.title.includes(value));
  };
  const searchProducts = handleSearchData(search_Value);

  UI_Product(searchProducts);
};

const click_Product = (index) => {
  localStorage.setItem("clickProduct", index);
  window.location.href = "product.html";
};

UI_Product(ProductList);
document.getElementById("apply").addEventListener("click", applyFilter, true);
document.getElementById("searchForm").addEventListener("submit", SearchData);
}
export { navbar_HTML ,navbar_style,addProduct};
