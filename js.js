const EMAIL = document.getElementById("emailName");
const NAME= document.getElementById("nameName");
const SURNAME= document.getElementById("surName");
const PASSWORD = document.getElementById("passwordName");


const SBMTBUTTON = document.getElementById('sbmtBtn');

function Form(email, name, surname, password) {
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.password = password;

}
//<input type="submit" className="validateBtn" value="validate">
//let validateBtn = document.querySelector(".validateBTN");
//if
SBMTBUTTON.addEventListener('submit', function ()
{
    console.log("SUBMITTED")

});


