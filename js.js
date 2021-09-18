const EMAIL = document.getElementById("emailName");
const NAME= document.getElementById("nameName");
const SURNAME= document.getElementById("surName");
const PASSWORD = document.getElementById("passwordName");
const CONTAINER = document.getElementById("container");
const SBMTBUTTON = document.getElementById("sbmt");

const users=[];

//<form action = "">
//<div className="Container" id="container">
SBMTBUTTON.addEventListener('click', function newUser()
{
    const user= new Form(EMAIL.value, NAME.value, SURNAME.value, PASSWORD.value);
    user.emailForm();
    users.push(user);
    console.log('users Array: ');
    console.log(users);
    render();
});

function Form(email, name, surrname, password) {
    this.email = email;
    this.name = name;
    this.surrname = surrname;
    this.password = password;
}

function render()
{
    let html = "";
    users.forEach((item) => {html += item.getHtml();});
    CONTAINER.innerHTML = html;
}

Form.prototype.emailForm = function ()
{
    console.log('User: ');
    console.log(this);
};

Form.prototype.getHtml = function ()
{
    return `
    <div id = "Mariam">
    <p>${this.email}, </p> <p>${this.name},</p> <p>${this.surrname},</p>  <p>${this.password}</p>
    </div>
    `
};

//<input type="submit" className="validateBtn" value="validate">
//let validateBtn = document.querySelector(".validateBTN");
//if
// SBMTBUTTON.addEventListener('submit', function ()
// {
//     console.log("SUBMITTED")
//
// });
//

