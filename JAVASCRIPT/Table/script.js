let array = [];

const dataHandle = (event) => {
  event.preventDefault();

  data = {
    name: document.querySelector(".name").value,
    grid: Number(document.querySelector(".Grid").value),
    course: document.querySelector(".course").value,
  };

  array.push(data);

  UiMaker();
};

const UiMaker = () => {
  document.querySelector(".tbody").innerHTML = "";

  array.map((e, i) => {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerHTML = e.name;
    td2.innerHTML = e.grid;
    td3.innerHTML = e.course;
    td4.innerHTML = `<button id="Delete">Delete</button>`;

    let tr = document.createElement("tr");

    tr.append(td1, td2, td3, td4);
    document.querySelector(".tbody").append(tr);

    td4.addEventListener("click", () => Delete_Student_Data(i));
  });
};

const Delete_All = () => {
  array = [];
  document.querySelector(".tbody").innerHTML = "";
  UiMaker();
};

const Delete_Student_Data = (i) => {
  array.splice(i, 1);
  UiMaker();
};

document.getElementById("form").addEventListener("submit", dataHandle);
document.querySelector(".DeleteAll").addEventListener("click", Delete_All);
