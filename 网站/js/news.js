// 新闻数据
const NEWS_DATA = [
    {
        id: '1',
        title: "State Transportation Director Li Jing Lauds Eagle Drive Technology's 360° Driving System during Shenzhen Company Visit",
        date: '2021-05-07',
        summary: 'Provincial Department of Transportation Director Li Jing Visits Eagle Drive and Provides High Praise! On the afternoon of May 6th, Li Jing, Secretary of the Party Leadership Group and Director of the...',
        imageUrl: 'https://picsum.photos/seed/eagle1/800/500',
        subHeader: 'Provincial Department of Transportation Director Li Jing Visits Eagle Drive and Provides High Praise!',
        content: [
            'On the afternoon of May 6th, Li Jing, Secretary of the Party Leadership Group and Director of the Guangdong Provincial Department of Transportation, along with Deputy Director Zhang Quan and officials from various transportation management departments, visited the Guopingtong Construction Engineering Co., Ltd., the safety driving demonstration base for mack trucks in Guangdong Province, to conduct an onsite inspection and research on road transportation safety issues.',
            'The director spent significant time reviewing the 360° visual system and its impact on heavy vehicle safety. He noted that the integration of AI and high-definition imaging is crucial for the future of commercial transit.',
            'Eagle Drive Technology demonstrated their latest advancements in ADAS and blind-spot monitoring systems, which were met with enthusiasm from the delegation.'
        ],
        detailedImages: [
            'https://picsum.photos/seed/eagle1_detail1/800/600',
            'https://picsum.photos/seed/eagle1_detail2/800/600'
        ]
    },
    {
        id: '2',
        title: "Fortune Global 500 Company XCMG Visits Eagle Drive Technology for Inspection and Tour",
        date: '2021-04-24',
        summary: 'Fortune Global 500 Company XCMG Visits Eagle Drive Technology for Inspection and Tour. On April 23, 2021, XCMG, a Fortune Global 500 company, ranked first in China\'s construction machinery industry a...',
        imageUrl: 'https://picsum.photos/seed/eagle2/800/500',
        content: [
            'The XCMG delegation was impressed by the facility\'s commitment to quality and innovation in the field of intelligent driving.',
            'A series of collaborative projects were discussed during the visit, focusing on the future of construction equipment automation.',
            'XCMG recognized Eagle Drive as a key partner in their digital transformation roadmap.'
        ]
    },
    {
        id: '3',
        title: "Eagle Drive Technology's Hainan office - Xinchetech Grand Opening!",
        date: '2021-05-03',
        summary: 'Eagle Drive Technology\'s Hainan Office - Xincheng Technology Grand Opening! On May 3, 2021, during this joyous time of national celebration and the vibrant bloom of spring, Eagle Drive Technology\'s 4t...',
        imageUrl: 'https://picsum.photos/seed/eagle3/800/500',
        content: [
            'The new office in Hainan marks a significant step in the company\'s regional expansion strategy.',
            'Local government officials attended the ceremony, highlighting the importance of high-tech investment in the region.',
            'The facility will serve as a hub for research and customer support in southern China.'
        ]
    },
    {
        id: '4',
        title: "Eagle Drive Technology Makes Appearance at the 19th China International Talent Exchange Conference.",
        date: '2021-04-26',
        summary: 'Eagle Drive Technology Makes Appearance at the 19th China International Talent Exchange Conference. On the morning of April 24th, the 19th China International Talent Exchange Conference opened at th...',
        imageUrl: 'https://picsum.photos/seed/eagle4/800/500',
        content: [
            'The conference provided an excellent platform for Eagle Drive to showcase its core technologies to a global audience.',
            'Recruitment of high-level talent was a key objective, as the company continues to grow its R&D capabilities.',
            'Several innovative patents were presented, drawing significant attention from industry experts.'
        ]
    },
    {
        id: '5',
        title: "Eagle Drive Technology Chairman Zheng Zhiyu Invited to Participate in the 2021 Liuzhou Tour for High-End Talent Innovation and Entrepreneurship",
        date: '2021-04-23',
        summary: 'Eagle Drive Technology Chairman Zheng Zhiyu Invited to Participate in the 2021 Liuzhou Tour for High-End Talent Innovation and Entrepreneurship. This prestigious event brought together leaders...',
        imageUrl: 'https://picsum.photos/seed/eagle5/800/500',
        content: [
            'Chairman Zheng shared insights on the integration of 5G and intelligent driving at the summit.',
            'The visit fostered connections with local industry leaders in Liuzhou, known as a major automotive manufacturing hub.',
            'Partnership agreements were signed to explore new applications for Eagle Drive\'s sensing technology.'
        ]
    },
    {
        id: '6',
        title: "Avoid Visual Blind Spots: Essential Gear for Qingming Travel!",
        date: '2021-04-02',
        summary: 'Avoid Visual Blind Spots: Essential Gear for Qingming Travel! The eagerly anticipated Qingming holiday is just around the corner. In April, the world is full of warmth, blooming flowers, pink peache...',
        imageUrl: 'https://picsum.photos/seed/eagle6/800/500',
        content: [
            'Safety remains our top priority during peak travel seasons.',
            'Our 360° surround-view systems help drivers navigate crowded tourist spots with ease and confidence.',
            'Tips for safe driving: Always check your monitors, maintain safe distances, and ensure your ADAS systems are fully operational.'
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

// 初始化
document.addEventListener('DOMContentLoaded', function() {
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
    
    let imagesHtml = '';
    const images = news.detailedImages || [news.imageUrl];
    imagesHtml = images.map(img => `
        <div class="news-article-image">
            <img src="${img}" alt="Detail">
        </div>
    `).join('');
    
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
                    17:57
                </span>
            </div>
        </header>
        
        ${subHeaderHtml}
        
        <div class="news-article-content">
            ${news.content.map(p => `<p>${p}</p>`).join('')}
        </div>
        
        <div class="news-article-images">
            ${imagesHtml}
        </div>
        
        <div class="news-article-bottom">
            <button onclick="showNewsList()" class="news-back-btn-large">
                <i class="fas fa-list-ul"></i>
                <span>Back to News List</span>
            </button>
        </div>
    `;
}
