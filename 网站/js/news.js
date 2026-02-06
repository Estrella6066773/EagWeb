// 新闻数据
const NEWS_DATA = [
    {
        id: '1',
        title: "State Transportation Director Li Jing Lauds Eagle Drive Technology's 360° Driving System during Shenzhen Company Visit",
        date: '2021-05-07',
        time: '17:57',
        summary: 'Provincial Department of Transportation Director Li Jing Visits Eagle Drive and Provides High Praise! On the afternoon of May 6th, Li Jing, Secretary of the Party Leadership Group and Director of the...',
        imageUrl: 'news image/news-feature-1.jpg',
        subHeader: 'Provincial Department of Transportation Director Li Jing Visits Eagle Drive and Provides High Praise!',
        // 正文按顺序：段落与图片穿插，图片用 contentBlocks 中 type:'image' 的 value，命名后续你提供后替换
        contentBlocks: [
            { type: 'text', value: 'On the afternoon of May 6th, Li Jing, Secretary of the Party Leadership Group and Director of the Guangdong Provincial Department of Transportation, along with Deputy Director Zhang Quan and officials from various transportation management departments, visited the Guopingtong Construction Engineering Co., Ltd., the safety driving demonstration base for mack trucks in Guangdong Province, to conduct an onsite inspection and research on road transportation safety issues.' },
            { type: 'image', value: 'news image/news-feature-1.jpg' },
            { type: 'text', value: 'Due to their large size and long wheelbase, mack trucks frequently travel between urban and suburban areas. Drivers often have a weak sense of safety, engaging in illegal behaviors such as overloading, speeding, changing lanes arbitrarily, not following lane discipline, and not maintaining the right lanes of travel. These issues have always been significant pain points and challenges for urban traffic management. The purpose of Li Jing\'s research visit was to understand how to prevent and reduce the frequent occurrence of muck truck traffic accidents at their source.' },
            { type: 'text', value: 'As a premium partner of Guopingtong Construction Engineering Co., Ltd., Eagle Drive Technology has already developed effective solutions for the road transportation safety issues of Mack trucks. Data shows that since Guopingtong installed Eagle Drive\'s independently developed 360° panoramic safe driving assistance system in November 2019, the accident rate has significantly decreased. Comparing data from 2020 to 2019, the number of traffic accidents with liability decreased by 40, while non-liability accidents increased by 17. The system\'s built-in realtime monitoring feature allows for timely reconstruction of accident events, greatly protecting drivers from being wrongly deemed responsible for accidents, avoiding economic losses, and effectively reducing the overall accident rate.' },
            { type: 'image', value: 'news image/news-feature-3.jpg' },
            { type: 'text', value: 'During the investigation, in order to accurately demonstrate the practical effects of the Eagle Drive Technology\'s 360° panoramic safety assistance driving system during operation, Manager Fan, the Sales Director, led Li Jing and the inspection team aboard for a firsthand demonstration. They personally experienced how the system allows visibility of blind spots around the vehicle during operation. Members of the inspection team stood near the front of the vehicle, closely observing its operation and asking occasional questions. They highly praised Shenzhen\'s innovations in the field of intelligent driving assistance.' },
            { type: 'image', value: 'news image/news-feature-4.jpg' },
            { type: 'image', value: 'news image/news-feature-5.jpg' },
            { type: 'text', value: 'Committing to staying current and driving comprehensive reforms in the transportation industry. "Reform is the fundamental force propelling growth. In this new phase of reforms, Guangdong\'s transportation sector will continue to boldly innovate and lead," remarked Li Jing. Throughout the "14th Five-Year Plan" period, the Provincial Department of Transportation will persist in reforming to optimize development, enhancing comprehensive transportation system planning, construction, and management mechanisms. They aim to advance coordinated development across railways, highways, waterways, civil aviation, and accelerate transportation integration in the Pearl River Delta. Eagle Drive Technology remains steadfast in innovating and advancing the 360° panoramic safety driving assistance system, daring to pioneer and striving to become an industry leader, aiming to contribute significantly to Guangdong\'s transportation sector.' }
        ]
    },
    {
        id: '2',
        title: "Fortune Global 500 Company XCMG Visits Eagle Drive Technology for Inspection and Tour",
        date: '2021-04-24',
        time: '18:14',
        summary: 'Fortune Global 500 Company XCMG Visits Eagle Drive Technology for Inspection and Tour. On April 23, 2021, XCMG, a Fortune Global 500 company, ranked first in China\'s construction machinery industry a...',
        imageUrl: 'news image/news-feature-2.jpg',
        subHeader: 'Fortune Global 500 Company XCMG Visits Eagle Drive Technology for Inspection and Tour',
        contentBlocks: [
            { type: 'text', value: 'On April 23, 2021, XCMG, a Fortune Global 500 company, ranked first in China\'s construction machinery industry and fourth globally, visited Eagle Drive Technology. Led by General Manager Chen of XCMG Automotive, the delegation conducted an on-site inspection focusing on the research and development of vehicle-to-vehicle internet safety driving assistance systems.' },
            { type: 'image', value: 'news image/news-feature-2.jpg' },
            { type: 'text', value: 'Eagle Drive Technology\'s Chairman Mr. Zheng, R&D Director Manager Dai, Engineering Director Manager Chen, and Marketing Director Manager Fan all participated in the aforementioned exchange activities.' },
            { type: 'image', value: 'news image/news-feature-6.jpg' },
            { type: 'text', value: 'During the visit, Chairman Zheng introduced General Manager Chen and his team to the company\'s development scale, product production environment, and applications in various scenarios. They toured the production floor to understand our product manufacturing process in detail, thoroughly examining each workshop\'s operational procedures. Additionally, they engaged in in-depth discussions with our technical and marketing staff regarding issues related to the vehicle-to-vehicle internet safety driving assistance system.' },
            { type: 'image', value: 'news image/news-feature-7.jpg' },
            { type: 'text', value: 'In recent years, leveraging its advanced R&D technology and manufacturing capabilities, the company has received numerous accolades, including the National Science and Technology Progress Award (Second Prize), the China Machinery Industry Science and Technology Award (First and Second Prizes), the Top 50 Product of the Year Gold Finger Award in the China Construction Machinery Industry, the National Customer Satisfaction Service Award, the Jiangsu Famous Brand Product, and the Jiangsu Provincial Enterprise Management Modernization Innovation Achievement Award (Second Prize). Adhering to the "people-oriented" employment philosophy, the company boasts strong R&D capabilities, a comprehensive marketing network, advanced manufacturing equipment, robust economic strength, and a favorable working environment. We warmly welcome you to join us in building a world-class enterprise with strong international competitiveness.' },
            { type: 'text', value: 'Xuzhou Construction Machinery Group Co., Ltd. (XCMG) was established in 1989 and has consistently maintained its leading position in China\'s construction machinery industry. Currently, it ranks first in China\'s construction machinery industry and fourth in the global construction machinery industry.' },
            { type: 'text', value: 'In 2018 and 2019, XCMG\'s revenue exceeded 100 billion RMB consecutively. In 2020, its revenue reached 150 billion RMB. XCMG\'s excavators, concrete machinery, and other large equipment have repeatedly held the top spot in China. According to the latest data, in 2020, XCMG\'s excavator sales revenue maintained the top spot in the domestic market for the tenth consecutive year, with significant market share growth across all series of large, medium, and small excavators. The production of excavators exceeded 90,000 units, ranking first globally.' },
            { type: 'text', value: 'Additionally, XCMG Group is undergoing financial restructuring to achieve an overall public listing. This move represents XCMG\'s commitment to deepening the reform of the state-owned enterprise system. Leveraging the complete and robust governance mechanisms of a listed company and the effective support of the capital market, the company\'s profitability is expected to further increase in the future.' },
            { type: 'text', value: 'It is worth mentioning that this aligns with the new round of the three-year action plan for state-owned enterprise reform for 2020-2022, introduced by the State-owned Assets Supervision and Administration Commission (SASAC) of the State Council at a policy briefing on October 12th last year. The plan emphasizes "continuously expanding the scope and field of mixed-ownership reform" and "deepening cooperation with private and small and medium-sized enterprises in the industrial and supply chains to create a mutually integrated and jointly developing situation." This demonstrates XCMG Group\'s strategy to leverage the capital market to enhance the influence and driving force of state-owned assets and enterprises.' },
            { type: 'image', value: 'news image/news-feature-8.jpg' },
            { type: 'text', value: 'Since its establishment, Eagle Drive Technology has been dedicated to the research and development of vehicle-to-vehicle internet safety driving assistance systems. The company has accumulated extensive R&D experience and data in areas such as onboard sensing equipment, computer vision, big data, and deep learning. Currently, Eagle Drive\'s products are sold in over 6 countries worldwide and in more than 50 cities across China, providing relevant technical expertise and mature implementation solutions for intelligent driving in various commercial vehicles. This has created valuable commercial vehicle scenarios with industrialization potential and has gained recognition from many relevant departments. In the future, Eagle Drive will continue to innovate and develop new products, establish a comprehensive intelligent connected vehicle safety driving data analysis platform, and advance the industrialization of vehicle-to-vehicle internet driving systems, striving to create a new era of intelligent vehicle networking.' }
        ]
    },
    {
        id: '3',
        title: "Eagle Drive Technology's Hainan office - Xinchetech Grand Opening!",
        date: '2021-05-03',
        summary: 'Eagle Drive Technology\'s Hainan Office - Xincheng Technology Grand Opening! On May 3, 2021, during this joyous time of national celebration and the vibrant bloom of spring, Eagle Drive Technology\'s 4t...',
        imageUrl: 'news image/news-feature-1.jpg',
        time: '17:57',
        subHeader: 'Provincial Department of Transportation Director Li Jing Visits Eagle Drive and Provides High Praise!',
        contentBlocks: [
            { type: 'text', value: 'On the afternoon of May 6th, Li Jing, Secretary of the Party Leadership Group and Director of the Guangdong Provincial Department of Transportation, along with Deputy Director Zhang Quan and officials from various transportation management departments, visited the Guopingtong Construction Engineering Co., Ltd., the safety driving demonstration base for mack trucks in Guangdong Province, to conduct an onsite inspection and research on road transportation safety issues.' },
            { type: 'image', value: 'news image/news-feature-1.jpg' },
            { type: 'text', value: 'Due to their large size and long wheelbase, mack trucks frequently travel between urban and suburban areas. Drivers often have a weak sense of safety, engaging in illegal behaviors such as overloading, speeding, changing lanes arbitrarily, not following lane discipline, and not maintaining the right lanes of travel. These issues have always been significant pain points and challenges for urban traffic management. The purpose of Li Jing\'s research visit was to understand how to prevent and reduce the frequent occurrence of muck truck traffic accidents at their source.' },
            { type: 'text', value: 'As a premium partner of Guopingtong Construction Engineering Co., Ltd., Eagle Drive Technology has already developed effective solutions for the road transportation safety issues of Mack trucks. Data shows that since Guopingtong installed Eagle Drive\'s independently developed 360° panoramic safe driving assistance system in November 2019, the accident rate has significantly decreased. Comparing data from 2020 to 2019, the number of traffic accidents with liability decreased by 40, while non-liability accidents increased by 17. The system\'s built-in realtime monitoring feature allows for timely reconstruction of accident events, greatly protecting drivers from being wrongly deemed responsible for accidents, avoiding economic losses, and effectively reducing the overall accident rate.' },
            { type: 'image', value: 'news image/news-feature-3.jpg' },
            { type: 'text', value: 'During the investigation, in order to accurately demonstrate the practical effects of the Eagle Drive Technology\'s 360° panoramic safety assistance driving system during operation, Manager Fan, the Sales Director, led Li Jing and the inspection team aboard for a firsthand demonstration. They personally experienced how the system allows visibility of blind spots around the vehicle during operation. Members of the inspection team stood near the front of the vehicle, closely observing its operation and asking occasional questions. They highly praised Shenzhen\'s innovations in the field of intelligent driving assistance.' },
            { type: 'image', value: 'news image/news-feature-4.jpg' },
            { type: 'image', value: 'news image/news-feature-5.jpg' },
            { type: 'text', value: 'Committing to staying current and driving comprehensive reforms in the transportation industry. "Reform is the fundamental force propelling growth. In this new phase of reforms, Guangdong\'s transportation sector will continue to boldly innovate and lead," remarked Li Jing. Throughout the "14th Five-Year Plan" period, the Provincial Department of Transportation will persist in reforming to optimize development, enhancing comprehensive transportation system planning, construction, and management mechanisms. They aim to advance coordinated development across railways, highways, waterways, civil aviation, and accelerate transportation integration in the Pearl River Delta. Eagle Drive Technology remains steadfast in innovating and advancing the 360° panoramic safety driving assistance system, daring to pioneer and striving to become an industry leader, aiming to contribute significantly to Guangdong\'s transportation sector.' }
        ]
    },
    {
        id: '4',
        title: "Eagle Drive Technology's Hainan office - Xinchetech Grand Opening!",
        date: '2021-05-03',
        time: '15:55',
        summary: 'Eagle Drive Technology\'s Hainan Office - Xinchetech Grand Opening! On May 3, 2021, amid the nationwide celebration of spring\'s warmth and vitality, Eagle Drive Technology\'s fourth office, Xinchetech, officially opened in the Yangpu Economic Development Zone of Hainan Province...',
        imageUrl: 'news image/news-feature-9.jpg',
        subHeader: 'Eagle Drive Technology\'s Hainan Office - Xinchetech Grand Opening!',
        contentBlocks: [
            { type: 'text', value: 'On May 3, 2021, amid the nationwide celebration of spring\'s warmth and vitality, Eagle Drive Technology\'s fourth office, Xinchetech, officially opened in the Yangpu Economic Development Zone of Hainan Province. This marks a significant acceleration in Eagle Drive Technology\'s market strategic deployment.' },
            { type: 'image', value: 'news image/news-feature-9.jpg' },
            { type: 'text', value: 'Mr. Zheng Zhiyu, Chairman of Eagle Drive Technology, personally attended the event to deliver his congratulations. He joined Mr. Pu, CEO of Xinchetech, in unveiling the company\'s opening plaque. During the ceremony, they were accompanied by invited leaders from various industries to witness the grand opening of Xinchetech.' },
            { type: 'image', value: 'news image/news-feature-10.jpg' },
            { type: 'text', value: 'Hainan Xinchetech Technology Co., Ltd. has been established in 2021, focusing primarily on selling Eagle Drive Technology\'s independently developed automotive panoramic 360 electronic technology products. Eagle Drive Technology, founded in 2015, has established research and sales bases in Qingdao, Wuhu, and Wuxi. Since its inception, the company has been dedicated to the research and development of vehicle-to-vehicle internet safety driving assistance systems, accumulating rich experience and data in areas such as onboard sensing equipment, computer vision, big data, and deep learning. Currently, its products are sold to over 6 countries globally and across more than 50 cities nationwide, providing mature technological expertise and solutions for intelligent driving in various commercial vehicles.' },
            { type: 'image', value: 'news image/news-feature-11.jpg' },
            { type: 'text', value: 'The official opening of the Hainan office marks market recognition and demand for Eagle Drive Technology, as well as a critical strategic mission for the company\'s steady growth. In the future, Eagle Drive will continue innovating and developing new products, establishing a comprehensive intelligent connected vehicle safety driving data analysis platform. This will advance the industrialization of vehicle-to-vehicle internet driving systems, striving to create a new era of intelligent vehicle networking.' },
            { type: 'image', value: 'news image/news-feature-12.jpg' }
        ]
    },
    {
        id: '5',
        title: "Eagle Drive Technology Makes Appearance at the 19th China International Talent Exchange Conference.",
        date: '2021-04-26',
        time: '18:27',
        summary: 'Eagle Drive Technology Makes Appearance at the 19th China International Talent Exchange Conference. On the morning of April 24th, the 19th China International Talent Exchange Conference opened at the Shenzhen Convention and Exhibition Center. Eagle Drive Technology made its debut at this conference for the first time...',
        imageUrl: 'news image/news-feature-13.jpg',
        subHeader: 'Eagle Drive Technology Makes Appearance at the 19th China International Talent Exchange Conference.',
        contentBlocks: [
            { type: 'text', value: 'On the morning of April 24th, the 19th China International Talent Exchange Conference opened at the Shenzhen Convention and Exhibition Center. Eagle Drive Technology made its debut at this conference for the first time.' },
            { type: 'image', value: 'news image/news-feature-13.jpg' },
            { type: 'text', value: 'This conference, cohosted by the Ministry of Science and Technology (Foreign Experts Bureau) and the Shenzhen Municipal Government, adopts a "dual-engine" exhibition model combining both online and offline elements. The offline exhibition hall is divided into five areas, including the International Science and Technology Innovation and Talent Exchange Comprehensive Pavilion, Talent Recruitment Pavilion, Returnee Talent Innovation and Entrepreneurship Pavilion, and Scientific and Technological Popularization Exhibition Pavilion. Wang Weizhong, Secretary of the Shenzhen Municipal Party Committee, Tan Wei Zhong, Deputy Secretary of the Guangdong Provincial Party Committee and Secretary of the Shenzhen Municipal Government Party Committee, and Wang Xi, Deputy Governor of Guangdong Province, among others, attended the opening ceremony.' },
            { type: 'text', value: 'The China International Talent Exchange Conference was established in 2001 and has successfully held 18 sessions. It is a national, international, and comprehensive exhibition and exchange event focused on international technological innovation and talent exchange resources. With the theme of "Innovation, Development, Cooperation, and Win-Win," it aims to foster global collaboration and development.' },
            { type: 'image', value: 'news image/news-feature-14.jpg' },
            { type: 'text', value: 'Since its establishment, Eagle Drive Technology has been dedicated to using science and technology to address issues such as blind spots and dangerous driving in commercial vehicles. Through the efforts of the company\'s team, it has developed a fully independent intellectual property algorithm system. Through practical application, the products are now sold in over 6 countries worldwide and in more than 50 cities nationwide. This provides relevant technical expertise and mature implementation solutions for intelligent driving in various commercial vehicles, creating valuable commercial vehicle scenarios with industrialization potential. As an emerging high-tech enterprise, Eagle Drive is committed to continuous innovation, unity, leveraging brand advantages, realizing corporate value, and giving back to society.' }
        ]
    },
    {
        id: '6',
        title: "Avoid Visual Blind Spots: Essential Gear for Qingming Travel!",
        date: '2021-04-02',
        summary: 'Avoid Visual Blind Spots: Essential Gear for Qingming Travel! The eagerly anticipated Qingming holiday is just around the corner. In April, the world is full of warmth, blooming flowers, pink peache...',
        imageUrl: 'news image/news-feature-2.jpg',
        time: '18:14',
        subHeader: 'Fortune Global 500 Company XCMG Visits Eagle Drive Technology for Inspection and Tour',
        contentBlocks: [
            { type: 'text', value: 'On April 23, 2021, XCMG, a Fortune Global 500 company, ranked first in China\'s construction machinery industry and fourth globally, visited Eagle Drive Technology. Led by General Manager Chen of XCMG Automotive, the delegation conducted an on-site inspection focusing on the research and development of vehicle-to-vehicle internet safety driving assistance systems.' },
            { type: 'image', value: 'news image/news-feature-2.jpg' },
            { type: 'text', value: 'Eagle Drive Technology\'s Chairman Mr. Zheng, R&D Director Manager Dai, Engineering Director Manager Chen, and Marketing Director Manager Fan all participated in the aforementioned exchange activities.' },
            { type: 'image', value: 'news image/news-feature-6.jpg' },
            { type: 'text', value: 'During the visit, Chairman Zheng introduced General Manager Chen and his team to the company\'s development scale, product production environment, and applications in various scenarios. They toured the production floor to understand our product manufacturing process in detail, thoroughly examining each workshop\'s operational procedures. Additionally, they engaged in in-depth discussions with our technical and marketing staff regarding issues related to the vehicle-to-vehicle internet safety driving assistance system.' },
            { type: 'image', value: 'news image/news-feature-7.jpg' },
            { type: 'text', value: 'In recent years, leveraging its advanced R&D technology and manufacturing capabilities, the company has received numerous accolades, including the National Science and Technology Progress Award (Second Prize), the China Machinery Industry Science and Technology Award (First and Second Prizes), the Top 50 Product of the Year Gold Finger Award in the China Construction Machinery Industry, the National Customer Satisfaction Service Award, the Jiangsu Famous Brand Product, and the Jiangsu Provincial Enterprise Management Modernization Innovation Achievement Award (Second Prize). Adhering to the "people-oriented" employment philosophy, the company boasts strong R&D capabilities, a comprehensive marketing network, advanced manufacturing equipment, robust economic strength, and a favorable working environment. We warmly welcome you to join us in building a world-class enterprise with strong international competitiveness.' },
            { type: 'text', value: 'Xuzhou Construction Machinery Group Co., Ltd. (XCMG) was established in 1989 and has consistently maintained its leading position in China\'s construction machinery industry. Currently, it ranks first in China\'s construction machinery industry and fourth in the global construction machinery industry.' },
            { type: 'text', value: 'In 2018 and 2019, XCMG\'s revenue exceeded 100 billion RMB consecutively. In 2020, its revenue reached 150 billion RMB. XCMG\'s excavators, concrete machinery, and other large equipment have repeatedly held the top spot in China. According to the latest data, in 2020, XCMG\'s excavator sales revenue maintained the top spot in the domestic market for the tenth consecutive year, with significant market share growth across all series of large, medium, and small excavators. The production of excavators exceeded 90,000 units, ranking first globally.' },
            { type: 'text', value: 'Additionally, XCMG Group is undergoing financial restructuring to achieve an overall public listing. This move represents XCMG\'s commitment to deepening the reform of the state-owned enterprise system. Leveraging the complete and robust governance mechanisms of a listed company and the effective support of the capital market, the company\'s profitability is expected to further increase in the future.' },
            { type: 'text', value: 'It is worth mentioning that this aligns with the new round of the three-year action plan for state-owned enterprise reform for 2020-2022, introduced by the State-owned Assets Supervision and Administration Commission (SASAC) of the State Council at a policy briefing on October 12th last year. The plan emphasizes "continuously expanding the scope and field of mixed-ownership reform" and "deepening cooperation with private and small and medium-sized enterprises in the industrial and supply chains to create a mutually integrated and jointly developing situation." This demonstrates XCMG Group\'s strategy to leverage the capital market to enhance the influence and driving force of state-owned assets and enterprises.' },
            { type: 'image', value: 'news image/news-feature-8.jpg' },
            { type: 'text', value: 'Since its establishment, Eagle Drive Technology has been dedicated to the research and development of vehicle-to-vehicle internet safety driving assistance systems. The company has accumulated extensive R&D experience and data in areas such as onboard sensing equipment, computer vision, big data, and deep learning. Currently, Eagle Drive\'s products are sold in over 6 countries worldwide and in more than 50 cities across China, providing relevant technical expertise and mature implementation solutions for intelligent driving in various commercial vehicles. This has created valuable commercial vehicle scenarios with industrialization potential and has gained recognition from many relevant departments. In the future, Eagle Drive will continue to innovate and develop new products, establish a comprehensive intelligent connected vehicle safety driving data analysis platform, and advance the industrialization of vehicle-to-vehicle internet driving systems, striving to create a new era of intelligent vehicle networking.' }
        ]
    },
    {
        id: '7',
        title: "New Product Launch: Gen-3 Smart Sensing Platform for Commercial Fleets",
        date: '2021-03-15',
        summary: 'Unveiling our most advanced hardware platform to date, designed specifically for the rigorous demands of long-haul logistics...',
        imageUrl: 'https://picsum.photos/seed/eagle7/800/500',
        content: [
            'The Gen-3 platform offers 40% more processing power compared to its predecessor.',
            'Enhanced thermal management ensures reliable operation in extreme temperatures.',
            'New AI chips allow for real-time driver fatigue monitoring with higher accuracy.'
        ]
    },
    {
        id: '8',
        title: "Eagle Drive Partners with Leading Logistics Provider to Enhance Safety Standards",
        date: '2021-02-28',
        summary: 'A landmark partnership aimed at reducing traffic accidents by 30% through the implementation of intelligent safety systems...',
        imageUrl: 'https://picsum.photos/seed/eagle8/800/500',
        content: [
            'The pilot program will involve equipping 500 trucks with Eagle Drive\'s full safety suite.',
            'Data gathered from this partnership will be used to refine our predictive collision algorithms.',
            'Both companies are committed to achieving a vision of zero accidents on the highway.'
        ]
    }
];

