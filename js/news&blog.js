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

//你所不知道的低調奢華：全球遊戲外包產業的現況與機遇
function contentA(){
    if(lang == 'en'){
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
        <p>2020.July.11</p>
        `
    }else if(lang == 'tc'){
        modal_title.innerHTML = '你所不知道的低調奢華：全球遊戲外包產業的現況與機遇';
        model_img.innerHTML = 
        `
        <iframe width="100%" height="480px" src="https://www.youtube.com/embed/h1Yl5Mv8WKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
        model_txt.innerHTML =  
        `
        <h2 class="mb-3">你所不知道的低調奢華：全球遊戲外包產業的現況與機遇</h2>
        <p>台北遊戲開發者論壇(TGDF)為台灣規模最大的遊戲開發者大會，每年邀請到海內外專業講者發表演說，集結遊戲產業界人士與會交流。今年受到新冠肺炎疫情影響，TGDF首次透過Twitch免費直播方式於7月11、12日舉行，以豐富多元的演講內容吸引了超過三千人次線上觀賞。</p>
        <p>唯晶科技執行長詹承翰受邀擔任這次TGDF的主題講師，以多年創建外包公司的經驗，分享美術外包業界的現況及外包行業中不為人知的一面。現今的外包產業，不同於大眾對它既有的印象—低廉代工、兼職副業等，有更多的客戶尋求外包的原因不是需要大量製作，而是期待這批不為人知的「影武者大軍」替專案增加更多的可能性和成功機率。</p>
        <p>詹承翰在演講中說到目前全球已經有很多超大型的遊戲「外包」公司，經過十幾年的發展已有數百人甚至數千人的規模，他們基本上已經是用 3A 級的標準在管理開發流程，儼然是國際大廠的分支部門。這類公司往往基於保密協議的因素而非常低調，但是他們之中不乏獲利斐然的上市公司，並且擁有全球最精銳的一批人才。</p>
        <p> 另外他也分別提及遊戲公司與外包公司之間的合作模式以及投入外包產業的人員特性，讓遊戲從業人員更加認識產業的現況並邁向這個嶄新的道路。最後，詹承翰表示唯晶科技身為外包公司主要的重點便是取得客戶的信賴、為客戶著想，並以「幫助每個作品、每個遊戲商，使他們成就不凡」作為願景。</p>
        <p>2020.July.11</p>
        `
    }else if(lang == 'sc'){
        modal_title.innerHTML = '你所不知道的低调奢华：全球游戏外包产业的现况与机遇';
        model_img.innerHTML = 
        `
        <iframe width="100%" height="480px" src='https://player.youku.com/embed/XNDc3MzkxNjMxNg==' frameborder=0 'allowfullscreen'></iframe>
        `
        model_txt.innerHTML =  
        `
        <h2 class="mb-3">你所不知道的低调奢华：全球游戏外包产业的现况与机遇</h2>
        <p>台北游戏开发者论坛(TGDF)为台湾规模最大的游戏开发者大会，每年邀请到海内外专业讲者发表演说，集结游戏产业界人士与会交流。今年受到新冠肺炎疫情影响，TGDF首次透过Twitch免费直播方式于7月11、12日举行，以丰富多元的演讲内容吸引了超过三千人次在线观赏。</p>
        <p> 唯晶科技执行长詹承翰受邀担任这次TGDF的主题讲师，以多年创建外包公司的经验，分享美术外包业界的现况及外包行业中不为人知的一面。现今的外包产业，不同于大众对它既有的印象—低廉代工、兼职副业等，有更多的客户寻求外包的原因不是需要大量制作，而是期待这批不为人知的「影武者大军」替项目增加更多的可能性和成功机率。</p>
        <p> 詹承翰在演讲中说到目前全球已经有很多超大型的游戏「外包」公司，经过十几年的发展已有数百人甚至数千人的规模，他们基本上已经是用 3A 级的标准在管理开发流程，俨然是国际大厂的分支部门。这类公司往往基于保密协议的因素而非常低调，但是他们之中不乏获利斐然的上市公司，并且拥有全球最精锐的一批人才。</p>
        <p>另外他也分别提及游戏公司与外包公司之间的合作模式以及投入外包产业的人员特性，让游戏从业人员更加认识产业的现况并迈向这个崭新的道路。最后，詹承翰表示唯晶科技身为外包公司主要的重点便是取得客户的信赖、为客户着想，并以「帮助每个作品、每个游戏商，使他们成就不凡」作为愿景。</p>
        <p>2020.July.11</p>
        `
    }else if(lang == 'jp'){
        modal_title.innerHTML = 'あなたが知らない控えめな華やかさ：世界のゲームアウトソーシング業界の現状と機会';
        model_img.innerHTML = 
        `
        <iframe width="100%" height="480px" src="https://www.youtube.com/embed/h1Yl5Mv8WKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
        model_txt.innerHTML =  
        `
        <h2 class="mb-3">あなたが知らない控えめな華やかさ：世界のゲームアウトソーシング業界の現状と機会</h2>
        <p>台北ゲーム開発者フォーラム（TGDF = Taipei Game Developers Forum）は台湾最大規模の開発者フォーラムとなり、毎年数多くの海外人士を含む講師が招かれ、また集まったゲーム産業界の人々の間で多彩な交流が行われる事でお馴染みとなります。今年は新型肺炎の影響でTGDFは初めてTwitchフリーネットライブ方式が採用され7月11，12日の二日間に渡ってフォーラムが挙行されました。</p>
        <p>豊富で多角的な講演企画は業界関係者からも注目され、3,000人以上がネットライブの講演に参加し、各講師の話に耳を傾けました。</p>
        <p>Winking CorporationのCEOであるJohnny Janは要請を受けTGDFの講師として招かれ、多年に渡りアウトソーシング会社を創建してきた経験をもとにアートアウトソーシング業界の現況と、業界のなかでも知る人ぞ知る一面を講演しました。特に近年のアウトソーシング産業は、多くの人たちが描いている印象（低価格、バイト、副業）とは異なり、より多くの顧客は単純に量産の必要性からではなく、寧ろ知られざる「影武者軍団」によって、ゲームプロジェクトの更なる可能性の発掘や成功率の上昇が期待されている事を紹介しました。</p>
        <p>またJohnny Janは講演の中で「現在グローバルの世界では超大型のアウトソーシング会社が存在し、十数年の発展の中で数百人から一部に至っては数千人規模の会社へと発展している。更に彼らは基本的に3Aクラスのレベルで開発フローを管理しており、あたかも大手グローバル企業の支店の様である。その様な会社は往々にして機密保持契約の為、非常に控えめである。しかし彼らの中には有益な上場企業が存在し、更には彼らは世界で最も才能に溢れたグループを抱えている。」とアウトソーシング業界の企業進化の状況を紹介しました。</p>
        <p>そして、ゲーム会社とアウトソーシング企業の間の提携モデル及びアウトソーシング産業に投入する人員の特性についてもそれぞれ言及し、フォーラムに参加するゲーム関係者達に業界の現況と共に、こうした新しい動向を踏まえた形で業界全体の前進ができる様アドバイスを行いました。</p>
        <p>最後にJohnny JanはWinking Corportaionアウトソーシング会社として最も重要なのはクライアントからの信頼を得る事であり、クライアントの為を思う事であると述べ、「全ての作品を助け、全てのゲームメーカ―が並外れた成果を達成できる様全力で支援する！」というビジョンと決意を示し講演を締めくくりました。</p>

        <p>2020.July.11</p>
        `
    }else if(lang == 'kr'){
        modal_title.innerHTML = '당신이 모르는 은근한 사치: 글로벌 아웃소싱 업계의 현황과 찬스';
        model_img.innerHTML = 
        `
        <iframe width="100%" height="480px" src="https://www.youtube.com/embed/h1Yl5Mv8WKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
        model_txt.innerHTML =  
        `
        <h2 class="mb-3">당신이 모르는 은근한 사치: 글로벌 아웃소싱 업계의 현황과 찬스</h2>
        <p>대만 최대규모 게임 개발 대회인 TGDF는 매년 국내외 전문가들을 초청하여 강연을 진행한다. 올해는 바이러스의 영향으로 인해 최초로 Twitch 라이브를 통해 7월 11, 12일에 거행했다. 풍부하고 다채로운 강연 내용은 3천명 관객의 호응으로 성황리에 마무리 되었다.</p>
        <p>Winking Corporation(이하 Winking) CEO Johnny Jan(이하 Johnny)는 토픽 강사를 전담하여 수년간 다져진 아웃소싱 경험으로 업계의 현황 및 많이 알려지지 않은 일면에 대해 다뤘다. 그의 말에 따르면 오늘의 아웃소싱 업계는 지금까지 받았던 편견을 과감히 깨버린다. 적은 연봉, 알바 부업 등 불명예스러운 꼬리표는 이제 어울리지 않는다. 많은 고객들이 아웃소싱 업체를 찾는 이유는 대용량 양산 때문이 아닌 그들이 프로젝트에 더 나은 가능성과 성공율을 부여해 줄 수 있다는것을 깨닫고 있기 때문이다.</p>
        <p>Johnny는 강연중 현재 세계적으로 대형의 아웃소싱 컴퍼니가 대량으로  존재하며 십수년의 발전으로 수백명의, 더하게는 수천명의 직원수를  보유하고 있다고 전했다. 그들은 기본적으로 3A 품질의 관리와 프로세스로 당당히 국제 기업의 대열에 올랐다. 이러한 기업은 비밀 협약에 극도로 신중을 가하며 그들중 상장회사는 세계적인 엘리트 인재를 보유하고 있다.</p>
        <p>또한 Johnny는 아웃소싱 기업과 게임 개발 기업의 협력 방식과 아웃소싱 산업에 참여하는 인원들의 특성 등 을 공유하면서 게임 산업에 종사하는 많은 분들에게 유익한 아웃소싱 업계 현황을 접하게 함으로써 그들로 하여금 새로운 도전을 꿈꾸게 하였다. 마지막으로 Johnny는 Winking 이 아웃소싱 컴퍼니로서의 핵심은 고객들의 믿음을 얻는 것이며「고객의 입장에서 모든 작품과 게임 개발자들과 협력하고 그들로 하여금 노력이 헛되이지 않게 하는것이다. 」라는 비전을 전했다. </p>
        <p>2020.July.11</p>
        `
    }
}

