const ob = {
    Like: parseInt(localStorage.getItem("Like")) || 0,
    Comment: parseInt(localStorage.getItem("Comment")) || 0,
    Share: parseInt(sessionStorage.getItem("Share")) || 0,
    Save: parseInt(sessionStorage.getItem("Save")) || 0,
  };
  
  const plus = (e) => {
    const type = e.target.getAttribute("countType");
    const spanTag = e.target.querySelector("span");
    let counter = ob[type];
    console.log(counter, type, ob[type]);
    counter++;
    spanTag.innerHTML = counter;
  
    if (type === "Save" || type === "Share") {
      sessionStorage.setItem(type, counter);
    } else {
      localStorage.setItem(type, counter);
    }
  
    ob[type] = counter;
  };
  
  document.querySelector("#Like").addEventListener("click", plus);
  document.querySelector("#Comment").addEventListener("click", plus);
  document.querySelector("#Share").addEventListener("click", plus);
  document.querySelector("#Save").addEventListener("click", plus); 