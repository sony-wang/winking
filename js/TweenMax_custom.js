// function move() {
    let box1 = document.querySelector(".text-box-1");
    let dt1 = document.querySelectorAll(".dot1");
    window.addEventListener("mousemove", function (e) {
      for (let i = 0; i < dt1.length; i++) {
        //圆灯相对于 容器的坐标位置
        let x = e.pageX - box1.offsetLeft - dt1[i].offsetWidth / 2;
        let y = e.pageY - box1.offsetTop - dt1[i].offsetHeight / 2;
        TweenLite.to(dt1[i], i + 0.2, {
          x: x,
          y: y,
          ease: Back.easeOut.config(1.7),
        });
      }
    });

    let box2 = document.querySelector(".text-box-2");
    let dt2 = document.querySelectorAll(".dot2");
    window.addEventListener("mousemove", function (e) {
      for (let i = 0; i < dt2.length; i++) {
        //圆灯相对于 容器的坐标位置
        let x = e.pageX - box2.offsetLeft - dt2[i].offsetWidth / 2;
        let y = e.pageY - box2.offsetTop - dt2[i].offsetHeight / 2;
        TweenLite.to(dt2[i], i + 0.2, {
          x: x,
          y: y,
          ease: Back.easeOut.config(1.7),
        });
      }
    });
    
    let box3 = document.querySelector(".text-box-3");
    let dt3 = document.querySelectorAll(".dot3");
    window.addEventListener("mousemove", function (e) {
      for (let i = 0; i < dt3.length; i++) {
        //圆灯相对于 容器的坐标位置
        let x = e.pageX - box3.offsetLeft - dt3[i].offsetWidth / 2;
        let y = e.pageY - box3.offsetTop - dt3[i].offsetHeight / 2;
        TweenLite.to(dt3[i], i + 0.2, {
          x: x,
          y: y,
          ease: Back.easeOut.config(1.7),
        });
      }
    });

    let box4 = document.querySelector(".text-box-4");
    let dt4 = document.querySelectorAll(".dot4");
    window.addEventListener("mousemove", function (e) {
      for (let i = 0; i < dt4.length; i++) {
        //圆灯相对于 容器的坐标位置
        let x = e.pageX - box4.offsetLeft - dt4[i].offsetWidth / 2;
        let y = e.pageY - box4.offsetTop - dt4[i].offsetHeight / 2;
        TweenLite.to(dt4[i], i + 0.2, {
          x: x,
          y: y,
          ease: Back.easeOut.config(1.7),
        });
      }
    });

    let box5 = document.querySelector(".text-box-5");
    let dt5 = document.querySelectorAll(".dot5");
    window.addEventListener("mousemove", function (e) {
      for (let i = 0; i < dt5.length; i++) {
        //圆灯相对于 容器的坐标位置
        let x = e.pageX - box5.offsetLeft - dt5[i].offsetWidth / 2;
        let y = e.pageY - box5.offsetTop - dt5[i].offsetHeight / 2;
        TweenLite.to(dt5[i], i + 0.2, {
          x: x,
          y: y,
          ease: Back.easeOut.config(1.7),
        });
      }
    });
    let box6 = document.querySelector(".text-box-6");
    let dt6 = document.querySelectorAll(".dot6");
    window.addEventListener("mousemove", function (e) {
      for (let i = 0; i < dt6.length; i++) {
        //圆灯相对于 容器的坐标位置
        let x = e.pageX - box6.offsetLeft - dt6[i].offsetWidth / 2;
        let y = e.pageY - box6.offsetTop - dt6[i].offsetHeight / 2;
        TweenLite.to(dt6[i], i + 0.2, {
          x: x,
          y: y,
          ease: Back.easeOut.config(1.7),
        });
      }
    });
    let box7 = document.querySelector(".text-box-7");
    let dt7 = document.querySelectorAll(".dot7");
    window.addEventListener("mousemove", function (e) {
      for (let i = 0; i < dt7.length; i++) {
        //圆灯相对于 容器的坐标位置
        let x = e.pageX - box7.offsetLeft - dt7[i].offsetWidth / 2;
        let y = e.pageY - box7.offsetTop - dt7[i].offsetHeight / 2;
        TweenLite.to(dt7[i], i + 0.2, {
          x: x,
          y: y,
          ease: Back.easeOut.config(1.7),
        });
      }
    });
    let box8 = document.querySelector(".text-box-8");
    let dt8 = document.querySelectorAll(".dot8");
    window.addEventListener("mousemove", function (e) {
      for (let i = 0; i < dt8.length; i++) {
        //圆灯相对于 容器的坐标位置
        let x = e.pageX - box8.offsetLeft - dt8[i].offsetWidth / 2;
        let y = e.pageY - box8.offsetTop - dt8[i].offsetHeight / 2;
        TweenLite.to(dt8[i], i + 0.2, {
          x: x,
          y: y,
          ease: Back.easeOut.config(1.7),
        });
      }
    });
    let box9 = document.querySelector(".text-box-9");
    let dt9 = document.querySelectorAll(".dot9");
    window.addEventListener("mousemove", function (e) {
      for (let i = 0; i < dt9.length; i++) {
        //圆灯相对于 容器的坐标位置
        let x = e.pageX - box9.offsetLeft - dt9[i].offsetWidth / 2;
        let y = e.pageY - box9.offsetTop - dt9[i].offsetHeight / 2;
        TweenLite.to(dt9[i], i + 0.2, {
          x: x,
          y: y,
          ease: Back.easeOut.config(1.7),
        });
      }
    });
//   }
//   move();