function contentB(){
    if(lang == 'en'){
        modal_title.innerHTML = 'Johnny Jan Spoke at the Forum “Finding Opportunities in the Touchless Economy and Its Post-Pandemic Future” ';
        model_img.innerHTML = '<img class="w-100" src="../img/news/02.jpg">'
        model_txt.innerHTML =  
        `
            <h2 class="mb-3">Johnny Jan Spoke at the Forum “Finding Opportunities in the Touchless Economy and Its Post-Pandemic Future” </h2>
            <p>
            Due to the outbreak of Covid-19 in 2020, each country has imposed entry restrictions and controlled relative industries strictly. Touchless economy, a new global business model has emerged in the pandemic of COVID-19. One of the important technological changes in 2020, which is the development of 5G network service with its high-speed broadband will definitely bring enormous innovation to the game industry.
            </p>
            <p>
            Winking Corporation CEO Johnny Jan was invited to the forum “Finding Opportunities in the Touchless Economy and Its Post-Pandemic Future” as the representative of the developer in the game industry on 3rd July. Joining by the Vice-President of Japan eSports Union (JeSU), Hirokazu Hamamura, who was the former editor of Japan’s largest video game magazine “FAMITSU"; and Kim Eung Won, the representative of Korean largest Telecom, SK Telecom’s brand manager. The three representatives shared the latest news and information on 5G applications in each of their fields and industry.
            </p>
            <p>
            Since 2003 Jan founded Winking Corporation, the team has collaborated with many successful game companies. Winking continually provides outstanding game art outsourcing and game full development services. The games that Winking took part in have released on PC, mobile, Xbox One, Switch, and PS4 currently, and even planning to release on the next-generation console PS5 as well. Jan foresaw the future of the game based on the rich experience in the industry, he then shared his topic: "Next-Generation Games Under High-Speed 5G Network" at the forum.
            </p>
            <p>
            Jan mainly shared three aspects that will critically affect gaming with the offer of 5G service. First of all, the feature of 5G high-speed and zero-latency makes the game downloading process becoming instant as like user is selecting programs on his or her video streaming platform by only one-click. This can significantly impact how the online game will be designed in the future. Since high-speed transmission provides the packet returning to the server instantly, the game developer can design harder and more complex games. 
            </p>
            <p>
            For online battle games, the high bandwidth of 5G will make a great advance on PVP interaction, increasing more immersive interactions of the community, and balancing the fairness of multiplayer gaming. 
            </p>
            <p>
            What is more, the cloud streaming service will change the business model as well. Platforms such as Google and Microsoft are currently promoting their cloud gaming service. By the advantages of large and fast transmission of the packet, players can play those graphically demanded games on mobile or computer. This also allows developers to establish a player's behavior database and support the research on developing a better-experienced game. 
            </p>
            <p>
            Last but not least, Jan said that 5G will have a revolutionary impact on the VR field. The high cost of hardware and dizziness experience of better picture quality in the game is the main challenge faced by VR's mass adoption. Now, in the generation of 5G, VR headset may design into a convenient and light display screen like a set of sunglasses. By using chips to receive realistic images, everyone can own a VR equipment in the future.
            </p>
            <p>
            The speech of Vice-President of Japan Esports Union (JeSU) Hirokazu Hamamura on the future of e-sport and the speech of Korean SK Telecom brand manager Kim Eung Won on the future of cloud streaming on gaming, interactive entertainment, and AR/VR in Korea's market have all emphasized the new industry opportunities and business models under the limitation of the pandemic. 
            </p>
            <p>2020.July.03</p>
        `
    }else if(lang == 'tc'){
        modal_title.innerHTML = '唯晶科技執行長詹承翰出席「5G既出 誰與爭鋒」論壇與各產業專家共同分享疫後零接觸商機 ';
        model_img.innerHTML = '<img class="w-100" src="../img/news/02.jpg">'
        model_txt.innerHTML =  
        `
            <h2 class="mb-3">唯晶科技執行長詹承翰出席「5G既出 誰與爭鋒」論壇與各產業專家共同分享疫後零接觸商機</h2>
            <p>
            在2020年初新冠肺炎(COVID-19)爆發後，各國陸續限制出入境、控管關連人群接觸的產業。這樣的發展，促使零接觸商機成為產業嶄新的模式，而5G建設及高速寬頻的來臨更為遊戲產業帶來巨大的變化。
            </p>
            <p>
            唯晶科技執行長詹承翰受邀代表遊戲開發商，於7月3日出席「5G既出 誰與爭鋒」論壇，與電競平台代表—日本發行量最大的遊戲雜誌「法米通」前總編、日本電競聯盟（JeSU）副會長浜村弘一，以及移動通信商代表—韓國SK Telecom首席品牌經理金應元，共同分享5G應用在產業的最新資訊。
            </p>
            <p>
            詹承翰自2003年創立唯晶科技起，帶領公司底下團隊與全球頂尖的遊戲大廠合作，投入多項美術外包製作以及全流程整案開發。從PC、Mobile、Xbox One、Switch、PS4，甚至到即將推出的PS5平台，都收錄了唯晶科技深度參與的作品。以這樣多年來從事遊戲產業的經驗，更能超前觀察到未來產業的走向，因此這次詹承翰發表的主題為「5G疾速下的次世代網路遊戲」，並在座談會上與兩位不同領域的專家做更進一步的交流。
            </p>
            <p>
            詹承翰在演講中主要以三個面向談及5G將對遊戲產生的改變。首先，5G的快速、零延遲性會使下載遊戲程式如同在隨選視訊上手握遙控器選擇內容的方式，一滑過去便瞬間下載完成，讓人感受不到等待的過程。這特別影響到網路遊戲設計的方向，因為開發商可以藉由5G的高速傳輸讓伺服器端的封包即時回傳，設計複雜度更高的遊戲。
            </p>
            <p>
            5G的高頻寬也會大幅增加連線對戰遊戲中PVP(玩家對玩家)模式的進展，提升多人連線的公平性和社群上更多擬真的互動。
            </p>
            <p>
            再來是雲端串流化服務將會變動商業模式，知名的平台商如Google、Microsoft都在積極的推動雲端遊戲，利用5G網路的優勢讓玩家在手機或電腦上享受過往只能在高端硬體設備上遊玩的遊戲。藉由5G大量傳輸封包的特性，開發廠商也可以更完整地建立玩家的行為數據，支持他們研發出體驗更佳的遊戲產品。
            </p>
            <p>
            最後，詹承翰表示5G會對VR的領域是個顛覆性的衝擊。目前的VR遊戲仍面臨著設備成本高無法普及，或是難以克服兼顧畫面又不造成暈眩的問題。在5G的時代，VR頭戴裝置會製作成輕薄的顯示螢幕與訊號接收設備，在雲端完成3D計算後以5G高速網路即時傳輸大量影像到晶片上，使未來人手一台VR成為未來趨勢。
            </p>
            <p>
            總結日本電競聯盟（JeSU）副會長浜村弘一提出對電競產業未來的看法，以及韓國SK Telecom首席品牌經理金應元談論當前5G的發展如何影響韓國市場上雲端串流遊戲及互動娛樂、AR/VR等，可以了解在受到疫情的限縮下，產業期盼5G萬物互聯的優勢能創造出更多可能性，讓我們的生活更加豐富便利。
            </p>

            <p>2020.July.03</p>
        `
    }else if(lang == 'sc'){
        modal_title.innerHTML = '唯晶科技执行长詹承翰出席「5G既出 谁与争锋」论坛与各产业专家共同分享疫后零接触商机';
        model_img.innerHTML = '<img class="w-100" src="../img/news/02.jpg">'
        model_txt.innerHTML =  
        `
            <h2 class="mb-3"></h2>
            <p>
            在2020年初新冠肺炎(COVID-19)爆发后，各国陆续限制出入境、控管关连人群接触的产业。这样的发展，促使零接触商机成为产业崭新的模式，而5G建设及高速宽带的来临更为游戏产业带来巨大的变化。
            </p>
            <p>
            唯晶科技执行长詹承翰受邀代表游戏开发商，于7月3日出席「5G既出 谁与争锋」论坛，与电竞平台代表—日本发行量最大的游戏杂志「法米通」前总编、日本电竞联盟（JeSU）副会长浜村弘一，以及移动通信商代表—韩国SK Telecom首席品牌经理金应元，共同分享5G应用在产业的最新信息。
            </p>
            <p>
            詹承翰自2003年创立唯晶科技起，带领公司底下团队与全球顶尖的游戏大厂合作，投入多项美术外包制作以及全流程整案开发。从PC、Mobile、Xbox One、Switch、PS4，甚至到即将推出的PS5平台，都收录了唯晶科技深度参与的作品。以这样多年来从事游戏产业的经验，更能超前观察到未来产业的走向，因此这次詹承翰发表的主题为「5G疾速下的次世代网络游戏」，并在座谈会上与两位不同领域的专家做更进一步的交流。
            </p>
            <p>
            詹承翰在演讲中主要以三个面向谈及5G将对游戏产生的改变。首先，5G的快速、零延迟性会使下载游戏程序如同在随选视讯上手握遥控器选择内容的方式，一滑过去便瞬间下载完成，让人感受不到等待的过程。这特别影响到网络游戏设计的方向，因为开发商可以藉由5G的高速传输让服务器端的封包实时回传，设计复杂度更高的游戏。
            </p>
            <p>
            5G的高带宽也会大幅增加联机对战游戏中PVP(玩家对玩家)模式的进展，提升多人联机的公平性和社群上更多拟真的互动。
            </p>
            <p>
            再来是云端串流化服务将会变动商业模式，知名的平台商如Google、Microsoft都在积极的推动云端游戏，利用5G网络的优势让玩家在手机或计算机上享受过往只能在高端硬设备上游玩的游戏。藉由5G大量传输封包的特性，开发厂商也可以更完整地建立玩家的行为数据，支持他们研发出体验更佳的游戏产品。
            </p>
            <p>
            最后，詹承翰表示5G会对VR的领域是个颠覆性的冲击。目前的VR游戏仍面临着设备成本高无法普及，或是难以克服兼顾画面又不造成晕眩的问题。在5G的时代，VR头戴装置会制作成轻薄的显示屏幕与讯号接收设备，在云端完成3D计算后以5G高速网络实时传输大量影像到芯片上，使未来人手一台VR成为未来趋势。
            </p>
            <p>
            总结日本电竞联盟（JeSU）副会长浜村弘一提出对电竞产业未来的看法，以及韩国SK Telecom首席品牌经理金应元谈论当前5G的发展如何影响韩国市场上云端串流游戏及互动娱乐、AR/VR等，可以了解在受到疫情的限缩下，产业期盼5G万物互联的优势能创造出更多可能性，让我们的生活更加丰富便利。
            </p>
            <p>2020.July.03</p>
        `
    }else if(lang == 'jp'){
        modal_title.innerHTML = 'Winking CorporationのJohnny Jan CEOが「5Gの登場、誰がトップを争うか」フォーラムに出席。各業界の専門家と共に新型コロナウイルス危機下におけるゲーム業界の商機について語った。';
        model_img.innerHTML = '<img class="w-100" src="../img/news/02.jpg">'
        model_txt.innerHTML =  
        `
            <h2 class="mb-3"></h2>
            <p>
            2020年初頭、中国で新型コロナウイルスの感染爆発が報じられた。それ以来、世界各国は外国人の入国禁止・制限の措置を行い、感染拡大防止のために一部の業界に対して営業停止を命じた。またその影響もあり、「ゼロタッチ」という概念が生まれ、もとより技術開発が進んでいた高速かつ大容量通信を実現する第5世代移動通信システム「5G」の実装に伴い、ゲーム業界に劇的な変化をもたらす事が予測される。
            </p>
            <p>
            Winking Corporationの Johnny Janはゲーム開発会社の代表として招待され、「5Gの登場、誰がトップを争うか」フォーラムに出席し、eスポーツプラットフォームの代表である日本最大級のゲーム雑誌「ファミ通」の元編集長であり日本eスポーツ連合（JeSU)浜村弘一副会長と韓国最大の移動通信事業者SK Telecomのブランド経営事業部の金應元部長と共に、5Gにおけるゲーム業界への変化を語り合った。
            </p>
            <p>
            Johnny Janは、2003年にWinking Corporationを創立した以来、世界各国の大手ゲーム会社と協力し、ゲームにおける美術制作と開発に注力してきた。PC、モバイル、Xbox One、Switch、PS4を含め、さらに次世代のコンソールゲーム機PS5にも当社が深く参与したタイトルがある。
            </p>
            <p>
            ゲーム業界に対して長年の経験を持ち、業界の方向性を把握している詹承翰社長は「次世代5G通信でのオンラインゲーム」をタイトルとして、違う領域の専門家である他の参加者二人とフォーラムで意見を交わした。
            </p>
            <p>
            Johnny Janは、三つの面で5Gシステムにおけるゲーム業界にもたらす変化を語った。
            </p>
            <p>
            ◇5Gの通信速度により、データのダウンロードは一瞬で完成可能となる。ローディングに掛かる時間が少なくなるため、ゲーム開発業者はより複雑なデザインと構成でオンラインゲームを作る事ができる。
            </p>
            <p>
            ◇5Gの通信環境でのPVP型(プレイヤーVSプレイヤー)のリアルタイム対戦ゲームは、飛躍的に発展すると予想され、ユーザー間の交流、ゲームのバランス性と公平性により注力しなければならない。
            </p>
            <p>
            続いて、Johnny JanはGoogleとMicrosoftを例として、クラウドストレージサービスについて語った。GoogleとMicrosoft両社を含め、数多くの会社は積極的にグランドゲーム事業を推進している。5Gの高速通信によって、プレイヤーはスマホ、PCのブラウザでも、高品質ゲームを遊べる。一方、ゲームの開発会社もユーザーの行動を観察把握し、タイムリーにユーザー体験を改善する事が出来る様になる。
            </p>
            <p>
            最後に、Johnny Janは5Gによって今後のVRゲーム業界が大きく変化していくと述べた。2020年現在、VRゲームはまだ設備のコストが高くて普及できていない事やVR酔いを引き起こすなど、いくつかの課題を抱えているが、5Gシステムの実装により、VR設備は薄型・軽量ディスプレイ付きのヘッドセットで生産され、全てのデータをクラウドストレージに集約し計算され、映像に変換された後にデバイスに送信される形となる。5Gにより、一人に一台VRデバイスの時代がくると考えられる。
            </p>
            <p>
            浜村弘一副会長と金應元部長からは、5Gにおけるeスポーツ業界の未来、クラウドゲームの変化とAR / VRビジネスの未来はすでに見えてきた。新型コロナウイルスの感染拡大の収束がまだみえない現環境下でも高速通信で新しい可能性や便利性を生み出せるかもしれない事が語られた。
            </p>


            <p>2020.July.03</p>
        `
        }else if(lang == 'kr'){
            modal_title.innerHTML = '포럼 「5G출시, 승자는 누구」에 출석한 Winking Corporation CEO Johnny Jan.각 산업 분야 전문가들과 바이러스 이후의 제로접촉 상업기회를 다루다.';
            model_img.innerHTML = '<img class="w-100" src="../img/news/02.jpg">'
            model_txt.innerHTML =  
            `
                <h2 class="mb-3"></h2>
                <p>
                2020년 초, 코로나 바이러스 (COVID-19)가 창궐한 뒤, 각 국에서는 잇따라 출입국 금지령을 내리고 있으며 밀접한 접촉을 요하는 산업을 제약하고 있다.이러한 발전 현황은 제로접촉 산업이 참신한 발전 형식으로 되게 하였으며 5G 건설과 고속 네트워크의 발전은 게임 산업에 거대한 변화를 가져왔다.
                </p>
                <p>
                Winking Corporation의 대표Johnny Jan(이하Johnny) 는 7월 3일 포럼 「5G출시, 승자는 누구」에 초청 받아E-sports대표들: 일본 최대 발매량을 보유하고 있는「패미통(ファミ通)」전 편집장, 일본 E-sports 협회 (JeSU) 부회장 하마무라 히로카즈(浜村弘一), 한국 SK 텔레콤 수석 브랜드 매니저 김응원 등 과 함께 5G의 최신 소식에 대해 공유하는 자리를 가졌다.
                </p>
                <p>
                Johnny는 2003년 Winking Corporation을 창립하고 세계적인 일류 게임 회사와 함께 많은 종류의 그래픽 아웃소싱을 협업했으며 또한 개발에 참여했다. PC, Mobile, Xbox One, Switch, PS4，곧 출시를 앞두고 있는 PS5까지, 많은 플랫폼에서 Winking Corporation이 작업에 참여한 작품들을 만나 볼 수 있다.  다년간 게임산업에 종사한 경험으로 산업 발전의 한 수 앞을 내다 볼 수 있는 역량을 기른 Johnny가 발표할 이번 주제는「5G가 가져올 차세대 온라인 게임」 이다. 포럼에서 두명의 다른 영역의 전문가와 함께 열띈 토론을 진행했다.
                </p>
                <p>
                Johnny는 주요하게 세가지 면으로 5G가 게임 산업에 초래할 변화에 대해 얘기한다. 우선, 5G의 지연 없는 초고속 네트워크는 순식간에 다운로딩을 완성하여 유저가 지루하게 기다리지 않아도 된다. 이는 온라인 게임의 디자인 방향에 많은 영향을 줄 것으로 보이며 개발자는 5G의 속도를 이용해 서버상의 게임 패킷을 실시간으로 빠른 전달이 가능하기 때문에 복잡하고 난이도가 높은 게임을 디자인하기에 요긴하다.
                </p>
                <p>
                또한 5G는 멀티 플레이중 PVP형식의 발전에도 커다란 파장을 일으킬 것이며 소셜미디어 이용자들의 인터랙티브와 멀티플레이의 공평성을 증가한다.
                </p>
                <p>
                클라우드 스트림 서비스 또한 커다란 변화를 초래할 요소이다. 모두가 알고 있는 Google、Microsoft 등 플랫폼에서 적극적으로 클라우드 게임을 추진하고 있으며 5G 는 유저로 하여금 기존에 하드웨어로만 가능했던 게임을 모바일과 PC로도 즐길수 있게 되었다. 5G 대용량 딜리버리의 특성상 개발자는 유저의 광범위한 행위 데이터를 구축하여 그들로 하여금 더 나은 체험을 할 수 있게 한다.
                </p>
                <p>
                끝으로Johnny는 5G가 VR 영역에 전례없는 영향을 가져올 것이라 예측했다. 기존의 VR 게임은 설비의 코스트가 높은 관계로 보급하기 어렵고 스크린을 보면서 드는 어지러움의 문제를 극복하기가 쉽지 않다. 5G 시대에는 VR 헬멧을 가볍고 신호와 데이터 전달이 가능한 스크린으로 제작하여 클라우드에서 3D로 전환하고 곧바로 대량의 영상을 칩으로 전달한다. 이러한 조작으로 근미래에는 모든 이들에게 VR 기기를 보급할 수 있을것이라 예상하는 바이다.
                </p>
                <p>
                일본 E-sports 협회 (JeSU) 부회장 하마무라 히로카즈(浜村弘一)의 E-sports 산업의 미래에 대한 고찰과 한국 SK 텔레콤 수석 브랜드 매니저 김응원의 5G의 발전이 한국 시장의 클라우드 스트림 게임, AR/VR에 미치는 영향에 대한 견해를 종합하여 보았을 때 바이러스의 제한을 받은 현재, 5G의 발전은 더욱더 큰 가능성을 야기 한다는것을 알 수 있으며 이는 우리의 생활을 더욱 편리하고 풍부하게 할 것이다.
                </p>
                <p>2020.July.03</p>
            `
            }
}
function contentC(){
    modal_title.innerHTML = 'Winking Corp and it\'s participation in AAA game production, Destiny 2: Season of The Worthy';
    model_img.innerHTML = '<img class="w-100" src="../img/news/03.jpg">'
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
}
function contentD(){
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
}






model_content_01.addEventListener('click',()=>{
    contentA();
})
model_content_02.addEventListener('click',()=>{
    contentB();
})
model_content_03.addEventListener('click',()=>{
    contentC();
})
model_content_04.addEventListener('click',()=>{
    contentA();
})
model_content_05.addEventListener('click',()=>{
    contentB();
})
model_content_06.addEventListener('click',()=>{
    contentC();
})
model_content_07.addEventListener('click',()=>{
    contrntD();
})
model_content_08.addEventListener('click',()=>{
    contentA();
})
model_content_09.addEventListener('click',()=>{
    contentD();
})