// 分页配置
const ITEMS_PER_PAGE = 10;
let currentPage = 1;

// 正文图片点击放大
function openNewsLightbox(src) {
    const lb = document.getElementById('news-image-lightbox');
    if (!lb) return;
    const img = lb.querySelector('.news-lightbox-img');
    if (img) img.src = src;
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeNewsLightboxOnEscape);
}

function closeNewsLightbox() {
    const lb = document.getElementById('news-image-lightbox');
    if (!lb) return;
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', closeNewsLightboxOnEscape);
}

function closeNewsLightboxOnEscape(e) {
    if (e.key === 'Escape') closeNewsLightbox();
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 正文图片点击放大（事件委托）
    document.addEventListener('click', function(e) {
        const el = e.target.closest('.news-article-image-clickable');
        if (el) {
            e.preventDefault();
            const src = el.getAttribute('data-full-src');
            if (src) openNewsLightbox(src);
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && document.activeElement && document.activeElement.classList.contains('news-article-image-clickable')) {
            const src = document.activeElement.getAttribute('data-full-src');
            if (src) openNewsLightbox(src);
        }
    });
    const lb = document.getElementById('news-image-lightbox');
    if (lb) {
        lb.querySelector('.news-lightbox-backdrop').addEventListener('click', closeNewsLightbox);
        lb.querySelector('.news-lightbox-close').addEventListener('click', closeNewsLightbox);
    }

    // 检查 URL 参数，判断是显示列表还是详情
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');
    
    if (newsId) {
        showNewsDetail(newsId);
    } else {
        showNewsList();
    }
});

