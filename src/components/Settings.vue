<script setup lang="ts">
// import Setting from './Setting.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    requered: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const ids = ['uppercase', 'lowercase', 'number', 'symbol']
</script>

<template>
  <div class="settings">
    <div class="setting" v-for="id in ids" :key="id">
      <input
        type="checkbox"
        :id="id"
        v-model="props.modelValue[id]"
      />
      <label :for="id">Include {{ id }}</label>
    </div>
  </div>
</template>
