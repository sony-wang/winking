let last_news_wrap = document.querySelector('.last_news_wrap');
let blog_wrap = document.querySelector('.blog_wrap');
let switch_news_blog_btn = document.querySelectorAll('.switch_news_blog_btn');
let switch_news_blog = (e) =>{
    // console.log(switch_news_blog_btn[0]);
    // console.log(switch_news_blog_btn[1]);
    console.log(switch_news_blog_btn[0].classList);
    console.log(switch_news_blog_btn[1].classList);
    if(e == 'n'){
        last_news_wrap.style.display = 'block';
        blog_wrap.style.display = 'none';
        switch_news_blog_btn[0].classList.add('btn-secondary');
        switch_news_blog_btn[0].classList.remove('btn-outline-secondary');
        switch_news_blog_btn[1].classList.add('btn-outline-secondary');
        switch_news_blog_btn[1].classList.remove('btn-secondary');
    }
    if(e == 'b'){
        last_news_wrap.style.display = 'none';
        blog_wrap.style.display = 'block';
        switch_news_blog_btn[0].classList.add('btn-outline-secondary');
        switch_news_blog_btn[0].classList.remove('btn-secondary');
        switch_news_blog_btn[1].classList.add('btn-secondary');
        switch_news_blog_btn[1].classList.remove('btn-outline-secondary');
    }
}




let model_content_01 = document.querySelector('#model_content_01');
let model_content_02 = document.querySelector('#model_content_02');
let model_content_03 = document.querySelector('#model_content_03');
let model_content_04 = document.querySelector('#model_content_04');
let model_content_05 = document.querySelector('#model_content_05');
let model_content_06 = document.querySelector('#model_content_06');
let model_content_07 = document.querySelector('#model_content_07');
let model_content_08 = document.querySelector('#model_content_08');
let model_content_09 = document.querySelector('#model_content_09');

let modal_title = document.querySelector('.modal-title');
let model_img = document.querySelector('.model_img');
let model_txt = document.querySelector('.model_txt');

