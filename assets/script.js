

const slider = document.querySelector('.slider');
let counter = 0;

function slide() {
    counter++;
    if (counter === 3) {
        counter = 0;
    }
    slider.style.transform = `translateX(${-counter * 50}%)`;
}

setInterval(slide, 3000);



document.addEventListener('click', function () {

    const homeLink = document.getElementById('home');
    const aboutLink = document.getElementById('about');
    const servicesLink = document.getElementById('services');

    homeLink.addEventListener('click', function () {
        console.log('Home link clicked!');
    });

    aboutLink.addEventListener('click', function () {
        console.log('About link clicked!');
    });

    servicesLink.addEventListener('click', function () {
        console.log('Services link clicked!');
    });

});


document.addEventListener('DOMContentLoaded', function () {
    const btnblog = document.getElementById('btn-blog');

    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
        const storedUser = JSON.parse(storedUserData);
        if (storedUser.loggedIn) {
            btnblog.addEventListener('click', function () {
                window.location.href = "blog.html";
                alert('Button Clicked!');
            });
        } else {
            alert("you are not logged In");
            window.location.href = "./authentication/login.html";
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const storedData = localStorage.getItem('userData');
    const login = document.getElementById('login');
    const logout = document.getElementById('logout');
    logout.style.display = 'none';

    if (storedData) {
        const userData = JSON.parse(storedData);
        login.innerHTML = `<p class="styled-username">${userData.username}</p>`;
        logout.style.display = 'block';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const storedData = localStorage.getItem('userData');
    const logout = document.getElementById('logout');

    if (logout) { // Check if the logout element exists
        logout.addEventListener("click", function () {
            localStorage.clear();
            console.log("Data cleared");
        });
    }
});




