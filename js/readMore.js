function readMore_funct() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("read-more__button");
  var btnArrow = document.getElementById("arrow");

  btnText.style.color = "#0c75af";

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read All";
    moreText.style.display = "none";
    btnArrow.style.transform = "rotate(0deg)";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
    btnArrow.style.transform = "rotate(180deg)";
  }
}
