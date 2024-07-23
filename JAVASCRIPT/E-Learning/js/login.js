document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch(`${API_URL}?email=${email}&password=${password}`);
    const users = await response.json();
    if (users.length > 0) {
        localStorage.setItem('user', JSON.stringify(users[0]));
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Login failed');
    }
});