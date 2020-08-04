$(document).ready(function () {
    //initialize paroller.js
    $("[data-paroller-factor]").paroller();
    //initialize paroller.js and set options for elements with .paroller class
    $(".paroller-example").paroller({
      factorXs: 0,
      factorSm: 0,
      factorMd: 0,
      factorLg: 0,
      factorXl: 0,
      factor: 0,
      type: "foreground",
      direction: "horizontal",
      transition: "transform .3s ease-out",
    });
    
  });