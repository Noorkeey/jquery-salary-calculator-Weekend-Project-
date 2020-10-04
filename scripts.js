console.log("js"); // checking if script is source in

let employees = []; // create array for input data

let monthlySalaryCost = 0; //variables for future calculations

let annualSalaryCost = 0; //variables for future calculations

// event #2
$(document).ready(onReady); // calling document ready function

// Run this function when document is ready
function onReady() {
  console.log("jq"); // checking if jquery is source in
  $("#submitBtn").on("click", newNew); // Event listerner

  $(".deleteBtn").on("click", deleteFunc); //descendant selector
}

// Takes inputs and creates an object constructor, fires append function to DOM
function newNew() {
  let newEmployee = new Employee(
    // takes the new information on the fields
    $("#firstNameIn").val(),
    $("#lastNameIn").val(),
    $("#idNumberIn").val(),
    $("#jobTitleIn").val(),
    $("#annualSalaryIn").val()
  );

  // clear the fields (empty it)
  $("#firstNameIn").val(""),
    $("#lastNameIn").val(""),
    $("#idNumberIn").val(""),
    $("#jobTitleIn").val(""),
    $("#annualSalaryIn").val("");
  console.log(employees);

  displayToDom(); //fires append function to DOM

  $(".deleteBtn").on("click", deleteFunc);

  annualSalaryCost = +Number(newEmployee.annualSalary); // totaling costs from salaries

  monthlySalaryCost += Math.round(annualSalaryCost / 12); // total monthly cost of salaries (annual cost/12)
  //   $("#totalMonthlyIn").text(monthlySalaryCost);

  if (monthlySalaryCost >= 20000) {
    // a conditiond that will change the background color to Red
    $("#totalMonthlyIn").toggleClass("redColor");
  }

  $("#totalMonthlyIn").html(monthlySalaryCost);
}

// Object Constructor: to populate stored employee data for each field.
function Employee(
  firstNameIn,
  lastNameIn,
  idNumberIn,
  jobTitleIn,
  annualSalaryIn
) {
  this.firstName = firstNameIn;
  this.lastName = lastNameIn;
  this.idNumber = idNumberIn;
  this.jobTitle = jobTitleIn;
  this.annualSalary = annualSalaryIn;
  employees.push(this);
}

// create function that diplays on the Dom
function displayToDom() {
  console.log("in displayToDom");

  let el = $("#displayInformation"); // target the output element by id

  el.empty(); // empty the element

  // loop through employees
  for (let i = 0; i < employees.length; i++) {
    el.append(`

        <tr>
            <td>${employees[i].firstName}</td>
            <td>${employees[i].lastName}</td>
            <td>${employees[i].idNumber}</td>
            <td>${employees[i].jobTitle}</td>
            <td>${employees[i].annualSalary}</td>

        <td><button class="deleteBtn">DELETE</button></td>

        </tr>
        `); // display each item on the DOM
  }
} // end of dis play info on the DOM

function deleteFunc() {
  console.log("delete");
  $(this).parent().parent().remove(); // this = the specific delete btn that was clicked
  // .parent() = the <td>
  // .remove() removes that element
}
