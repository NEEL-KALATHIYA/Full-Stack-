let Add_data = JSON.parse(localStorage.getItem("Add_data")) || [];
let user = JSON.parse(localStorage.getItem("user"));

const uimaker = () => {
  document.getElementById("show_data").innerHTML = "";
  Add_data.map((item) => {
    let img = document.createElement("img");
    img.src = item.img;
    img.setAttribute("id", "img");

    let img_div = document.createElement("div");
    img_div.setAttribute("id", "news_img_div");
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

uimaker();
profile();
