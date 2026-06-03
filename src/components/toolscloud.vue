<template>
  <div class="cloud-container">
    <v-tooltip v-for="(tool, index) in toolsList" :key="index" location="top">
      <template v-slot:activator="{ props }">
        <!-- 为了让图片呈现完整的圆形并防止拉伸，可以加一点内部样式 -->
        <div 
          v-bind="props" 
          class="cloud-item-wrapper"
          :style="{
            width: tool.size + 'px',
            height: tool.size + 'px',
            top: tool.top + '%',
            left: tool.left + '%',
            filter: 'blur(' + tool.blur + 'px)',
            opacity: 1 - tool.blur * 0.15,
            animationDelay: (index * -0.7) + 's'
          }"
        >
          <v-img
            :src="tool.img"
            class="cloud-item-img"
            cover
          ></v-img>
        </div>
      </template>
      <span style="font-weight: bold;">{{ tool.name }}</span>
    </v-tooltip>
  </div>
</template>

<script>
import config from '../config.js';

export default {
  name: 'ToolsCloud',
  data() {
    return {
      toolsList: config.toolsCloud
    }
  }
}
</script>

<style scoped>
.cloud-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.cloud-item-wrapper {
  position: absolute;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: float 4s ease-in-out infinite;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  overflow: hidden;
}

.cloud-item-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

/* 鼠标悬浮时的交互效果 */
.cloud-item-wrapper:hover {
  filter: blur(0) !important;
  opacity: 1 !important;
  z-index: 20 !important;
  animation-play-state: paused;
  transform: scale(1.4);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  border: 2px solid var(--leleo-welcomtitle-color, #FFF);
}

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
</style>
