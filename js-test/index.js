let sum_of_salary=0;
let arr=[]
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();


    console.log("submit");


    let a = document.getElementById("name").value
    let b = document.getElementById("job").value
    let c = document.getElementById("department").value
    let d = document.getElementById("salary").value
    let f = document.getElementById("email").value
    let g = document.getElementById("experience").value
    let h = document.getElementById("role").value
    let i = document.getElementById("fire").value


    let data = {
        name: a,
        job: b,
        department: c,
        salary: d,
        email: f,
        experience: g,
        role: h,
        fire: i,
    }
    


    console.log(data);


    let table = document.createElement("tr")


    let th1 = document.createElement("th")
    th1.innerHTML = data.name

    let th2 = document.createElement("th")
    th2.innerHTML = data.job


    let th3 = document.createElement("th")
    th3.innerHTML = data.department


    let th4 = document.createElement("th")
    th4.innerHTML = data.salary


    let th5 = document.createElement("th")
    th5.innerHTML = data.email


    let th6 = document.createElement("th")
    th6.innerHTML=data.experience



    let th7 = document.createElement("th")
    if (data.role <=5)
    {
        th7.innerHTML="Junior"
    }
    else
    {
        th7.innerHTML="Senior"
    }

    let th8 = document.createElement("th")
    th8.innerHTML = "Delete"
    th8.setAttribute("class", "delete")
    td8.addEventListener("click", () => deletData(i))
        td8.setAttribute("id", "deleteItem")


    table.append(th1, th2, th3, th4, th5, th6, th7, th8);
    document.querySelector("tbody").append(table);


})