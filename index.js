

function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "root",
    Password : "root",
    To : 'simarjeet.singh@wsu.edu',
    From : document.getElementById('emailid').value,
    Subject : document.getElementById('subjecta').value,
    Body : document.getElementById('messagea').value
    }).then(
    message => alert('Message Sent Successfully')
    );
}


console.log('finally it is working ');

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Option Clicked: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'index.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    localStorage.setItem('theme', mode)
}

function toggleDarkMode() {
    var darkModeDot = document.getElementById('light-mode');
    var lightModeDot = document.getElementById('blue-mode');
    var themeText = document.getElementById('theme-text');

    if (darkModeDot.getAttribute('data-mode') === 'light') {
        darkModeDot.setAttribute('data-mode', 'dark');
        lightModeDot.setAttribute('data-mode', 'dark');
        themeText.textContent = "told you right";
        document.getElementById('theme-style').href = 'blue.css';
    } else {
        darkModeDot.setAttribute('data-mode', 'light');
        lightModeDot.setAttribute('data-mode', 'light');
        themeText.textContent = "dark theme is better!";
        document.getElementById('theme-style').href = 'index.css';
    }
}

function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "root",
    Password : "root",
    To : 'simarjeet.singh@wsu.edu',
    From : document.getElementById('emailid').value,
    Subject : document.getElementById('subjecta').value,
    Body : document.getElementById('messagea').value
    }).then(
    message => alert('Message Sent Successfully')
    );
}