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
    title.innerHTML = `News Title : ${item.title}`;

    let description = document.createElement("p");
    description.innerHTML = `Description : ${item.description}`;

    let country = document.createElement("h6");
    country.innerHTML = item.country;

    let btn1 = document.createElement("button");
    let count = parseInt(localStorage.getItem("count")) || 0;
    btn1.innerHTML = "Subscribe" + "</br>" + count;
    btn1.style.backgroundColor = "darkturquoise";

    btn1.addEventListener("click", () => {
      count++;

      btn1.innerHTML = "Subscribe<br>" + count;

      localStorage.setItem("count", count);

      alert("You Subscribed This News Channel!!");
    });

    let btn2 = document.createElement("button");
    btn2.innerHTML = "SHARE";
    btn2.style.backgroundColor = "darkturquoise";
    btn2.addEventListener("click", () => {
      alert("You Shared This News");
    });

    let btn_div = document.createElement("div");
    btn_div.append(btn1, btn2);

    btn_div.setAttribute("id", "btn_div");

    let box = document.createElement("div");
    box.append(img_div, title, description, country, btn_div, btn1);
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

  let country = document.createElement("h3");

  img.src = user.img;

  img.setAttribute("id", "profile_img");

  img_div.setAttribute("id", "profile_img_div");

  img_div.append(img);

  name.innerHTML = user.name;
  email.innerHTML = user.email;

  country.innerHTML = user.country;

  document.getElementById("profile").append(img_div, name, email, country);
};

uimaker();
profile();
