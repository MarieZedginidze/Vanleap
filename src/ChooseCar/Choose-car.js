let testCar1 = document.getElementById("l2h2");
let testCar2 = document.getElementById("l3h3");

let vanType;
testCar1.addEventListener("click", () => {
  vanType = "Ford Transit";
  localStorage.setItem("carType", JSON.stringify(vanType));
  window.location.replace("/VanBuilder/Van.html");
});

testCar2.addEventListener("click", () => {
  vanType = "Mercedes Benz";
  localStorage.setItem("carType", JSON.stringify(vanType));
  window.location.replace("/VanBuilder/Van.html");
});
