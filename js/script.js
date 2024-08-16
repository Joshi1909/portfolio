function myMenuFunction(){
    var menubtn = document.getElementById("myNavMenu");

    if(menuBth.className==="nav-menu"){
        menuBth.className += "responsive";
    }else{
        menubth.className="nav-menu";
    }
}
/*----dark mode----*/

const body=document.querySelector("body"),
    toggleSwitch=document.getElementById("toggle-switch")
    
toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
})

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (subject === "") {
        alert("Please enter the subject.");
        return false;
    }
    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    // If validation passes, send the data to the server
    sendEmail(name, email, subject, message);
    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function sendEmail(name, email, subject, message) {
    const xhr = new XMLHttpRequest();
    const url = "send_email.php";
    const params = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`;

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);  // Handle success or error messages
        }
    };
    xhr.send(params);
}

