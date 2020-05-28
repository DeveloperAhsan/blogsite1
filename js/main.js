function goNext() {
  setTimeout(function () {
    var slider = document.getElementById("slider");
    var sliderItem = slider.getElementsByClassName("slider-item");
    for (let i = 0; i < sliderItem.length; i++) {
      var displayClassName = sliderItem[i].className;
      if (displayClassName.indexOf("display-none") == -1) {
        sliderItem[i].classList.add("display-none");
        var nextItem = i + 1;
        console.log(i);
        if (i == sliderItem.length - 1) {
          nextItem = 0;
        }
        sliderSubtitle(nextItem);
        sliderItem[nextItem].classList.remove("display-none");
        break;
      }
    }
  }, 100);
}

function goPrev() {
  setTimeout(function () {
    var slider = document.getElementById("slider");
    var sliderItem = slider.getElementsByClassName("slider-item");
    for (let i = 0; i < sliderItem.length; i++) {
      var displayClassName = sliderItem[i].className;
      if (displayClassName.indexOf("display-none") == -1) {
        sliderItem[i].classList.add("display-none");
        var nextItem = i - 1;
        if (i == 0) {
          nextItem = sliderItem.length - 1;
        }
        sliderSubtitle(nextItem);
        sliderItem[nextItem].classList.remove("display-none");
        break;
      }
    }
  }, 100);
}

function sliderSubtitle(carrent = 0) {
  var next, prev;

  var slider = document.getElementById("slider");
  var sliderItem = slider.getElementsByClassName("slider-item");

  if (carrent == sliderItem.length - 1) {
    next = 0;
  } else {
    next = carrent + 1;
  }
  if (carrent == 0) {
    prev = sliderItem.length - 1;
  } else {
    prev = carrent - 1;
  }
  //console.log(sliderItem[carrent].getElementsByClassName("subtitle")[0]);
  var activeSubtitle = sliderItem[carrent].getElementsByClassName(
    "subtitle"
  )[0];
  //console.log(activeSubtitle.innerText);
  var prevSubtitle = sliderItem[prev].getElementsByClassName("subtitle")[0];
  var nextSubtitle = sliderItem[next].getElementsByClassName("subtitle")[0];

  //console.log(nextSubtitle);
  document.getElementsByClassName("subtite-active")[0].innerText =
    activeSubtitle.innerText;
  document.getElementsByClassName("subtite-next")[0].innerText =
    nextSubtitle.innerText;
  document.getElementsByClassName("subtite-prev")[0].innerText =
    prevSubtitle.innerText;
}
