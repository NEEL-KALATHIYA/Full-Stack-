let song = [
    {
        image: "https://c.saavncdn.com/168/Peele-Peele-O-More-Raja-Tapori-Mix-Hindi-2022-20220702045823-500x500.jpg",
        name: "Peele Peele",
        audio: '/JAVASCRIPT/Music/songs/Peele Peele.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/1.jpg",
        name: "Warriyo - Mortals",
        audio: '/JAVASCRIPT/Music/songs/1.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/2.jpg",
        name: "Cielo - Huma-Huma",
        audio: '/JAVASCRIPT/Music/songs/2.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/3.jpg",
        name: "DEAF KEV",
        audio: '/JAVASCRIPT/Music/songs/3.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/4.jpg",
        name: "Different Heaven",
        audio: '/JAVASCRIPT/Music/songs/4.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/5.jpg",
        name: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
        audio: '/JAVASCRIPT/Music/songs/5.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/6.jpg",
        name: "Rabba - Salam-e-Ishq",
        audio: '/JAVASCRIPT/Music/songs/6.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/7.jpg",
        name: "Sakhiyaan - Salam-e-Ishq",
        audio: '/JAVASCRIPT/Music/songs/7.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/8.jpg",
        name: "Bhula Dena - Salam-e-Ishq",
        audio: '/JAVASCRIPT/Music/songs/8.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/9.jpg",
        name: "Tumhari Kasam - Salam-e-Ishq",
        audio: '/JAVASCRIPT/Music/songs/9.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },
    {
        image: "./covers/10.jpg",
        name: "Na Jaana - Salam-e-Ishq",
        audio: '/JAVASCRIPT/Music/songs/10.mp3',
        icon: `<i class="fa-solid fa-play"></i>`
    },

]

const handleData = (e) => {
    document.getElementById("imageBig").src = e.image;

    let aud = document.getElementById("btt");
    aud.src = e.audio;

    let playIcon = document.querySelector('.iconparent i');
    if (playIcon) {
        // playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    }
}

const Mapper = (audios) => {
    audios.map((ele) => {
        let div = document.createElement("div");
        div.classList.add("divMain");

        let image = document.createElement("img");
        image.src = ele.image;
        image.classList.add("img-fluid", "images");

        let name = document.createElement("h2");
        name.innerHTML = ele.name;

        let hr = document.createElement("hr")
        let iconParent = document.createElement("div");
        iconParent.classList.add("iconparent")
        iconParent.innerHTML = ele.icon;
        iconParent.addEventListener("click", () => handleData(ele));

        div.append(image, name, iconParent);
        document.getElementById("songPlayer").append(div, hr);

    })
}

Mapper(song);
