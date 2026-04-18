/*
Program name: hw3.js
Author: Ranya Taha
Date created: 04/01/2026
Date last edited: 04/17/2026
Version: 1.0
Description: JavaScript for patient registration form for homework #3
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

//first name validate js code
function validateFname() {
    let fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; // Regular expression for letters only
    //checks if the first name field is empty
    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name is required.";
        return false;
    } 
    //checks if the first name contains only letters
    else if (fname !="") {
    if (!fname.match(namePattern)) { //checks if first name matches the regular expression pattern
        document.getElementById("fname-error").innerHTML = "First name can only contain letters, apostrophes, and dashes.";
        return false;
    } else if (fname.length < 2) { //checks if the first name is at least 2 characters long
        document.getElementById("fname-error").innerHTML = "First name must be at least 2 characters long.";
        return false;
    } else if (fname.length > 30) { //checks if the first name is no more than 30 characters long
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters long.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//last name validate js code
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; // Regular expression for letters only
    //cecks if the last name field is empty
    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name is required.";
        return false;
    } 
    //checks if the last name contains only letters
    else if (lname !="") {
    if (!lname.match(namePattern)) { //checks if last name matches the regular expression pattern
        document.getElementById("lname-error").innerHTML = "Last name can only contain letters, apostrophes, and dashes.";
        return false;
    } else if (lname.length < 2) { //checks if the last name is at least 2 characters long
        document.getElementById("lname-error").innerHTML = "Last name must be at least 2 characters long.";
        return false;
    } else if (lname.length > 30) { //checks if the last name is no more than 30 characters long
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters long.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}

//middle initial validation
function validateMini() {
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]$/; 

    //convert middle initial to uppercase
    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (mini === "") {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }

    //check if middle initial is exactly one uppercase letter
    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "Middle initial must be exactly one uppercase letter.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

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

function formatSSN() {
    let ssnInput = document.getElementById("ssn");
    let value = ssnInput.value.replace(/\D/g, "");

    if (value.length > 3 && value.length <= 5) {
        value = value.slice(0,3) + "-" + value.slice(3);
    } 
    else if (value.length > 5) {
        value = value.slice(0,3) + "-" + value.slice(3,5) + "-" + value.slice(5,9);
    }

    ssnInput.value = value;
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

//address 2 validation IF user enters something in the field
function validateAddress2() {
    let ad2 = document.getElementById("address2").value.trim();

    //optional field = allow empty
    if (ad2 === "") {
        document.getElementById("address2-error").innerHTML = "";
        return true;
    }

    //error if user enters something but it's not between 2 and 30 characters
    if (ad2.length < 2 || ad2.length > 30) {
        document.getElementById("address2-error").innerHTML = "Address 2 must be 2–30 characters.";
        return false;
    }

    //valid
    document.getElementById("address2-error").innerHTML = "";
    return true;
}

//city validate js code
function validateCity() {
    let city = document.getElementById("city").value.trim(); 

    if (!city) {
        document.getElementById("city-error").innerHTML = "City is required.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//state validation
function validateState() {
    let state = document.getElementById("state").value;
    let error = document.getElementById("state-error");

    if (!state) {
        error.innerHTML = "Please select a state.";
        return false;
    } else {
        error.innerHTML = "";
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

    email = email.toLowerCase();
    document.getElementById("email").value = email;

    let emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
        let regex = /^[a-z0-9_-]+$/;

        if (!regex.test(uname)) {
            document.getElementById("uname-error").innerHTML = "Username can only contain letters, numbers, or underscores.";
            return false;

        } else if (uname.length < 5) {  
            document.getElementById("uname-error").innerHTML = "Username must be at least 5 characters long.";
            return false;

        } else if (uname.length > 20) {
            document.getElementById("uname-error").innerHTML = "Username cannot be more than 20 characters long.";
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
    const errorContainer = document.getElementById("pword-error");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<div class="error">${message}</div>`)
    .join("");

    if (errorMessage.length > 0) {
    return false;
    } else {
    return true;
    }
}

//confirm password validation
function confirmPassword() {
    let pword1 = document.getElementById("pword").value;
    let pword2 = document.getElementById("con_pword").value;
    let msg = document.getElementById("con_password-error");

    // If user clicks out AND field is empty = clear message
    if (pword2 === "") {
        msg.innerHTML = "";
        return false;
    }

    if (pword1 !== pword2) {
        msg.style.color = "red";
        msg.innerHTML = "Passwords do not match.";
        return false;
    }

    //ONLY show match message while user is actively typing
    if (document.activeElement.id === "con_pword") {
        msg.style.color = "green"; //Makes the message green if passwords do match. Not required but I thought it would be a nice touch
        msg.innerHTML = "Passwords match.";
    } else {
        msg.innerHTML = ""; //disappears on blur. Had to look up how to do this
    }

    return true;
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

//shows alert box when when necessary fields are not filled out
function showAlert() {
    var alertbox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");
    alertbox.style.display = "block";

    closeAlert.onclick = function() {
        alertbox.style.display = "none";
    }
}

//validate everything on form
function validateForm() {
    let valid = true;

    if (!validateFname()) valid = false;
    if (!validateLname()) valid = false;
    if (!validateDob()) valid = false;
    if (!validateSsn()) valid = false;
    if (!validateAddress()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateState()) valid = false;
    if (!validateZcode()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePnumber()) valid = false;
    if (!validateUname()) valid = false;
    if (!validatePassword()) valid = false;
    if (!confirmPassword()) valid = false;

    if (!valid) {
        showAlert(); //shows alert box if any validation fails
    }

    return valid;
}

function handleValidate() {
    let valid = validateForm();

    let submitBtn = document.getElementById("submitBtn");

    if (valid) {
        //show submit button
        submitBtn.style.display = "inline-block";

        //optional message instead of alert
        document.getElementById("review-message").innerHTML = 
            "All fields look good. You can now submit.";
    } else {
        //hide submit button
        submitBtn.style.display = "none";

        document.getElementById("review-message").innerHTML = 
            "Please fix the errors above before submitting.";

        showAlert(); // keep this if your professor wants popup
    }
}