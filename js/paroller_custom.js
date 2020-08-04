$(document).ready(function () {
    //initialize paroller.js
    $("[data-paroller-factor]").paroller();
    //initialize paroller.js and set options for elements with .paroller class
    $(".paroller4title").paroller({
      type: "foreground",
      // transition: "transform 1.3s ease-out",
    });
  

    // $(".paroller-example").paroller({
    //   factorXs: 0,
    //   factorSm: 0,
    //   factorMd: 0,
    //   factorLg: 0,
    //   factorXl: 0,
    //   factor: 0,
    //   type: "foreground",
    //   direction: "horizontal",
    //   transition: "transform .3s ease-out",
    // });

/*     var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var img4 = document.getElementById("img4");
    var img5 = document.getElementById("img5");
    var img6 = document.getElementById("img6");
    var img_status;
    img1.onmouseover = function () {
      img2.style.display = "block";
      img2.style.opacity = "0.95";
      img_status = "img2";
    };
    img1.onmouseout = function () {
      img2.style.display = "none";
    };
    img3.onmouseover = function () {
      img4.style.display = "block";
      img4.style.opacity = "0.95";
      img_status = "img4";
    };
    img3.onmouseout = function () {
      img4.style.display = "none";
    };
    img5.onmouseover = function () {
      img6.style.display = "block";
      img6.style.opacity = "0.95";
      img_status = "img6";
    };
    img5.onmouseout = function () {
      img6.style.display = "none";
    }; */
    

    /* document.onmousemove = function (ev) {
      
      var oDiv = document.getElementById(img_status);
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var scrollLeft =
        document.documentElement.scrollLeft || document.body.scrollLeft;

        try{
          oDiv.style.left = ev.clientX   + "px";
          oDiv.style.top = ev.clientY + "px";
        }catch{}
        

   
    }; */
  });