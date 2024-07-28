const API_URL = 'https://e-learning-json-server.onrender.com';

if (window.location.pathname === '/index.html') {
    document.addEventListener('DOMContentLoaded', async () => {
        const response = await fetch('https://e-learning-json-server.onrender.com');
        const courses = await response.json();
        const coursesList = document.getElementById('coursesList');

        courses.forEach(course => {
            coursesList.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${course.image}" class="card-img-top" alt="${course.title}">
                        <div class="card-body">
                            <h5 class="card-title">${course.title}</h5>
                            <p class="card-text">Topics: ${course.topics.join(', ')}</p>
                            <p class="card-text">Seats Left: ${course.seats}</p>
                            <a href="course.html?id=${course.id}" class="btn btn-primary">View Course</a>
                        </div>
                    </div>
                </div>
            `;
        });
    });
}
