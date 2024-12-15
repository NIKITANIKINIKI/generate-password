<script setup lang="ts">
import { onBeforeUnmount, reactive, ref } from 'vue'

const props = defineProps({
  password: {
    type: String,
    default: 'CLICK GENERATE',
  },
})

interface PositionType {
  mouseX: number
  mouseY: number
}

const positionCopyBtn = reactive<PositionType>({
  mouseX: 50,
  mouseY: 50,
})
const notificationRef = ref(null);

// const showSuccessNotification = () => {
//   notificationRef.value.addNotification({
//     type: 'success',
//     title: 'Success!',
//     message: 'This is a success message.',
//   });
// };
const updateMousePosition = (event: MouseEvent) => {
  const resultElement = document.querySelector('.result') as HTMLElement

  if (resultElement) {
    const { left, top } = resultElement.getBoundingClientRect()

    positionCopyBtn.mouseX = event.clientX - left
    positionCopyBtn.mouseY = event.clientY - top
  }
}

const copyPassword = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(props.password)
  }
}

window.addEventListener('mousemove', updateMousePosition)

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateMousePosition)
})
</script>

<template>
  <div class="result">
    <div class="result__title field-title">Generated Password</div>
    <div class="result__info right">click to copy</div>
    <div class="result__info left">copied</div>
    <div class="result__viewbox" id="result">{{ props.password }}</div>

    <button
      id="copy-btn"
      @click="copyPassword"
      :style="{
        '--x': positionCopyBtn.mouseX + 'px',
        '--y': positionCopyBtn.mouseY + 'px',
      }"
    >
      <i class="far fa-copy"></i>
    </button>
  </div>
</template>
