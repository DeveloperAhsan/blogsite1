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
        console.log(i);
        if (i == 0) {
          nextItem = sliderItem.length - 1;
        }
        sliderItem[nextItem].classList.remove("display-none");
        break;
      }
    }
  }, 100);
}
