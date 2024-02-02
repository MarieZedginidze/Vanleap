/*
  Getting Elements
*/
// Progress Car
let progressCar = document.querySelector("#car");
let pin = document.querySelector("#pin");

// Questions
let questionOne = document.querySelector(".question-one");
let questionThree = document.querySelector(".question-three");
let questionFourth = document.querySelector(".question-four");

// Radio Buttons
let radioBtnsOne = questionOne.querySelectorAll("input[type='radio']");
let radioBtnsThree = questionThree.querySelectorAll("input[type='radio']");
// Check Boxes
let checkBoxes = questionFourth.querySelectorAll('input[type="checkbox"]');

// Form Element
const form = document.querySelector("form");

let form_data = new FormData(form);
let errorMsgSections = document.querySelectorAll(".chk_option_error");

// Get the Van Builder Link and Van Type from the Localstorage
let vanBuilderLink = document.getElementById("vanBuilderLink");
let retrievedVanType = localStorage.getItem("carType");

vanBuilderLink.addEventListener("click", () => {
  if (retrievedVanType === "undefined" || !retrievedVanType) {
    window.location.replace("/Choose-car.html");
  } else {
    window.location.replace("/Van.html");
  }
});
/* 
    Check for Required Answers
 */
// Show error when the User doesn't Selects the Answer
function showError(option_name) {
  // Check if Form Data object Doesn't contain a Key
  if (!form_data.has(option_name)) {
    // Get the Specific Input
    let childElement = document.querySelector("." + option_name);
    // Find the Input's Parent
    let parentElement = childElement.parentNode;
    // Select the Error Message Section in a specific Form Section
    let specificErrorSection = parentElement.querySelector(".chk_option_error");
    // Display Error Message Section
    specificErrorSection.style.display = "block";
  }
}

// Hide error when the User Submits the Answer
function hideError(parent) {
  let parentElement = document.querySelector("." + parent);
  let specificErrorSection = parentElement.querySelector(".chk_option_error");
  specificErrorSection.style.display = "block";
}
/*
    First Question: People Amount
*/
function getPeopleAmount() {
  let peopleAmount;
  // Get First Question's Radio Buttons, Loop throught them
  // and Assign the Checked Buttons Value to the peopleAmount Variable
  for (var i = 0; i < radioBtnsOne.length; i++) {
    if (radioBtnsOne[i].checked) {
      peopleAmount = radioBtnsOne[i].value;
    }
  }
  if (peopleAmount === undefined) {
    // Pass the Input name to the showError function, if None of the Buttons were Selected
    showError("peopleAmount");
  } else {
    // Pass the Parent's name to the hideError function, if One of the Button was selected
    hideError("question-one");
  }
  return peopleAmount;
}

/*
    Third Question: Activities
*/
function getActivities() {
  let activities = [];
  // For each Facility Option Check if the Input is Checked and Push its Value to the activities Array
  for (var i = 0; i < radioBtnsThree.length; i++) {
    if (radioBtnsThree[i].checked) {
      activities.push(radioBtnsThree[i].value);
    }
  }
  // Check for the activities Array, if it's empty, Send the Input Name to the showError function
  if (!activities.length) {
    // Pass the Input name to the showError function, if None of the Checkbox were Selected
    showError("activity");
  } else {
    // Pass the Parent's name to the hideError function, if at least One of the Checkbox was selected
    hideError("question-three");
  }
  return activities;
}

/*
    Fourth Question: Getting Facilities
*/
function getFacilities() {
  let facilities = [];
  // For each Facility Option Check if the Input is Checked and Push its Value to the facilities Array
  for (var i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      facilities.push(checkBoxes[i].value);
    }
  }
  // Check for the facilities Array, if it's empty, Send the Input Name to the showError function
  if (!facilities.length) {
    // Pass the Input name to the showError function, if None of the Checkbox were Selected
    showError("facility");
  } else {
    // Pass the Parent's name to the hideError function, if at least One of the Checkbox was selected
    hideError("question-four");
  }
  return facilities;
}

/*
    Analysing the Inputs
*/

// Suggest user/s to  Ford Transit or Mercedez Sprinter
function suggestCarSize(peopleAmount, activitiesArray, facilitiesArray) {
  let suggestedCar;

  if (peopleAmount === "3+") {
    suggestedCar = "Mercedes Benz";
  }
  for (let i = 0; i < activitiesArray.length; i++) {
    if (activitiesArray[i] === "3+sports-manyGear") {
      suggestedCar = "Mercedes Benz";
    }
  }
  for (let i = 0; i < facilitiesArray.length; i++) {
    if (facilitiesArray[i] === "shower") {
      suggestedCar = "Mercedes Benz";
    }
  }
  if (suggestedCar === "Mercedes Benz") {
  } else {
    suggestedCar = "Ford Transit";
  }
  return suggestedCar;
}

// Display Each Question at a time
let nextBtns = document.querySelectorAll(".next-buttons");
let firstBtn = nextBtns[0];
let secondBtn = nextBtns[1];
let questionsWrapperChildren =
  document.querySelector(".questions-wrapper").children;
let submitBtn = document.querySelector(".submit-button");

function displaySecondQuestion(event) {
  event.preventDefault();

  let peopleAmount = getPeopleAmount();

  if (peopleAmount) {
    questionOne.style.display = "none";
    questionThree.style.display = "block";
    nextBtns[1].style.display = "block";
    gsap.to(progressCar, { x: 65 });
  }
}

function displayThirdQuestion(event) {
  event.preventDefault();

  let activities = getActivities();

  if (activities.length) {
    questionThree.style.display = "none";
    questionFourth.style.display = "block";
    submitBtn.style.display = "block";
    gsap.to(progressCar, { x: 130 });
  }
}

firstBtn.addEventListener("click", displaySecondQuestion);
secondBtn.addEventListener("click", displayThirdQuestion);

/*
    Form
*/
form.addEventListener("submit", (event) => {
  // Stop Page from Refreshing when Submitting the Form
  event.preventDefault();
  // Get the Number of the People User had Selected
  let peopleAmount = getPeopleAmount();

  // Get the Facility/Facilities the People User had Selected
  let facilities = getFacilities();
  // Get the Activity/Activities the People User had Selected
  let activities = getActivities();
  if (peopleAmount && activities.length && facilities.length) {
    let car = suggestCarSize(peopleAmount, activities, facilities);
    localStorage.setItem("carType", JSON.stringify(car));
    gsap.to(progressCar, { x: 195 });
    setTimeout(function () {
      location.href = "/Van.html";
    }, 1000);
  }
});
