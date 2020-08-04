window.onload = function(){
    let headerDOM = document.querySelector('header');
    let footerDOM = document.querySelector('footer');
    function getHeader() {
        return axios.get('../common/header.html');
    }
    axios.all([getHeader()]).then(axios.spread(function (header) {
        headerDOM.innerHTML = header.data;
    }));
    function getFooter() {
        return axios.get('../common/footer.html');
    }
    axios.all([getFooter()]).then(axios.spread(function (footer) {
        footerDOM.innerHTML = footer.data;
    }));    
}



function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false;}
  }

  if(isMobile()){
    //行動裝置有觸碰
    console.log('Mobile');
    let textbox = document.querySelectorAll('.text-box');
    textbox.forEach(element => {
        // element.style.display="none";
        element.classList.add('d-none');
        element.classList.remove('d-block');
    });
    let textpure = document.querySelectorAll('.text-pure');
    textpure.forEach(element => {
        // element.style.display="block";
        element.classList.add('d-block');
        element.classList.remove('d-none');
    });

// }else{
//     //電腦裝置沒有觸碰
//     console.log('PC');
//     let textbox = document.querySelectorAll('.text-box');
//     textbox.forEach(element => {
//         // element.style.display="block";
//         element.classList.add('d-block');
//         element.classList.remove('d-none');
//     });
//     let textpure = document.querySelectorAll('.text-pure');
//     textpure.forEach(element => {
//         // element.style.display="none";
//         element.classList.add('d-none');
//         element.classList.remove('d-block');
//     });
}



var basicScrollTop = function () {  
    // The button
    var btnTop = document.querySelector('#goTop');
    // Reveal the button
    var btnReveal = function () { 
      var position = document.querySelector('#position');
          position.innerHTML = window.scrollY + 'px';
      if (window.scrollY >= 300) {
        btnTop.classList.add('is-visible');
      } else {
        btnTop.classList.remove('is-visible');
      }    
    }  
    // Smooth scroll top
    var TopscrollTo = function () {
      if(window.scrollY!=0) {
        setTimeout(function() {
          window.scrollTo(0,window.scrollY-30);
          TopscrollTo();
        }, 5);
      }
    }
    // Listeners
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);  
      
  };
basicScrollTop();
  
  
  
  

