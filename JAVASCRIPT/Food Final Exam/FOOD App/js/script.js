let Add_data = JSON.parse(localStorage.getItem("Add_data")) || [];
let user = JSON.parse(localStorage.getItem("user"));

const uimaker = () => {
  document.getElementById("show_data").innerHTML = "";
  Add_data.map((item) => {
    let img = document.createElement("img");
    img.src = item.img;
    img.setAttribute("id", "img");

    let img_div = document.createElement("div");
    img_div.setAttribute("id", "Food_img_div");
    img_div.append(img);

    let title = document.createElement("h6");
    title.innerHTML = `Food Title : ${item.title}`;

    let Price = document.createElement("p");
    Price.innerHTML = `Price : ${item.Price}`;

    let city = document.createElement("h6");
    city.innerHTML = item.city;

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Order Now";
    btn2.style.backgroundColor = "darkturquoise";
    btn2.addEventListener("click", () => {
      alert("You Order Now This Food");
    });

    let btn_div = document.createElement("div");
    btn_div.append(btn2);

    btn_div.setAttribute("id", "btn_div");

    let box = document.createElement("div");
    box.append(img_div, title, Price, city, btn_div);
    box.setAttribute("id", "box");

    document.getElementById("show_data").append(box);
  });
};

const profile = () => {
  document.getElementById("profile").innerHTML = "";

  let img = document.createElement("img");

  let img_div = document.createElement("div");

  let name = document.createElement("h1");

  let email = document.createElement("h2");

  let city = document.createElement("h3");

  img.src = user.img;

  img.setAttribute("id", "profile_img");

  img_div.setAttribute("id", "profile_img_div");

  img_div.append(img);

  name.innerHTML = user.name;
  email.innerHTML = user.email;

  city.innerHTML = user.city;

  document.getElementById("profile").append(img_div, name, email, city);
};




const getCityName = async (lat, lng) => {
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
  const data = await response.json();
  console.log(data);
};

const HandlePrice = (order) => {
  let temp;
  if (order === "LTH") {
    temp = products.products.sort((a, b) => a.price - b.price);
  } else {
    temp = products.products.sort((a, b) => b.price - a.price);
  }
  ApiData({ products: temp });
};

const HandleFilter = (category) => {
  let filter = products.products.filter((ele) => ele.category === category);
  ApiData({ products: filter });
};

const HandleSearch = (value) => {
  let temp = products.products.filter((e) => e.title.includes(value));
  ApiData({ products: temp });
};

const HandleSearchData = (e) => {
  e.preventDefault();
  let value = document.getElementById("Search").value;
  HandleSearch(value);
};

const HandleLiveInput = () => {
  let value = document.getElementById("Search").value;
  HandleSearch(value);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("Search").addEventListener("keypress", HandleLiveInput);
  document.getElementById("Searching").addEventListener("submit", HandleSearchData);

  document.getElementById("Chainis").addEventListener("click", () => HandleFilter("Chainis"));
  document.getElementById("Indain").addEventListener("click", () => HandleFilter("Indain"));
  document.getElementById("Bangali").addEventListener("click", () => HandleFilter("Bangali"));

  document.getElementById("LTH").addEventListener("click", () => HandlePrice("LTH"));
  document.getElementById("HTL").addEventListener("click", () => HandlePrice("HTL"));
});








/*
const getCityName=async(lat, lng)=> {
  const response = await fetch(
  `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
  );
  const data = await response.json();
  console.log(data);
  
  }




const HandlePrice = (order) => {
  let temp;
  if (order === "LTH") {
      temp = products.products.sort((a, b) => a.price - b.price);
  } else {
      temp = products.products.sort((a, b) => b.price - a.price);
  }
  ApiData({ products: temp });
}



const HandleFilter = (category) => {
  let filter = products.products.filter((ele) => ele.category === category);
  ApiData({ products: filter });
}



const HandleSearch = (value) => {
  let temp = products.products.filter((e) => e.title.includes(value));
  ApiData({ products: temp });
}

const HandleSearchData = (e) => {
  e.preventDefault();
  let value = document.getElementById("Search").value;
  HandleSearch(value);
}

const HandleLiveInput = () => {
  let value = document.getElementById("Search").value;
  HandleSearch(value);
}

document.getElementById("Search").addEventListener("keypress", HandleLiveInput);
document.getElementById("Searching").addEventListener("submit", HandleSearchData);


document.getElementById("Chainis").addEventListener("click" , ()=> HandleFilter("Chainis"))
document.getElementById("Indain").addEventListener("click", ()=>  HandleFilter("Indain"))
document.getElementById("Bangali").addEventListener("click" ,()=>  HandleFilter("Bangali"))



document.getElementById("LTH").addEventListener("click", () => HandlePrice("LTH"));
document.getElementById("HTL").addEventListener("click", () => HandlePrice("HTL"));

*/

uimaker();
profile();
