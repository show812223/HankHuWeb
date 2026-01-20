<script setup lang="ts">
const isVisible = ref(true)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
  }, 1200)
})
</script>

<template>
  <Transition name="splash-fade">
    <div
      v-if="isVisible"
      class="splash-screen"
    >
      <div class="splash-content">
        <div class="splash-name-vertical">
          <span
            v-for="(char, index) in '胡聖翰'"
            :key="index"
            class="splash-char"
            :style="{ animationDelay: `${index * 150}ms` }"
          >
            {{ char }}
          </span>
        </div>
        <p class="splash-name-en">
          Sheng Han Hu
        </p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #FAEBD7;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.splash-name-vertical {
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-family: 'Noto Serif JP', 'Noto Serif TC', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #8B7355;
  letter-spacing: 0.4em;
  display: flex;
}

.splash-char {
  opacity: 0;
  animation: charFadeIn 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.splash-name-en {
  font-family: 'Noto Serif JP', 'Noto Serif TC', Georgia, serif;
  font-size: 1rem;
  font-weight: 500;
  color: #A08060;
  letter-spacing: 0.15em;
  opacity: 0;
  animation: fadeIn 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 450ms forwards;
}

/* 字元淡入 */
@keyframes charFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Splash 淡出過渡 */
.splash-fade-leave-active {
  transition: opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.splash-fade-leave-to {
  opacity: 0;
}
</style>