// 显示新闻列表
function showNewsList() {
    document.getElementById('news-list-page').style.display = 'block';
    document.getElementById('news-detail-page').style.display = 'none';
    
    // 重置 URL
    window.history.pushState({}, '', 'news.html');
    
    renderFeaturedNews();
    renderRegularNews();
    renderPagination();
}

// 显示新闻详情
function showNewsDetail(newsId) {
    const news = NEWS_DATA.find(n => n.id === newsId);
    
    if (!news) {
        alert('Article not found.');
        showNewsList();
        return;
    }
    
    document.getElementById('news-list-page').style.display = 'none';
    document.getElementById('news-detail-page').style.display = 'block';
    
    // 更新 URL
    window.history.pushState({}, '', `news.html?id=${newsId}`);
    
    renderNewsDetail(news);
    window.scrollTo(0, 0);
}

// 渲染特色新闻
function renderFeaturedNews() {
    const featuredNews = NEWS_DATA.slice(0, 2);
    const container = document.getElementById('featured-news');
    
    container.innerHTML = featuredNews.map(news => `
        <div class="news-featured-card" onclick="showNewsDetail('${news.id}')">
            <div class="news-featured-image">
                <img src="${news.imageUrl}" alt="${news.title}">
            </div>
            <h3 class="news-featured-title">${news.title}</h3>
            <p class="news-featured-date">${news.date}</p>
            <p class="news-featured-summary">${news.summary}</p>
            <div class="news-featured-arrow">
                <i class="fas fa-long-arrow-alt-right"></i>
            </div>
        </div>
    `).join('');
}

