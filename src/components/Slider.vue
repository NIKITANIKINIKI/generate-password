<script setup lang="ts">

const props = defineProps({
  modelValue: {
    type: Object,
    requered: true,
  },
})

const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <div class="length range__slider" data-min="4" data-max="32">
    <div class="length__title field-title" :data-length="props.modelValue.length">length:</div>
    <input class="slider" type="range" min="4" max="32" v-model="props.modelValue.length" />
  </div>
</template>
