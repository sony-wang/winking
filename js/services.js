


let portfolio_wrap = document.querySelector('.portfolio_wrap');
let portfolio_dom = '';
// console.log(data_2d.length)
for(let i=0; i<data_2d.length;i++){
    portfolio_dom +=  `
    <div class="portfolio_card w-25 col-md-3 col-6">
        <a href="javascript:;" class="mask" data-toggle="modal" data-target="#services_Modal" id="${data_2d[i].parameter}">
        <div class="img-responsive zoom-img w-100" style="height:350px; background: url(..${data_2d[i].thumbnail}) no-repeat center;background-size: cover;${data_2d[i].css}"></div>
        <!-- <img class="img-responsive zoom-img w-100" src="/img/services/2D/01.jpg" alt=""> -->
        </a>
    </div>`

}
portfolio_wrap.innerHTML = portfolio_dom;


let switch_card = (c) =>{

    portfolio_dom = '';
    let all;
    // console.log(c)
    if(c == '2d'){
        all = data_2d;
    }
    if(c == '3d'){
        all = data_3d;
    }
    if(c == 'animation'){
        all = data_animation;
    }
    console.log(all)
    for(let i=0; i<all.length;i++){

        portfolio_dom +=  `
        <div class="portfolio_card w-25 col-md-3 col-6">
            <a href="javascript:;" class="mask" data-toggle="modal" data-target="#services_Modal" id="${all[i].parameter}">
            <div class="img-responsive zoom-img w-100" style="height:350px; background: url(..${all[i].thumbnail}) no-repeat center;background-size: cover;${all[i].css}"></div>
            </a>
        </div>`
    }

    portfolio_wrap.innerHTML = portfolio_dom;
    // console.log(all.length);
    let page_no = Math.ceil(all.length / 12)
    // console.log(page_no);
    //隱藏超過12組圖片
    for(let i=0; i<all.length;i++){
        if(i >= 12){
            portfolio_wrap.children[i].style.display='none';
        }
    }
    let pagination = document.querySelector('.pagination');
    let page_dom = '';
    // console.log(pagination)
    for(let i=1; i<=page_no;i++){
        if(i==1){
            page_dom+=`<li class="page-item active"><a class="page-link" href="javascript:topage(${i},${page_no});" id="page_btn_${i}">${i}</a></li>`
        }else{
            page_dom+=`<li class="page-item"><a class="page-link" href="javascript:topage(${i},${page_no});" id="page_btn_${i}">${i}</a></li>`
        }
    }
    if(page_no >= 2){
        pagination.innerHTML = page_dom;
    }else{
        pagination.innerHTML ='';
    }
}


let topage = (e,page_no) =>{
    // console.log(e);
    console.log(page_no);
    for(let i=1; i<=page_no;i++){
        let page_btn_remive = '#page_btn_'+i
        document.querySelector(page_btn_remive).parentElement.classList.remove('active')
    }
    
    let page_btn = '#page_btn_'+e
    document.querySelector(page_btn).parentElement.classList.add('active')
    console.log(document.querySelector(page_btn).classList)


    //圖片超過12張換頁
    let n = e*12;
    for(let i=n; i>n-12;i--){
        // console.log(portfolio_wrap.children[i-1]);
        if(portfolio_wrap.children[i-1] !== undefined){
            portfolio_wrap.children[i-1].style.display='block';
        }
    }

    for(let i=0; i<n-12; i++){
        portfolio_wrap.children[i].style.display='none';
    }

    for(let i=n; i<n+12; i++){
        if(portfolio_wrap.children[i] !== undefined){
            portfolio_wrap.children[i].style.display='none';
        }
    }
    
}


let portfolio_btn = document.querySelectorAll('.portfolio_btn .btn');
// console.log(portfolio_btn[0])

let = portfolio_switch = (e) =>{
    // console.log(e)
    switch_card(e);
    if(e == '2d'){
        portfolio_btn[0].classList.add('btn-secondary')
        portfolio_btn[0].classList.remove('btn-light')
        portfolio_btn[1].classList.add('btn-light')
        portfolio_btn[1].classList.remove('btn-secondary')
        portfolio_btn[2].classList.add('btn-light')
        portfolio_btn[2].classList.remove('btn-secondary')
    }
    if(e == '3d'){
        portfolio_btn[0].classList.add('btn-light')
        portfolio_btn[0].classList.remove('btn-secondary')
        portfolio_btn[1].classList.add('btn-secondary')
        portfolio_btn[1].classList.remove('btn-light')
        portfolio_btn[2].classList.add('btn-light')
        portfolio_btn[2].classList.remove('btn-secondary')
    }
    if(e == 'animation'){
        portfolio_btn[0].classList.add('btn-light')
        portfolio_btn[0].classList.remove('btn-secondary')
        portfolio_btn[1].classList.add('btn-light')
        portfolio_btn[1].classList.remove('btn-secondary')
        portfolio_btn[2].classList.add('btn-secondary')
        portfolio_btn[2].classList.remove('btn-light')
    }
    listener_popup_img(e);
}