// 渲染常规新闻列表
function renderRegularNews() {
    const allRegularNews = NEWS_DATA.slice(2);
    const totalPages = Math.ceil(allRegularNews.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentRegularNews = allRegularNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    
    const container = document.getElementById('regular-news');
    
    container.innerHTML = currentRegularNews.map(news => `
        <div class="news-list-item" onclick="showNewsDetail('${news.id}')">
            <div class="news-list-header">
                <h3 class="news-list-title">${news.title}</h3>
                <span class="news-list-date">${news.date}</span>
            </div>
            <p class="news-list-summary">${news.summary}</p>
            <div class="news-list-arrow">
                <i class="fas fa-long-arrow-alt-right"></i>
            </div>
        </div>
    `).join('');
}

// 渲染分页
function renderPagination() {
    const allRegularNews = NEWS_DATA.slice(2);
    const totalPages = Math.ceil(allRegularNews.length / ITEMS_PER_PAGE);
    const container = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // 上一页按钮
    html += `
        <button class="news-pagination-btn" 
                onclick="changePage(${currentPage - 1})" 
                ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // 页码按钮
    for (let i = 1; i <= totalPages; i++) {
        html += `
            <button class="news-pagination-number ${currentPage === i ? 'active' : ''}" 
                    onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    // 下一页按钮
    html += `
        <button class="news-pagination-btn" 
                onclick="changePage(${currentPage + 1})" 
                ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    container.innerHTML = html;
}

// 切换页码
function changePage(page) {
    const allRegularNews = NEWS_DATA.slice(2);
    const totalPages = Math.ceil(allRegularNews.length / ITEMS_PER_PAGE);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderRegularNews();
    renderPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 渲染新闻详情
function renderNewsDetail(news) {
    const container = document.getElementById('news-article-content');
    const timeStr = news.time || '17:57';

    let bodyHtml = '';
    if (news.contentBlocks) {
        // 按 contentBlocks 顺序渲染段落与图片；连续多张图并排显示
        let i = 0;
        while (i < news.contentBlocks.length) {
            const block = news.contentBlocks[i];
            if (block.type === 'text') {
                bodyHtml += `<p>${block.value}</p>`;
                i++;
                continue;
            }
            if (block.type === 'image') {
                let j = i;
                while (j < news.contentBlocks.length && news.contentBlocks[j].type === 'image') j++;
                const imageBlocks = news.contentBlocks.slice(i, j);
                i = j;
                const imgHtml = (src) => `<div class="news-article-image news-article-image-clickable" data-full-src="${src}" role="button" tabindex="0" title="点击查看大图"><img src="${src}" alt=""></div>`;
                if (imageBlocks.length === 1) {
                    bodyHtml += imgHtml(imageBlocks[0].value);
                } else {
                    bodyHtml += `<div class="news-article-images-row">${imageBlocks.map(b => imgHtml(b.value)).join('')}</div>`;
                }
                continue;
            }
            i++;
        }
    } else {
        // 兼容旧结构：先全部段落，再 detailedImages
        const contentHtml = (news.content || []).map(p => `<p>${p}</p>`).join('');
        const images = news.detailedImages || [news.imageUrl];
        const imgHtml = (src) => `<div class="news-article-image news-article-image-clickable" data-full-src="${src}" role="button" tabindex="0" title="点击查看大图"><img src="${src}" alt=""></div>`;
        const imagesHtml = images.map(img => imgHtml(img)).join('');
        bodyHtml = contentHtml + (imagesHtml ? `<div class="news-article-images">${imagesHtml}</div>` : '');
    }

    let subHeaderHtml = '';
    if (news.subHeader) {
        subHeaderHtml = `<div class="news-article-subheader">${news.subHeader}</div>`;
    }

    container.innerHTML = `
        <header class="news-article-header">
            <h1 class="news-article-title">${news.title}</h1>
            <div class="news-article-meta">
                <span class="news-article-meta-item">
                    <i class="far fa-calendar-alt"></i>
                    ${news.date}
                </span>
                <span class="news-article-meta-separator">|</span>
                <span class="news-article-meta-item">
                    <i class="far fa-clock"></i>
                    ${timeStr}
                </span>
            </div>
        </header>

        ${subHeaderHtml}

        <div class="news-article-content">
            ${bodyHtml}
        </div>

        <div class="news-article-bottom">
            <button onclick="showNewsList()" class="news-back-btn-large">
                <i class="fas fa-list-ul"></i>
                <span>Back to News List</span>
            </button>
        </div>
    `;
}
