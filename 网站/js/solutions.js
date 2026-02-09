document.addEventListener('DOMContentLoaded', function() {
    console.log('解决方案页面加载完成');
    
    // ============================
    // 基础交互功能
    // ============================
    
    // 导航栏滚动效果
    const header = document.querySelector('.dark-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const bars = document.querySelectorAll('.bar');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 汉堡菜单切换
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // 汉堡菜单动画
        bars[0].classList.toggle('transform', navLinks.classList.contains('active'));
        bars[1].classList.toggle('opacity-0', navLinks.classList.contains('active'));
        bars[2].classList.toggle('transform', navLinks.classList.contains('active'));
        
        if (navLinks.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            bars[1].style.opacity = '0';
        } else {
            bars[0].style.transform = 'none';
            bars[2].style.transform = 'none';
            bars[1].style.opacity = '1';
        }
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 关闭移动菜单
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    bars[0].style.transform = 'none';
                    bars[2].style.transform = 'none';
                    bars[1].style.opacity = '1';
                }
            }
        });
    });
    
    // 解决方案卡片悬停效果
    const solutionCards = document.querySelectorAll('.solution-card');
    
    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 详情卡片悬停效果
    const detailItems = document.querySelectorAll('.detail-item');
    
    detailItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // ============================
    // 固定侧边栏功能
    // ============================
    
    const backToTopBtn = document.getElementById('backToTop');
    const phoneIcon = document.getElementById('phoneIcon');
    const wechatIcon = document.getElementById('wechatIcon');
    const phonePopup = document.getElementById('phonePopup');
    const wechatPopup = document.getElementById('wechatPopup');
    const closePopupBtns = document.querySelectorAll('.close-popup');
    
    // 返回顶部功能
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 显示/隐藏电话弹出框
    phoneIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        phonePopup.classList.toggle('active');
        wechatPopup.classList.remove('active');
    });
    
    // 显示/隐藏微信弹出框
    wechatIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        wechatPopup.classList.toggle('active');
        phonePopup.classList.remove('active');
    });
    
    // 关闭弹出框
    closePopupBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            phonePopup.classList.remove('active');
            wechatPopup.classList.remove('active');
        });
    });
    
    // 点击页面其他区域关闭弹出框
    document.addEventListener('click', function(e) {
        if (!phonePopup.contains(e.target) && !phoneIcon.contains(e.target)) {
            phonePopup.classList.remove('active');
        }
        if (!wechatPopup.contains(e.target) && !wechatIcon.contains(e.target)) {
            wechatPopup.classList.remove('active');
        }
    });
    
    // ============================
    // 解决方案图片查看功能
    // ============================
    
    const solutionCardsAll = document.querySelectorAll('.solution-card');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageIndicator = document.getElementById('imageIndicator');
    
    let currentIndex = 0;
    const images = [];
    
    // 收集图片数据（解决方案卡片）
    solutionCardsAll.forEach((card, index) => {
        const img = card.querySelector('img');
        images.push({
            thumbnail: img.src,
            full: img.getAttribute('data-full'),
            title: card.querySelector('h3').textContent,
            description: card.querySelector('p').textContent
        });
        
        // 点击卡片打开全屏查看
        card.addEventListener('click', function() {
            currentIndex = index;
            openModal();
        });
    });

    // 收集图片数据（新增可放大图片）
    const zoomables = document.querySelectorAll('.zoomable');
    zoomables.forEach((el) => {
        const idx = images.length;
        const fullSrc = el.getAttribute('data-full') || el.src;
        images.push({
            thumbnail: el.src,
            full: fullSrc,
            title: el.getAttribute('alt') || 'Image',
            description: ''
        });
        el.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = idx;
            openModal();
        });
    });

    const monTrack = document.getElementById('solMonTrack');
    const solMonPrevBtn = document.querySelector('.sol-mon-prev');
    const solMonNextBtn = document.querySelector('.sol-mon-next');
    if (monTrack && solMonPrevBtn && solMonNextBtn) {
        function getScrollDelta() {
            const firstItem = monTrack.querySelector('img');
            const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : monTrack.clientWidth * 0.8;
            const gapStr = getComputedStyle(monTrack).gap || '0';
            const gap = parseFloat(gapStr);
            return itemWidth + (isNaN(gap) ? 0 : gap);
        }
        solMonPrevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            monTrack.scrollBy({ left: -getScrollDelta(), behavior: 'smooth' });
        });
        solMonNextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            monTrack.scrollBy({ left: getScrollDelta(), behavior: 'smooth' });
        });
    }
    
    // 获取所有指示点
    const dots = document.querySelectorAll('.indicator-dot');
    
    // 更新指示点状态
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // 打开模态框
    function openModal() {
        updateModalImage();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateDots();
    }
    
    // 关闭模态框
    function closeImageModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // 更新模态框图片
    function updateModalImage() {
        const currentImage = images[currentIndex];
        modalImage.src = currentImage.full;
        modalImage.alt = currentImage.title;
        
        // 图片加载完成后的回调
        modalImage.onload = function() {
            console.log('图片加载完成:', currentImage.title);
        };
        
        modalImage.onerror = function() {
            console.error('图片加载失败:', currentImage.full);
            modalImage.src = currentImage.thumbnail; // 如果高清图加载失败，回退到缩略图
        };
    }
    
    // 显示上一张图片
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalImage();
        updateDots();
    }
    
    // 显示下一张图片
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage();
        updateDots();
    }
    
    // 事件监听
    closeModal.addEventListener('click', closeImageModal);
    
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showPrevImage();
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showNextImage();
    });
    
    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // 点击指示点切换图片
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            updateModalImage();
            updateDots();
        });
    });
    
    // 键盘导航
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeImageModal();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
    
    // 触摸滑动支持
    let touchStartX = 0;
    modal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    modal.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        const diffX = touchStartX - touchEndX;
        
        if (Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                showNextImage();
            } else {
                showPrevImage();
            }
        }
    });
    
    // 图片预加载
    function preloadImages() {
        images.forEach((img) => {
            const image = new Image();
            image.src = img.full;
        });
    }
    
    // ============================
    // 合作伙伴功能
    // ============================
    
    const partnersGrid = document.getElementById('partnersGrid');
    const prevPartnerBtn = document.getElementById('prevPartner');
    const nextPartnerBtn = document.getElementById('nextPartner');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageNumbers = document.querySelectorAll('.page-number');
    const partnerModal = document.getElementById('partnerModal');
    const partnerModalImage = document.getElementById('partnerModalImage');
    const closePartnerModal = document.getElementById('closePartnerModal');
    const partnerPrevBtn = document.getElementById('partnerPrevBtn');
    const partnerNextBtn = document.getElementById('partnerNextBtn');
    const partnerName = document.getElementById('partnerName');
    
    // 合作伙伴数据
    const partnersData = [
        { name: '申龙客车', logo: 'images/partners/shenlong.png', full: 'images/partners/shenlong-full.png' },
        { name: '中国中车', logo: 'images/partners/crrc.png', full: 'images/partners/crrc-full.png' },
        { name: '沃客', logo: 'images/partners/walker.png', full: 'images/partners/walker-full.png' },
        { name: 'JNW', logo: 'images/partners/jnw.png', full: 'images/partners/jnw-full.png' },
        { name: '中通客车', logo: 'images/partners/zhongtong.png', full: 'images/partners/zhongtong-full.png' },
        { name: 'ZHONG TONG', logo: 'images/partners/zhongtong2.png', full: 'images/partners/zhongtong2-full.png' },
        { name: '空调集', logo: 'images/partners/aircon.png', full: 'images/partners/aircon-full.png' },
        { name: '吉利', logo: 'images/partners/geely.png', full: 'images/partners/geely-full.png' },
        { name: 'BYD', logo: 'images/partners/byd.png', full: 'images/partners/byd-full.png' },
        { name: '东风', logo: 'images/partners/dongfeng.png', full: 'images/partners/dongfeng-full.png' },
        { name: '福田', logo: 'images/partners/foton.png', full: 'images/partners/foton-full.png' },
        { name: '宇通', logo: 'images/partners/yutong.png', full: 'images/partners/yutong-full.png' }
    ];
    
    let currentPartnerIndex = 0;
    let currentPage = 1;
    const itemsPerPage = 6;
    let currentPartnerImages = [];
    
    // 初始化合作伙伴网格
    function initializePartnersGrid() {
        partnersGrid.innerHTML = '';
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, partnersData.length);
        const currentPartners = partnersData.slice(startIndex, endIndex);
        
        currentPartnerImages = currentPartners;
        
        currentPartners.forEach((partner, index) => {
            const partnerItem = document.createElement('div');
            partnerItem.className = 'partner-item';
            partnerItem.setAttribute('data-index', index);
            
            partnerItem.innerHTML = `
                <div class="partner-logo-container">
                    <img src="${partner.logo}" alt="${partner.name}" class="partner-logo">
                </div>
                <div class="partner-name">${partner.name}</div>
            `;
            
            partnersGrid.appendChild(partnerItem);
            
            // 点击合作伙伴logo打开查看器
            partnerItem.addEventListener('click', function() {
                currentPartnerIndex = index;
                openPartnerModal();
            });
        });
        
        // 更新分页状态
        updatePagination();
    }
    
    // 更新分页状态
    function updatePagination() {
        const totalPages = Math.ceil(partnersData.length / itemsPerPage);
        
        // 更新页面按钮状态
        pageNumbers.forEach(page => {
            const pageNum = parseInt(page.getAttribute('data-page'));
            page.classList.toggle('active', pageNum === currentPage);
            
            // 如果页面数超过总页数，隐藏多余的页码
            if (pageNum > totalPages) {
                page.style.display = 'none';
            } else {
                page.style.display = 'flex';
            }
        });
        
        // 更新上一页/下一页按钮状态
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
        
        // 如果当前页没有数据，调整到最后一页
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
            initializePartnersGrid();
        }
    }
    
    // 打开合作伙伴查看器
    function openPartnerModal() {
        updatePartnerModalImage();
        partnerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // 关闭合作伙伴查看器
    function closePartnerModalFunc() {
        partnerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // 更新合作伙伴查看器图片
    function updatePartnerModalImage() {
        const currentPartner = currentPartnerImages[currentPartnerIndex];
        if (!currentPartner) return;
        
        partnerModalImage.src = currentPartner.full;
        partnerModalImage.alt = currentPartner.name;
        partnerName.textContent = currentPartner.name;
        
        partnerModalImage.onload = function() {
            console.log('合作伙伴图片加载完成:', currentPartner.name);
        };
        
        partnerModalImage.onerror = function() {
            console.error('合作伙伴图片加载失败:', currentPartner.full);
            partnerModalImage.src = currentPartner.logo;
        };
    }
    
    // 显示上一个合作伙伴
    function showPrevPartner() {
        currentPartnerIndex = (currentPartnerIndex - 1 + currentPartnerImages.length) % currentPartnerImages.length;
        updatePartnerModalImage();
    }
    
    // 显示下一个合作伙伴
    function showNextPartner() {
        currentPartnerIndex = (currentPartnerIndex + 1) % currentPartnerImages.length;
        updatePartnerModalImage();
    }
    
    // 切换到上一页
    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            initializePartnersGrid();
        }
    }
    
    // 切换到下一页
    function goToNextPage() {
        const totalPages = Math.ceil(partnersData.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            initializePartnersGrid();
        }
    }
    
    // 跳转到指定页面
    function goToPage(pageNum) {
        const totalPages = Math.ceil(partnersData.length / itemsPerPage);
        if (pageNum >= 1 && pageNum <= totalPages && pageNum !== currentPage) {
            currentPage = pageNum;
            initializePartnersGrid();
        }
    }
    
    // 合作伙伴图片轮播
    let carouselInterval;
    let currentCarouselIndex = 0;
    
    function startCarousel() {
        clearInterval(carouselInterval);
        
        carouselInterval = setInterval(() => {
            if (currentCarouselIndex < partnersData.length - 1) {
                currentCarouselIndex++;
            } else {
                currentCarouselIndex = 0;
            }
            
            const itemsPerRow = window.innerWidth < 480 ? 2 : 
                               window.innerWidth < 768 ? 3 : 
                               window.innerWidth < 1024 ? 4 : 6;
            
            const offset = -currentCarouselIndex * (100 / itemsPerRow);
            partnersGrid.style.transform = `translateX(${offset}%)`;
        }, 3000);
    }
    
    function stopCarousel() {
        clearInterval(carouselInterval);
    }
    
    // 合作伙伴轮播控制
    prevPartnerBtn.addEventListener('click', function() {
        stopCarousel();
        if (currentCarouselIndex > 0) {
            currentCarouselIndex--;
        } else {
            currentCarouselIndex = Math.ceil(partnersData.length / itemsPerPage) - 1;
        }
        
        const itemsPerRow = window.innerWidth < 480 ? 2 : 
                           window.innerWidth < 768 ? 3 : 
                           window.innerWidth < 1024 ? 4 : 6;
        
        const offset = -currentCarouselIndex * (100 / itemsPerRow);
        partnersGrid.style.transform = `translateX(${offset}%)`;
        startCarousel();
    });
    
    nextPartnerBtn.addEventListener('click', function() {
        stopCarousel();
        if (currentCarouselIndex < Math.ceil(partnersData.length / itemsPerPage) - 1) {
            currentCarouselIndex++;
        } else {
            currentCarouselIndex = 0;
        }
        
        const itemsPerRow = window.innerWidth < 480 ? 2 : 
                           window.innerWidth < 768 ? 3 : 
                           window.innerWidth < 1024 ? 4 : 6;
        
        const offset = -currentCarouselIndex * (100 / itemsPerRow);
        partnersGrid.style.transform = `translateX(${offset}%)`;
        startCarousel();
    });
    
    // 合作伙伴事件监听
    prevPageBtn.addEventListener('click', goToPrevPage);
    nextPageBtn.addEventListener('click', goToNextPage);
    
    pageNumbers.forEach(page => {
        page.addEventListener('click', function() {
            const pageNum = parseInt(this.getAttribute('data-page'));
            goToPage(pageNum);
        });
    });
    
    closePartnerModal.addEventListener('click', closePartnerModalFunc);
    
    partnerPrevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showPrevPartner();
    });
    
    partnerNextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showNextPartner();
    });
    
    // 点击合作伙伴查看器背景关闭
    partnerModal.addEventListener('click', function(e) {
        if (e.target === partnerModal) {
            closePartnerModalFunc();
        }
    });
    
    // 合作伙伴键盘导航
    document.addEventListener('keydown', function(e) {
        if (!partnerModal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closePartnerModalFunc();
                break;
            case 'ArrowLeft':
                showPrevPartner();
                break;
            case 'ArrowRight':
                showNextPartner();
                break;
        }
    });
    
    // 合作伙伴触摸滑动支持
    let partnerTouchStartX = 0;
    partnerModal.addEventListener('touchstart', function(e) {
        partnerTouchStartX = e.changedTouches[0].screenX;
    });
    
    partnerModal.addEventListener('touchend', function(e) {
        const partnerTouchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        const diffX = partnerTouchStartX - partnerTouchEndX;
        
        if (Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                showNextPartner();
            } else {
                showPrevPartner();
            }
        }
    });
    
    // 合作伙伴图片预加载
    function preloadPartnerImages() {
        partnersData.forEach(partner => {
            const image = new Image();
            image.src = partner.full;
        });
    }
    
    // 调整轮播项目宽度
    function adjustCarouselItems() {
        const itemsPerRow = window.innerWidth < 480 ? 2 : 
                           window.innerWidth < 768 ? 3 : 
                           window.innerWidth < 1024 ? 4 : 6;
        
        document.querySelectorAll('.partner-item').forEach(item => {
            item.style.flex = `0 0 calc(${100 / itemsPerRow}% - 20px)`;
        });
    }
    
    // 窗口大小调整监听
    window.addEventListener('resize', adjustCarouselItems);
    
    // ============================
    // 页面初始化
    // ============================
    
    function initializePage() {
        console.log('初始化解决方案页面');
        
        // 初始化合作伙伴网格
        initializePartnersGrid();
        
        // 调整轮播项目宽度
        adjustCarouselItems();
        
        // 页面加载完成后预加载图片
        window.addEventListener('load', function() {
            preloadImages();
            preloadPartnerImages();
            
            // 开始合作伙伴轮播
            startCarousel();
            
            console.log('页面完全加载完成');
        });
        
        // 鼠标悬停时停止轮播
        partnersGrid.addEventListener('mouseenter', stopCarousel);
        partnersGrid.addEventListener('mouseleave', startCarousel);
        
        // 页面加载动画
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);
    }
    
    // 执行初始化
    initializePage();
});
