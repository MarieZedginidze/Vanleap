// Redirect users when they click van builder links
let builderRedirects = document.getElementsByClassName("builderRedirectBtn");

let retrievedVanType = localStorage.getItem("carType");

for (const builderRedirect of builderRedirects) {
  builderRedirect.addEventListener("click", () => {
    if (retrievedVanType === "undefined" || !retrievedVanType) {
      window.location.replace("/Choose-car.html");
    } else {
      window.location.replace("/Van.html");
    }
  });
}
