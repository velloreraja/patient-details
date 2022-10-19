//Form Submition
function submitForm(event) {
  event.preventDefault();

  const userid = document.getElementById("userid").value;
  const password = document.getElementById("password").value;

  let username = "admin";
  let passwords = "admin";
  if (userid === "") {
    alert("Fill the Userid");
  } else if (password === "") {
    alert("Fill the password");
  } else if (userid !== username) {
    alert("userid Not Matched");
  } else if (password !== passwords) {
    alert("password Not Matched");
  }

  if (userid === username && password === passwords) {
    alert("Login Succesfull");
    return (document.location.href =
      "http://192.168.29.138:5500/patientdetails/two.html?");
  }
  // window.open("http://192.168.29.138:5500/patientdetails/two.html?","_blank")
}
