/*
Program name: hw2.js
Author: Ranya Taha
Date created: 03/25/2026
Date last edited: 3/27/2026
Version: 1.0
Description: JavaScript for patient registration form for homework #2
*/

// Display current date
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value; // Display the default slider value
    slider.oninput = function() {output.innerHTML = this.value;} // Update the current slider value (each time you drag the slider handle)

//DOB validation
function validateDob() {
    const dob = document.getElementById("dob");
    const errorMsg = document.getElementById("dob-error");

    let date = new Date(dob.value);
    let today = new Date();

    let maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() - 120);

    if (!dob.value) {
        errorMsg.innerHTML = "Date of birth is required.";
        return false;
    }

    if (date > today) {
        errorMsg.innerHTML = "Date of birth cannot be in the future.";
        dob.value = "";
        return false;
    } 
    else if (date < maxDate) {
        errorMsg.innerHTML = "Date of birth cannot be more than 120 years ago.";
        dob.value = "";
        return false;
    } 
    else {
        errorMsg.innerHTML = "";
        return true;
    }
}
    
//SSN validation
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    // Regular expression for SSN format: XXX-XX-XXXX
    const ssnR = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "SSN must be in the format XXX-XX-XXXX.";
         return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
    
}

//address 1 vaidation
function validateAddress() {
    let ad1 = document.getElementById("address1").value;

    console.log("Address:", ad1);
    console.log("Length:", ad1.length);

    if (ad1.trim().length < 2) {
        document.getElementById("address1-error").innerHTML = "Please enter your address.";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

//zip code validation
function validateZcode() {
    const zipInput = document.getElementById("zcode"); // get element
    const errorMsg = document.getElementById("zcode-error");

    let zip = zipInput.value.replace(/\D/g, ''); // clean input

    if (!zip) {
        errorMsg.innerHTML = "Zip code is required.";
        return false;
    }

    if (zip.length !== 5) {
        errorMsg.innerHTML = "Zip code must be 5 digits.";
        return false;
    }

    zipInput.value = zip; // update input
    errorMsg.innerHTML = "";
    return true;
}

//email validation
function validateEmail() {
    let email = document.getElementById("email").value;
    let emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //pattern for email validation

    if (email == "") {
        document.getElementById("email-error").innerHTML = "Email is required.";
        return false;

    } else if (!emailR.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        return false;

    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}


//phone number validation
function validatePnumber() {
    const phoneInput = document.getElementById("pnumber"); // input field
    const errorMsg = document.getElementById("pnumber-error"); // error span

    const phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length !==10) {
        errorMsg.innerHTML = "Phone number is required and must be 10 digits.";
        return false;
    }

    const formattedPhone =
    phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("pnumber-error").innerHTML = "";
    return true;
}

//username validation
function validateUname() {
    let uname = document.getElementById("uname").value;

    uname = uname.toLowerCase();
    document.getElementById("uname").value = uname;

    if (uname.length == 0) {
        document.getElementById("uname-error").innerHTML = "Username is required.";
        return false;

    } else if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = "Username cannot begin with a number.";
        return false;

    } else {
        let regex = /^[a-z0-9_]+$/;

        if (!regex.test(uname)) {
            document.getElementById("uname-error").innerHTML = "Username can only contain letters, numbers, or underscores.";
            return false;

        } else if (uname.length < 5) {  
            document.getElementById("uname-error").innerHTML = "Username must be at least 5 characters long.";
            return false;

        } else if (uname.length > 30) {
            document.getElementById("uname-error").innerHTML = "Username cannot be more than 30 characters long.";
            return false;

        } else {
            document.getElementById("uname-error").innerHTML = "";
            return true;
        }
    }
}

//password validation
function validatePassword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uname").value;

    //sets up and initializes an array to hold error messages
    const errorMessage = [];

    //checks if password is at least 8 characters long
    if (pword.length < 8) {
    errorMessage.push("Password must be at least 8 characters long.");
    }

    //check for lowercase letter
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Password must contain at least one lowercase letter.");
    } 
    //check for uppercase letter
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Password must contain at least one uppercase letter.");
    } 

    //check for lowercase letter
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Password must contain at least one number.");
    } 

    //check for special characters
    if (!pword.match(/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]/)) {
        errorMessage.push("Password must contain at least one special character.");
    } 

    //checks if username is the same as or contained in the password
    if (pword == uname || pword.includes(uname)) {
        errorMessage.push("Password cannot be the same as or contain the username.");
    }

    //displays error messages if there are any, otherwise clears the error message
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<div class="error">${message}</div>`)
    .join("");
}

//confirm password validation
function confirmPassword() {
    let pword1 = document.getElementById("pword").value;
    let pword2 = document.getElementById("con_pword").value;
    let msg = document.getElementById("con_password-error");

    // if empty then show nothing
    if (pword2 === "") {
        msg.innerHTML = "";
        return false;
    }

    // if mismatch then show red
    if (pword1 !== pword2) {
        msg.innerHTML = "Passwords do not match.";
        msg.style.color = "red";
        return false;
    } 
    
    // if match, ONLY show while typing (not after blur)
    else {
        if (document.activeElement.id === "con_pword") {
            msg.innerHTML = "Passwords match.";
            msg.style.color = "green"; //show color green when they match
        } else {
            msg.innerHTML = ""; //clears when you click away
        }
        return true;
    }
}

//re-display user input back to user (review button)
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class ='output'><th colspan = '3'>Your Information:</th>";
    for (i = 0; i < formcontent.length; i++) {  
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align = 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class = 'output data'>&#x2713;</td></tr>"
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align = 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class = 'output data'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align = 'right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class = 'output data'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("ShowInput").innerHTML = formoutput;
    }
}

//remove user input
function removeReview() {
    document.getElementById("ShowInput").innerHTML = "";

}