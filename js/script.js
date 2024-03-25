const navbarNav = document.querySelector(".menuList");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("promo-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000);
}

// let menuList = document.getElementById("menuList");
// menuList.style.maxHeight = "0px";
// function toggleMenu() {
//   if (menuList.style.maxHeight == "0px") {
//     menuList.style.maxHeight = "300px";
//   } else {
//     menuList.style.maxHeight = "0px";
//   }
// }
