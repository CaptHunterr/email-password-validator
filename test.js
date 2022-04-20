var arr = [];
var arrPass = [];

document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  email = email.value;
  email = email.toLowerCase();
  password = password.value;
  if (validate(email) && validPass(password)) {
    if (arr.includes(email)) {
      alert("Email already registered");
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    } else {
      arr.push(email);
      arrPass.push(password);
      console.log(arr);
      console.log(arrPass);
      alert("Successfully Added");
      document.getElementById("demo").innerHTML = "";
      show();
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
  }
});
function show() {
  arr.forEach((element) => {
    document.getElementById("demo").innerHTML += `<li>${element}</li>`;
  });
}

function validate(email) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return true;
  } else {
    alert("Enter valid email address");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    return false;
  }
}

function validPass(password) {
  if (password.length > 8) {
    var validRegexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/;
    if (password.match(validRegexPass)) {
      return true;
    } else {
      alert("Not a valid Password");
      document.getElementById("password").value = "";
      return false;
    }
  } else {
    alert(
      "Password must be of length greater than 8 characters. Must include atleast 1-lowercase,1-Uppercase,1-symbol(!,@,#,$,%,^,&,*) each"
    );
    document.getElementById("password").value = "";
    return false;
  }
}
