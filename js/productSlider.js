"use strict";

function Slider(selector) {
  this.sliderEl = document.querySelector(selector);
  //   if (!this.sliderEl) {
  //     throw new Error("Wrong selector");
  //   }
  this.slides = this.sliderEl.querySelectorAll(".slider_img");
  this.slideIdx = 0;
}

Slider.prototype.init = function () {
  window.addEventListener("load", () => {
    this.slides[this.slideIdx].classList.remove("hidden");
    document.querySelector(".leftArrow").addEventListener("click", () => {
      this.prevSlide();
    });
    document.querySelector(".rightArrow").addEventListener("click", () => {
      this.nextSlide();
    });
  });
};
Slider.prototype.nextSlide = function () {
  this.slides[this.slideIdx].classList.add("hidden");
  this.slideIdx = (this.slideIdx + 1) % this.slides.length;
  //   if (this.slideIdx === this.slides.length - 1) {
  //     this.slideIdx = 0;
  //   } else {
  //     this.slideIdx++;
  //   }
  this.slides[this.slideIdx].classList.remove("hidden");
};
Slider.prototype.prevSlide = function () {
  this.slides[this.slideIdx].classList.add("hidden");
  this.slideIdx =
    this.slideIdx === 0 ? this.slides.length - 1 : this.slideIdx - 1;

  this.slides[this.slideIdx].classList.remove("hidden");
};

const slider = new Slider(".slider");
slider.init();
setInterval(() => {
  slider.nextSlide();
}, 2000);
