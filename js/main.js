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

function goPostNext() {
  setTimeout(function () {
    var slider = document.getElementById("sliderPost");
    var sliderItem = slider.getElementsByClassName("sliderPost-item");
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

function goPostPrev() {
  setTimeout(function () {
    var slider = document.getElementById("sliderPost");
    var sliderItem = slider.getElementsByClassName("sliderPost-item");
    for (let i = 0; i < sliderItem.length; i++) {
      var displayClassName = sliderItem[i].className;
      if (displayClassName.indexOf("display-none") == -1) {
        sliderItem[i].classList.add("display-none");
        var nextItem = i - 1;
        if (i == 0) {
          nextItem = sliderItem.length - 1;
        }
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

function smallNext() {
  var activeItems = [];
  setTimeout(function () {
    var smallSlider = document.getElementById("small-slider");
    var sliderImg = smallSlider.getElementsByTagName("img");
    //var activeImg = sliderImg[0].getElementsByClassName("active");

    for (let i = 0; i < sliderImg.length; i++) {
      var activeImg = sliderImg[i].getElementsByClassName("active");
      if (sliderImg[i].className.indexOf("display-none") == -1) {
        if (activeItems.indexOf(i) == -1) {
          activeItems.push(i);
        }
      }
    }

    let firstItem = activeItems[0];
    let lastItem = activeItems[3] + 1;

    var lastItemConter = 0;
    if (activeItems[0] == 0) lastItemConter = 1;
    if (activeItems[1] == 1) lastItemConter = 2;
    if (activeItems[2] == 2) lastItemConter = 3;

    if (activeItems[3] == sliderImg.length - 1) {
      sliderImg[activeItems[lastItemConter]].classList.remove("active");
      sliderImg[activeItems[lastItemConter]].classList.add("display-none");
      activeItems[lastItemConter] = lastItemConter;

      sliderImg[lastItemConter].classList.add("active");
      sliderImg[lastItemConter].classList.remove("display-none");
    } else {
      sliderImg[firstItem].classList.remove("active");
      sliderImg[firstItem].classList.add("display-none");
      sliderImg[lastItem].classList.add("active");
      sliderImg[lastItem].classList.remove("display-none");
    }
  }, 100);
}

function smallPrev() {
  var activeItems = [];
  setTimeout(function () {
    var smallSlider = document.getElementById("small-slider");
    var sliderImg = smallSlider.getElementsByTagName("img");
    //var activeImg = sliderImg[0].getElementsByClassName("active");

    for (let i = 0; i < sliderImg.length; i++) {
      var activeImg = sliderImg[i].getElementsByClassName("active");
      if (sliderImg[i].className.indexOf("display-none") == -1) {
        if (activeItems.indexOf(i) == -1) {
          activeItems.push(i);
        }
      }
    }
    console.log(activeItems);
    let firstItem = activeItems[0] - 1; //45670128
    let lastItem = activeItems[3];
    if (activeItems[3] == 3) {
      //3/8
      sliderImg[lastItem].classList.remove("active");
      sliderImg[lastItem].classList.add("display-none");

      sliderImg[sliderImg.length - 1].classList.add("active");
      sliderImg[sliderImg.length - 1].classList.remove("display-none");
    } else if (
      //2/7
      lastItem == sliderImg.length - 1 &&
      activeItems.indexOf(sliderImg.length - 2) == -1 &&
      activeItems.indexOf(sliderImg.length - 3) == -1 &&
      activeItems[2] == 2
    ) {
      firstItem = sliderImg.length - 2;
      lastItem = activeItems[2];

      console.log(firstItem); //-1
      console.log(lastItem); //3

      // if (firstItem < 0) firstItem = sliderImg.length + firstItem;
      // console.log("bb " + firstItem);
      // if (activeItems[0] == 0) {
      //   lastItemConter = 0;
      // } else if (activeItems[1] == 1) {
      //   lastItemConter = 1;
      // } else if (activeItems[2] == 2) {
      //   lastItemConter = 2;
      // } else if (activeItems[3] == 3) {
      //   lastItemConter = 3;
      // }

      // console.log(lastItemConter);
      // console.log(activeItems);
      sliderImg[lastItem].classList.remove("active");
      sliderImg[lastItem].classList.add("display-none");

      sliderImg[firstItem].classList.add("active");
      sliderImg[firstItem].classList.remove("display-none");
    } else if (
      //7801
      lastItem == sliderImg.length - 1 &&
      activeItems.indexOf(sliderImg.length - 2) != -1 &&
      activeItems.indexOf(sliderImg.length - 3) == -1 &&
      activeItems[1] == 1
    ) {
      //1/6
      sliderImg[activeItems[1]].classList.remove("active");
      sliderImg[activeItems[1]].classList.add("display-none");

      sliderImg[sliderImg.length - 3].classList.add("active");
      sliderImg[sliderImg.length - 3].classList.remove("display-none");
    } else if (
      //6780
      lastItem == sliderImg.length - 1 &&
      activeItems.indexOf(sliderImg.length - 2) != -1 &&
      activeItems.indexOf(sliderImg.length - 3) != -1 &&
      activeItems[0] == 0
    ) {
      //0/5
      //1/6
      sliderImg[activeItems[0]].classList.remove("active");
      sliderImg[activeItems[0]].classList.add("display-none");

      sliderImg[sliderImg.length - 4].classList.add("active");
      sliderImg[sliderImg.length - 4].classList.remove("display-none");
    } else {
      sliderImg[firstItem].classList.add("active");
      sliderImg[firstItem].classList.remove("display-none");
      sliderImg[lastItem].classList.remove("active");
      sliderImg[lastItem].classList.add("display-none");
    }
  }, 100);
}
