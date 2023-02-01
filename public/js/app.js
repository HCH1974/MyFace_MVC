document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.

  document.getElementById("header-open-button").addEventListener("click", toggleHeaderMenu);



  function toggleHeaderMenu() {
    const ourHeader = document.getElementsByClassName("header-container");
    if (ourHeader[0].id === "header-displayed") {
      ourHeader[0].setAttribute("id", "header-inactive");
    } else {
      ourHeader[0].setAttribute("id", "header-displayed");
    }


  }
});
//as not called by EventListener, moved outside of the .addEventListener function above
function setRandomColor() {
  const myPostTextBox = document.getElementsByClassName("post-text-box");
  const myPostLikeButton = document.getElementsByClassName("like-button");

  var randomColors = ["#" + (Math.floor(Math.random() * 16777215).toString(16)),
  "#" + (Math.floor(Math.random() * 16777215).toString(16))];

  for (const box of myPostTextBox) {
    box.style.backgroundColor = randomColors[0];
  }
  for (const box of myPostLikeButton) {
    box.style.backgroundColor = randomColors[1];
  }

}
