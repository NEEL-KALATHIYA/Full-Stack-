const handledata = (e) => {
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        img: document.getElementById("img").value,
        City: document.getElementById("city").value,
        password: document.getElementById("password").value
    }

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "index.html";
}

document.getElementById("sign_up").addEventListener("submit", handledata);