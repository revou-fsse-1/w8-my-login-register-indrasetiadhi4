//import { validateName, validateEmail, validateAge } from "./validation.js";
// pgnnya import dr file terpisah, tp gak bisa klo jalanin di web knp ya??

/* 
  -----------------------------------------------------------------------------
    CRUD DATA ON LOCAL STORAGE
  -----------------------------------------------------------------------------
*/

var getData = localStorage.getItem("data");
var data = JSON.parse(getData) || [
  { name: "dami", age: 99, email: "damidami@gmail.com" },
];

// Show data on table
function displayData() {
  var tableBody = document.querySelector("#table tbody");
  tableBody.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = `
      <tr>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].email}</td>
        <td>
          <button class="edit" type="button" onclick="editData(${i})">Edit</button>
          <button class="delete" type="button" onclick="deleteData(${i})">Delete</button>
        </td>
      </tr>
      `;
    tableBody.innerHTML += row;
  }
}

// Add data to local storage
function addData() {
  var name = document.querySelector("#input-name").value;
  var age = document.querySelector("#input-age").value;
  var email = document.querySelector("#input-email").value;

  if (!isValidData(name, age, email)) {
    return;
  }

  data.push({
    name: name,
    age: age,
    email: email,
  });

  localStorage.setItem("data", JSON.stringify(data));
  displayData();
}

// Edit data in local storage
function editData(index) {
  var name = prompt("New Name:", data[index].name);
  var age = prompt("New Age:", data[index].age);
  var email = prompt("New Email:", data[index].email);
  data[index] = { name: name, age: age, email: email };
  localStorage.setItem("data", JSON.stringify(data));
  displayData();
}

// Delete data in local storage
function deleteData(index) {
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  displayData();
}

// Show data when web on load
window.onload = function () {
  displayData();
};

/* 
  -----------------------------------------------------------------------------
    VALIDATION
  -----------------------------------------------------------------------------
*/

function validateName(input) {
  const reg = /^[a-z ,.'-]+$/i;

  if (!reg.test(input)) {
    return false;
  } else {
    return true;
  }
}

function validateEmail(input) {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!reg.test(input)) {
    return false;
  } else {
    return true;
  }
}

function validateAge(input) {
  if (isNaN(input)) {
    return false;
  } else if (input < 0) {
    return false;
  } else {
    return true;
  }
}

function isValidData(name, age, email) {
  if (!validateName(name)) {
    alert("Invalid Name");
    return false;
  }

  if (!validateAge(age)) {
    alert("Invalid Age");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Invalid Email");
    return false;
  }
  return true;
}

/* 
  -----------------------------------------------------------------------------
    LOG OUT
  -----------------------------------------------------------------------------
*/

function logout() {
  window.location.href = "/";
}
