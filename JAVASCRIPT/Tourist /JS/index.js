import { navbar_HTML } from "../Components/Navbar.js";
import { navbar_styles } from "../Components/Navbar.js";

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


const navbar = getElement("navbar");
navbar.innerHTML = navbar_styles();

const ProductList = JSON.parse(localStorage.getItem("productList")) || [];
const Product = getElement("product");

const UI_makker = (data) => {
  Product.innerHTML = "";
  data?.map((elem, index) => {
    const div = createElement("div", "", { class: "border  border-2" });
    const buyBtn = createElement("button", "Buy Now", {
      class: "btn btn-primary m-2",
    });
 
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

  UI_makker(searchProducts);
};

const click_Product = (index) => {
  localStorage.setItem("clickProduct", index);
  window.location.href = "product.html";
};

UI_makker(ProductList);
document.getElementById("ap").addEventListener("click", apFilter, true);
document.getElementById("search").addEventListener("submit", SearchData);


import { navbar_Components } from "../Components/Navbar.js";
import { getElement, getValue } from "../Components/helper.js";

const navbar = getElement("navbar");
navbar.innerHTML = navbar_Components();

const productForm = getElement("addProduct");
const ProductL = JSON.parse(localStorage.getItem("productL")) || [];
const productData = (event) => {
  event.preventDefault();
  const Title = getValue("Title");
  const Image = getValue("Image");
  const Description = getValue("Description");
  const Price = getValue("Price");

  const data = {
    Title: Title,
    Image: Image,
    Description: Description,
    id: ProductL.length,
    comment: [],
    like: 0,
    Price: Price,
  };
  ProductL.push(data);
  localStorage.setItem("productL", JSON.stringify(ProductL));
  productForm.reset();
};

productForm.addEventListener("submit", productData);