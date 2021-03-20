function showMenu() {
  var x = document.getElementById("tb-menu");
  if (x.className === "nav-menu") {
    x.className += " show";
  } else {
    x.className = "nav-menu";
  }
}