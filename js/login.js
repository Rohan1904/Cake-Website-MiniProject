function validate() {
    var uemail = document.getElementById("uemail").value;
    var upassword = document.getElementById("upassword").value;


    if (uemail == "") {
        alert("Email cannot be empty");
    }
    else if (upassword == "") {
        alert("Password cannot be empty");
    }
}

function validate2() {

    var uemail = document.getElementById("uemail").value;
    if (uemail == "") {
        alert("Email cannot be empty");
    }
}