// window.onload = () =>{
//     listener_popup_img();
// }
$(document).ready(function(){
    listener_popup_img();
})

let listener_popup_img = (e) =>{

    let modal_title = document.querySelector('.modal-title');
    let modal_body = document.querySelector('.modal-body');

    if(e == '2d' || e==undefined){
        document.querySelector('#data_2d_01').addEventListener('click',()=>{
            modal_title.innerHTML = data_2d[0].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_2d[0].src}">`;
        })
        document.querySelector('#data_2d_02').addEventListener('click',()=>{
            modal_title.innerHTML = data_2d[1].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_2d[1].src}">`;
        })
        document.querySelector('#data_2d_03').addEventListener('click',()=>{
            modal_title.innerHTML = data_2d[2].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_2d[2].src}">`;
        })
        document.querySelector('#data_2d_04').addEventListener('click',()=>{
            modal_title.innerHTML = data_2d[3].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_2d[3].src}">`;
        })
        document.querySelector('#data_2d_05').addEventListener('click',()=>{
            modal_title.innerHTML = data_2d[4].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_2d[4].src}">`;
        })
        document.querySelector('#data_2d_06').addEventListener('click',()=>{
            modal_title.innerHTML = data_2d[5].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_2d[5].src}">`;
        })
        document.querySelector('#data_2d_07').addEventListener('click',()=>{
            modal_title.innerHTML = data_2d[6].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_2d[6].src}">`;
        })
        document.querySelector('#data_2d_08').addEventListener('click',()=>{
            modal_title.innerHTML = data_2d[7].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_2d[7].src}">`;
        })
    }

    if(e == '3d'){
        document.querySelector('#data_3d_01').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[0].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[0].src}">`;
        })
        document.querySelector('#data_3d_02').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[1].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[1].src}">`;
        })
        document.querySelector('#data_3d_03').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[2].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[2].src}">`;
        })
        document.querySelector('#data_3d_04').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[3].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[3].src}">`;
        })
        document.querySelector('#data_3d_05').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[4].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[4].src}">`;
        })
        document.querySelector('#data_3d_06').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[5].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[5].src}">`;
        })
        document.querySelector('#data_3d_07').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[6].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[6].src}">`;
        })
        document.querySelector('#data_3d_08').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[7].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[7].src}">`;
        })
        document.querySelector('#data_3d_09').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[8].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[8].src}">`;
        })
        document.querySelector('#data_3d_10').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[9].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[9].src}">`;
        })
        document.querySelector('#data_3d_11').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[10].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[10].src}">`;
        })
        document.querySelector('#data_3d_12').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[11].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[11].src}">`;
        })
        document.querySelector('#data_3d_13').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[12].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[12].src}">`;
        })
        document.querySelector('#data_3d_14').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[13].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[13].src}">`;
        })
        document.querySelector('#data_3d_15').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[14].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[14].src}">`;
        })
        document.querySelector('#data_3d_16').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[15].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[15].src}">`;
        })
        document.querySelector('#data_3d_17').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[16].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[16].src}">`;
        })
        document.querySelector('#data_3d_18').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[17].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[17].src}">`;
        })
        document.querySelector('#data_3d_19').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[18].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[18].src}">`;
        })
        document.querySelector('#data_3d_20').addEventListener('click',()=>{
            modal_title.innerHTML = data_3d[19].title;
            modal_body.innerHTML = `<img class="w-100" src="..${data_3d[19].src}">`;
        })
    }
    if(e == 'animation' || e==undefined){
            document.querySelector('#data_animation_01').addEventListener('click',()=>{
            modal_title.innerHTML = data_animation[0].title;
            modal_body.innerHTML = 
            `
            <iframe width="100%" height="600px" src="https://www.youtube.com/embed/iNbETt7NbmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        })
    }
    
}