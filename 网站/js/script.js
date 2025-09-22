// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
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
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 导航栏高度偏移
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
    
    // 服务卡片悬停效果
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 车辆类型卡片悬停效果
    const vehicleTypes = document.querySelectorAll('.vehicle-type');
    
    vehicleTypes.forEach(type => {
        type.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#0066cc';
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 102, 204, 0.3)';
        });
        
        type.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 统计数字动画
    const animateStats = function() {
        const statsSection = document.querySelector('.algorithm-section');
        const statNumbers = document.querySelectorAll('.stat-number');
        let animated = false;
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    statNumbers.forEach(number => {
                        const target = parseInt(number.getAttribute('data-target'));
                        const duration = 2000; // 动画持续时间
                        const step = target / (duration / 16); // 每16ms更新一次
                        let current = 0;
                        
                        const updateNumber = function() {
                            current += step;
                            if (current < target) {
                                number.textContent = Math.floor(current);
                                requestAnimationFrame(updateNumber);
                            } else {
                                number.textContent = target;
                            }
                        };
                        
                        updateNumber();
                    });
                    
                    animated = true;
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });
        
        if (statsSection) {
            observer.observe(statsSection);
        }
    };
    
    // 初始化统计动画
    animateStats();
    
    // 图片懒加载
    const lazyLoadImages = function() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        }, { threshold: 0.1 });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    };
    
    // 初始化图片懒加载
    lazyLoadImages();
    
    // 视差滚动效果
    const parallaxScroll = function() {
        const parallaxElements = document.querySelectorAll('.hero-bg');
        
        window.addEventListener('scroll', function() {
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(window.scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    };
    
    // 初始化视差滚动
    parallaxScroll();
});