model_content_01.addEventListener('click',()=>{
    modal_title.innerHTML = 'An Unrevealed Sector: Art Outsourcing and its Opportunities.';
    model_img.innerHTML = 
    `
    <iframe width="100%" height="480px" src="https://www.youtube.com/embed/h1Yl5Mv8WKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    model_txt.innerHTML =  
    `
    <h2 class="mb-3">An Unrevealed Sector: Art Outsourcing and its Opportunities.</h2>
    <p>2020 Taipei Game Developers Forum collaborated with Twitch on July 11th to 12th. As one of the most established art outsourcing companies in Asia, the CEO of Winking Corporation, Johnny Jan was invited to discuss the topic ""  
    Unlike the old fashion mass production demand in the art outsourcing industry, nowadays clients are interested in making more possibilities.
    </p>
    <p>Come check the video if you'd like to know more about "An Unrevealed Sector: Art Outsourcing and its Opportunities."</p>
    <p>2020.July.17</p>
    `
})
model_content_02.addEventListener('click',()=>{
    modal_title.innerHTML = 'Winking Corp was honored to be speaking at Finding Opportunities in the Touchless Economy and its Post Pandemic Future. ';
    model_img.innerHTML = '<img class="w-100" src="/img/news/02.jpg">'
    model_txt.innerHTML =  
    `
        <h2 class="mb-3">Winking Corp was honored to be speaking at Finding Opportunities in the Touchless Economy and its Post Pandemic Future. </h2>
        <p>
        This past week, Winking Corp was honored to be speaking at Finding Opportunities in the Touchless Economy and its Post Pandemic Future. Topics include the next-generation online game, e-Sport trends, and how 5G might influence the cloud-based games for AR/VR. Speakers were CEO of Winking Corporation, Johnny Jan; the vice president of Japan Esports Union(JeSU), Hirokazu Hamamura; Head of Brand Manager SK Telecom, Kim Eung Won, representing the game development sector, e-Sport sector, and telecommunication sector. We cannot wait to see how the gaming industry evolves along with the integration of 5G structures.
        </p>
        <p>2020.July.15</p>
    `
})
model_content_03.addEventListener('click',()=>{
    modal_title.innerHTML = 'Winking Corp and it\'s participation in AAA game production, Destiny 2: Season of The Worthy';
    model_img.innerHTML = '<img class="w-100" src="/img/news/03.jpg">'
    model_txt.innerHTML =  
    `
        <h2 class="mb-3">Winking Corp and it's participation in AAA game production, Destiny 2: Season of The Worthy</h2>
        <h4>Destiny 2: Season of The Worthy began on March</h4>
        <p>Developed by Bungie, Destiny 2 is an MMO FPS that sets its theme around a futuristic world. The same year, Destiny 2 won the Best PC Game at the Game Critics Awards 2017. Destiny 2 is launching a brand new season: Season of The Worthy, from March 11th, 2020, and will run for three months. Not only this season, but Winking Corp has also partnered up with Bungie before. </p>
        <p>One of the things that set Destiny 2 apart from other games is its magnificent establishment of each character, building, or even culture. With such a high demand for creativity and detail-oriented design, it is equally challenging for the artists to, appropriately, portrait each section of the project.</p>
        <h4>Winking and the 3D models of the Guardians</h4>
        <p>The season's plot focuses on the Guardian working with Commander Zavala, Anastasia Bray, and Rasputin to prevent the Cabal from crashing The Almighty into The Last City. Guardians are the player characters of Destiny 2. They are resurrected corpses brought to life. They are a standing army of specialized soldiers tasked with the defense of the Last City on Earth. Either Hunter, Titan, or Warlock, each guardian class brings its specialized armor and abilities to the army. Speaking of armor, have you guys noticed the new pieces for the season? It's just beautiful.</p>
        <p>The team at Bungie design the character's story and background. After adjustments and calculations, a semi-finished persona is out. Winking comes in to finish the last step: to turn them into a living 3D person via our application. </p>
        <p>After the creation of the 3D model, a precise process of skinning and rigging is the next step. Most times, clients can tell the difference between a good character and a great character based on the preciseness of these fundamental procedures. A great character needs to emit a proper attraction while not being dull, well-balanced originality while making sense of the design. These details are what our team focuses on the most. Often, a well-rigged project will take up to weeks or months to finalize.</p>
        <h4>Return of Destiny's PvP challenge, the Trials of Osiris</h4>
        <p>The Trials of Osiris is one of the biggest elements of the new season. The weekend event offers some of Destiny 2's best rewards, unique items, and brand new armor sets for all three classes. The return of the Trials might bring a brand new wave of both old and new players to join in. A new season also brings in new gears for the players. While finding a teammate seems important, do remember to feel the subtle difference between all the weapons. Destiny 2 did an excellent work of diversifying weaponry from each other. Winking's art department is working closely with Bungie on delivering the top quality production towards 3D weapon modeling. We also appreciate Bungie's assistance and the sharing of knowledge. As an organization, we learned and grew so much through the experience working with Bungie.</p>
        <h4>A professional team to make an AAA title</h4>
        <p>Nowadays, the standard for AAA games has heightened by the technology's best engine, with its high-quality visual output. On top of this increase in demand for "know your engine," Bungie also crafted some unique effects, add-ons, and applications for the art team. Within a short period, Winking not only familiarized the intricate system but also applied previous experience from previous projects and produced AAA standard projects. Such practices are extremely important, especially between globalization collaboration. Kaiyue, one project manager at Winking Corp, expresses, "To prevent the loss of efficiency and productivity, Winking Art Department established a well-constructed S.O.P. that periodically evaluates the projects and communicates with the clients." Kaiyue then says, "By doing this, we ensure the high-standard product upon each output."</p>
        <p>After several collaborations, systematic expertise required for the AAA projects is well-rooted within each member of our team. Ming, the art director, states that "As professional artists, we never just create a character. We develop a story, a personality, and an attitude that fits the character and storyline." Season of The Worthy continues to attract more and more players to join. Remember to gear up, team up, turn up the party in Destiny 2. Also, remember to follow more projects from Winking Corp.</p>
        
        <a class="ml-1 mr-1" href="javascript:;">#WinkingArt</a>
        <a class="ml-1 mr-1" href="javascript:;">#SeasonOfTheWorthy</a>
        <a class="ml-1 mr-1" href="javascript:;">#Destiny2</a>

    `
})
model_content_04.addEventListener('click',()=>{
    modal_title.innerHTML = 'An Unrevealed Sector: Art Outsourcing and its Opportunities.';
    model_img.innerHTML = 
    `
    <iframe width="100%" height="480px" src="https://www.youtube.com/embed/h1Yl5Mv8WKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    model_txt.innerHTML =  
    `
    <h2 class="mb-3">An Unrevealed Sector: Art Outsourcing and its Opportunities.</h2>
    <p>2020 Taipei Game Developers Forum collaborated with Twitch on July 11th to 12th. As one of the most established art outsourcing companies in Asia, the CEO of Winking Corporation, Johnny Jan was invited to discuss the topic ""  
    Unlike the old fashion mass production demand in the art outsourcing industry, nowadays clients are interested in making more possibilities.
    </p>
    <p>Come check the video if you'd like to know more about "An Unrevealed Sector: Art Outsourcing and its Opportunities."</p>
    <p>2020.July.17</p>
    `
})
model_content_05.addEventListener('click',()=>{
    modal_title.innerHTML = 'Winking Corp was honored to be speaking at Finding Opportunities in the Touchless Economy and its Post Pandemic Future. ';
    model_img.innerHTML = '<img class="w-100" src="/img/news/02.jpg">'
    model_txt.innerHTML =  
    `
        <h2 class="mb-3">Winking Corp was honored to be speaking at Finding Opportunities in the Touchless Economy and its Post Pandemic Future. </h2>
        <p>
        This past week, Winking Corp was honored to be speaking at Finding Opportunities in the Touchless Economy and its Post Pandemic Future. Topics include the next-generation online game, e-Sport trends, and how 5G might influence the cloud-based games for AR/VR. Speakers were CEO of Winking Corporation, Johnny Jan; the vice president of Japan Esports Union(JeSU), Hirokazu Hamamura; Head of Brand Manager SK Telecom, Kim Eung Won, representing the game development sector, e-Sport sector, and telecommunication sector. We cannot wait to see how the gaming industry evolves along with the integration of 5G structures.
        </p>
        <p>2020.July.15</p>
    `
})
model_content_06.addEventListener('click',()=>{
    modal_title.innerHTML = 'Winking Corp and it\'s participation in AAA game production, Destiny 2: Season of The Worthy';
    model_img.innerHTML = '<img class="w-100" src="/img/news/03.jpg">'
    model_txt.innerHTML =  
    `
        <h2 class="mb-3">Winking Corp and it's participation in AAA game production, Destiny 2: Season of The Worthy</h2>
        <h4>Destiny 2: Season of The Worthy began on March</h4>
        <p>Developed by Bungie, Destiny 2 is an MMO FPS that sets its theme around a futuristic world. The same year, Destiny 2 won the Best PC Game at the Game Critics Awards 2017. Destiny 2 is launching a brand new season: Season of The Worthy, from March 11th, 2020, and will run for three months. Not only this season, but Winking Corp has also partnered up with Bungie before. </p>
        <p>One of the things that set Destiny 2 apart from other games is its magnificent establishment of each character, building, or even culture. With such a high demand for creativity and detail-oriented design, it is equally challenging for the artists to, appropriately, portrait each section of the project.</p>
        <h4>Winking and the 3D models of the Guardians</h4>
        <p>The season's plot focuses on the Guardian working with Commander Zavala, Anastasia Bray, and Rasputin to prevent the Cabal from crashing The Almighty into The Last City. Guardians are the player characters of Destiny 2. They are resurrected corpses brought to life. They are a standing army of specialized soldiers tasked with the defense of the Last City on Earth. Either Hunter, Titan, or Warlock, each guardian class brings its specialized armor and abilities to the army. Speaking of armor, have you guys noticed the new pieces for the season? It's just beautiful.</p>
        <p>The team at Bungie design the character's story and background. After adjustments and calculations, a semi-finished persona is out. Winking comes in to finish the last step: to turn them into a living 3D person via our application. </p>
        <p>After the creation of the 3D model, a precise process of skinning and rigging is the next step. Most times, clients can tell the difference between a good character and a great character based on the preciseness of these fundamental procedures. A great character needs to emit a proper attraction while not being dull, well-balanced originality while making sense of the design. These details are what our team focuses on the most. Often, a well-rigged project will take up to weeks or months to finalize.</p>
        <h4>Return of Destiny's PvP challenge, the Trials of Osiris</h4>
        <p>The Trials of Osiris is one of the biggest elements of the new season. The weekend event offers some of Destiny 2's best rewards, unique items, and brand new armor sets for all three classes. The return of the Trials might bring a brand new wave of both old and new players to join in. A new season also brings in new gears for the players. While finding a teammate seems important, do remember to feel the subtle difference between all the weapons. Destiny 2 did an excellent work of diversifying weaponry from each other. Winking's art department is working closely with Bungie on delivering the top quality production towards 3D weapon modeling. We also appreciate Bungie's assistance and the sharing of knowledge. As an organization, we learned and grew so much through the experience working with Bungie.</p>
        <h4>A professional team to make an AAA title</h4>
        <p>Nowadays, the standard for AAA games has heightened by the technology's best engine, with its high-quality visual output. On top of this increase in demand for "know your engine," Bungie also crafted some unique effects, add-ons, and applications for the art team. Within a short period, Winking not only familiarized the intricate system but also applied previous experience from previous projects and produced AAA standard projects. Such practices are extremely important, especially between globalization collaboration. Kaiyue, one project manager at Winking Corp, expresses, "To prevent the loss of efficiency and productivity, Winking Art Department established a well-constructed S.O.P. that periodically evaluates the projects and communicates with the clients." Kaiyue then says, "By doing this, we ensure the high-standard product upon each output."</p>
        <p>After several collaborations, systematic expertise required for the AAA projects is well-rooted within each member of our team. Ming, the art director, states that "As professional artists, we never just create a character. We develop a story, a personality, and an attitude that fits the character and storyline." Season of The Worthy continues to attract more and more players to join. Remember to gear up, team up, turn up the party in Destiny 2. Also, remember to follow more projects from Winking Corp.</p>
        
        <a class="ml-1 mr-1" href="javascript:;">#WinkingArt</a>
        <a class="ml-1 mr-1" href="javascript:;">#SeasonOfTheWorthy</a>
        <a class="ml-1 mr-1" href="javascript:;">#Destiny2</a>

    `
})
model_content_07.addEventListener('click',()=>{
    modal_title.innerHTML = 'Brace yourselves! This one is going to be epic!';
    model_img.innerHTML = 
    `
    <iframe width="100%" height="480px" src="https://www.youtube.com/embed/p7Z1ufrNUns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    model_txt.innerHTML =  
    `
    <h2 class="mb-3">Brace yourselves! This one is going to be epic!</h2>
    <p>Brace yourselves! This one is going to be epic! Season of the Worthy starts on March 10th. <br>
    👑Winking Corp is honored to be part of Destiny 2! 👑
    </p>
    <p>Check <a href="https://www.thesixthaxis.com/2020/03/10/destiny-2-update-2-8-0-patch-notes-worthy/" target="_blank">this well-organized patch note</a> to get a head start.</p>
    
    <a class="ml-1 mr-1" href="javascript:;">#TheseCharactersAreLookingRealGood</a>
    <a class="ml-1 mr-1" href="javascript:;">#LoveTheGuyWithTheGlasses</a>
    <p>2020.March.11</p>

    `
})
model_content_08.addEventListener('click',()=>{
    modal_title.innerHTML = 'Title_8';
    model_img.innerHTML = '<img class="w-100" src="/img/projects/Destiny_2/02.jpg">'
    model_txt.innerHTML =  
    `
        <p>888</p>
    `
})
model_content_09.addEventListener('click',()=>{
    modal_title.innerHTML = 'Title_9';
    model_img.innerHTML = '<img class="w-100" src="/img/projects/Destiny_2/02.jpg">'
    model_txt.innerHTML =  
    `
        <p>999</p>
    `
})
model_content_10.addEventListener('click',()=>{
    modal_title.innerHTML = 'Title_10';
    model_img.innerHTML = '<img class="w-100" src="/img/projects/Destiny_2/02.jpg">'
    model_txt.innerHTML =  
    `
        <p>101010</p>
    `
})

