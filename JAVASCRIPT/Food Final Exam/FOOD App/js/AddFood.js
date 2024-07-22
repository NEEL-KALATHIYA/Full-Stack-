let Add_data = JSON.parse(localStorage.getItem("Add_data")) || [];

    const handledata = (e) => {
        e.preventDefault();

        let data = {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            img: document.getElementById("img").value,
            country: document.getElementById("country").value
        }
        Add_data.push(data);
        localStorage.setItem("Add_data", JSON.stringify(Add_data));
        window.location.href = "index.html";
    }

    document.getElementById("add_news").addEventListener("submit", handledata);