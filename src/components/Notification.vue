
<!-- Доделать -->
<template>
  <div
    v-for="(notification, index) in notifications"
    :key="index"
    class="notification"
    :class="`notification-${notification.type}`"
    :style="{ top: `${index * 60 + 20}px` }"
  >
    <div class="notification-content">
      <strong>{{ notification.title }}</strong>
      <p>{{ notification.message }}</p>
    </div>
    <button class="close-btn" @click="removeNotification(index)">X</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NotificationType {
  type: string
  title: string
  message: string
}

const notifications = ref<NotificationType[]>([])

const addNotification = (notification: NotificationType) => {
  notifications.value.push(notification)

  setTimeout(() => {
    removeNotification(0)
  }, 3000)
}

const removeNotification = (index: number) => {
  notifications.value.splice(index, 1)
}

defineExpose({
  addNotification,
})
</script>

