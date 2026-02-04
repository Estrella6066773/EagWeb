<!-- src/components/SolutionsGallery.vue -->
<template>
  <div class="solutions-page">
    <!-- 横幅区域 -->
    <section class="hero-banner">
      <div class="hero-content">
        <h2>{{ bannerTitle }}</h2>
        <p>{{ bannerSubtitle }}</p>
      </div>
    </section>

    <!-- 解决方案标题 -->
    <section class="solutions-title">
      <h2>解决方案</h2>
    </section>

    <!-- 图片展示区域 -->
    <section class="project-background">
      <div class="container">
        <div class="section-title">
          <h3>项目背景</h3>
        </div>
        
        <div class="image-gallery-container">
          <div class="image-row">
            <div 
              v-for="(solution, index) in solutions" 
              :key="index"
              class="image-card"
              @click="openModal(index)"
              @mouseenter="hoverCard(index)"
              @mouseleave="leaveCard(index)"
            >
              <div class="image-wrapper">
                <img 
                  :src="solution.thumbnail" 
                  :alt="solution.title"
                  :data-full="solution.fullImage"
                  :ref="'image' + index"
                >
                <div class="image-loader" v-if="!solution.loaded"></div>
              </div>
              <div class="image-content">
                <h4>{{ solution.title }}</h4>
                <p>{{ solution.description }}</p>
                <a href="#" class="btn-learn-more" @click.stop.prevent="learnMore(solution.id)">
                  了解更多
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 全屏模态框 -->
    <div class="modal-overlay" :class="{ active: isModalOpen }" @click.self="closeModal">
      <button class="close-btn" @click="closeModal">&times;</button>
      <div class="modal-content">
        <img 
          class="modal-image" 
          :src="currentImage.fullImage" 
          :alt="currentImage.title"
        >
        <button class="modal-nav prev-btn" @click="prevImage">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="modal-nav next-btn" @click="nextImage">
          <i class="fas fa-chevron-right"></i>
        </button>
        <div class="image-indicator">
          <div 
            v-for="(_, index) in solutions" 
            :key="index"
            class="indicator-dot"
            :class="{ active: currentIndex === index }"
            @click="currentIndex = index"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionsGallery',
  data() {
    return {
      bannerTitle: '利用360°全景ADAS摄像头',
      bannerSubtitle: '通过先进的驾驶员辅助系统提升行车安全与便利',
      isModalOpen: false,
      currentIndex: 0,
      solutions: [
        {
          id: 1,
          title: '《交通强国建设纲要》',
          description: '建设交通强国是以习近平同志为核心的党中央立足国情、着眼全局、面向未来作出的重大战略决策...',
          thumbnail: '/网站/images/solutions/solution1.jpg',
          fullImage: '/网站/images/solutions/solution1-full.jpg',
          loaded: false
        },
        // ... 其他解决方案
      ]
    }
  },
  computed: {
    currentImage() {
      return this.solutions[this.currentIndex] || {}
    }
  },
  methods: {
    openModal(index) {
      this.currentIndex = index
      this.isModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.isModalOpen = false
      document.body.style.overflow = 'auto'
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.solutions.length) % this.solutions.length
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.solutions.length
    },
    hoverCard(index) {
      // 添加悬停效果
      const card = document.querySelectorAll('.image-card')[index]
      card.style.transform = 'translateY(-15px)'
    },
    leaveCard(index) {
      // 移除悬停效果
      const card = document.querySelectorAll('.image-card')[index]
      card.style.transform = 'translateY(0)'
    },
    learnMore(id) {
      // 跳转到详情页
      this.$router.push(`/solution/${id}`)
    },
    preloadImages() {
      this.solutions.forEach(solution => {
        const img = new Image()
        img.src = solution.fullImage
        img.onload = () => {
          solution.loaded = true
        }
      })
    }
  },
  mounted() {
    this.preloadImages()
    
    // 键盘事件监听
    document.addEventListener('keydown', (e) => {
      if (!this.isModalOpen) return
      
      switch(e.key) {
        case 'Escape':
          this.closeModal()
          break
        case 'ArrowLeft':
          this.prevImage()
          break
        case 'ArrowRight':
          this.nextImage()
          break
      }
    })
  },
  beforeUnmount() {
    // 清理事件监听
    document.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

<style scoped>
/* Vue组件样式 */
/* 可以复用之前的CSS样式 */
</style>