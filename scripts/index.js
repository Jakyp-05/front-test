document.getElementById("click").addEventListener("click", function () {
  document.querySelector(".plan__popup").classList.add("active-popup");
});

document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".plan__popup").classList.remove("active-popup");
});
