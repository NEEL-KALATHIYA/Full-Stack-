// document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     const response = await fetch(`${API_URL}?email=${email}&password=${password}`);
//     const users = await response.json();
//     if (users.length > 0) {
//         localStorage.setItem('user', JSON.stringify(users[0]));
//         alert('Login successful!');
//         window.location.href = 'index.html';
//     } else {
//         alert('Login failed');
//     }
// });



document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const role = document.getElementById("signupRole").value;

        const user = {
            username,
            email,
            password,
            role
        };

        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                alert("Signup successful!");
                signupForm.reset();
            } else {
                alert("Signup failed!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        try {
            const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
            const users = await response.json();
            if (users.length > 0) {
                alert("Login successful!");
                loginForm.reset();
            } else {
                alert("Invalid email or password!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
