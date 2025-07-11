// Theme management
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

// Email functionality
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "simarjeetss529@gmail.com",
        Password : "",
        To : 'simarjeet.singh@wsu.edu',
        From : document.getElementById('emailid').value,
        Subject : document.getElementById('subjecta').value,
        Body : document.getElementById('messagea').value
    }).then(
        message => {
            alert('Message Sent Successfully')
            document.getElementById('contact-form').reset()
        }
    );
}

console.log('Website loaded successfully! 🚀')
