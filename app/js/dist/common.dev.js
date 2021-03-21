"use strict";

$(function () {
  $(".js-slider-about").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    nextArrow: '<buttom class="about-slider__arrows--right"><svg width="29" height="12" viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.495 6.49497C28.7683 6.22161 28.7683 5.77839 28.495 5.50503L24.0402 1.05025C23.7668 0.776886 23.3236 0.776886 23.0503 1.05025C22.7769 1.32362 22.7769 1.76684 23.0503 2.0402L27.0101 6L23.0503 9.9598C22.7769 10.2332 22.7769 10.6764 23.0503 10.9497C23.3236 11.2231 23.7668 11.2231 24.0402 10.9497L28.495 6.49497ZM0 6.7H28V5.3H0V6.7Z" fill="black"/></svg></buttom>',
    prevArrow: '<buttom class="about-slider__arrows--left"><svg width="29" height="12" viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.505026 5.50503C0.231659 5.77839 0.231659 6.22161 0.505026 6.49498L4.9598 10.9497C5.23317 11.2231 5.67638 11.2231 5.94975 10.9497C6.22311 10.6764 6.22311 10.2332 5.94975 9.9598L1.98995 6L5.94975 2.0402C6.22311 1.76684 6.22311 1.32362 5.94975 1.05025C5.67638 0.776888 5.23317 0.776888 4.9598 1.05025L0.505026 5.50503ZM29 5.3L1 5.3L1 6.7L29 6.7L29 5.3Z" fill="black"/></svg></buttom>',
    dots: true
  });
  $(".js-slider-comment").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    nextArrow: '<buttom class="slider-comment__arrows--right"><svg width="29" height="12" viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.495 6.49497C28.7683 6.22161 28.7683 5.77839 28.495 5.50503L24.0402 1.05025C23.7668 0.776886 23.3236 0.776886 23.0503 1.05025C22.7769 1.32362 22.7769 1.76684 23.0503 2.0402L27.0101 6L23.0503 9.9598C22.7769 10.2332 22.7769 10.6764 23.0503 10.9497C23.3236 11.2231 23.7668 11.2231 24.0402 10.9497L28.495 6.49497ZM0 6.7H28V5.3H0V6.7Z" fill="black"/></svg></buttom>',
    prevArrow: '<buttom class="slider-comment__arrows--left"><svg width="29" height="12" viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.505026 5.50503C0.231659 5.77839 0.231659 6.22161 0.505026 6.49498L4.9598 10.9497C5.23317 11.2231 5.67638 11.2231 5.94975 10.9497C6.22311 10.6764 6.22311 10.2332 5.94975 9.9598L1.98995 6L5.94975 2.0402C6.22311 1.76684 6.22311 1.32362 5.94975 1.05025C5.67638 0.776888 5.23317 0.776888 4.9598 1.05025L0.505026 5.50503ZM29 5.3L1 5.3L1 6.7L29 6.7L29 5.3Z" fill="black"/></svg></buttom>'
  });
  $('.hamburger__bttn').on('click', function () {
    $('.menu-mobile__lists').toggleClass('menu-mobile__lists--active');
  }); //$('.mobile .hamburger__bttn').on('click', () => {
  //    $('.mobile .hamburger__bttn').toggleClass('active');
  //    $('.mobile .menu-mobile').toggleClass('open');
  //    $('.mobile .menu-mobile .menu-mobile__item').toggleClass('show');
  //});
});

var tab = function tab() {
  var tabNav = document.querySelectorAll('.tabs-catigories__list'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;
  tabNav.forEach(function (item) {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach(function (item) {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(function (item) {
      item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    });
  }
};

tab();