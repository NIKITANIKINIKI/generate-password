<script setup lang="ts">
import './style.scss'
import { Result, Slider, Settings } from './components'
import { reactive, ref } from 'vue'
import { generatePassword } from './utils/GeneratePassword';

interface SettingType {
  length: number
  uppercase: boolean
  lowercase: boolean
  number: boolean
  symbol: boolean
}

const settings = reactive<SettingType>({
  length: 12,
  uppercase: false,
  lowercase: false,
  number: false,
  symbol: false,
})

const password = ref<string>('')

const generate = () => {
  password.value = generatePassword(settings)
}
</script>

<template>
  <div class="container">
    <h2 class="title">Password Generator</h2>
    <Result :password="password" />
    <Slider v-model="settings" />
    <Settings v-model="settings" />
    <button class="btn generate" @click="generate">Generate Password</button>
  </div>
</template>

<style>
.dart-theme {
  background-color: black;
  color: white;
}
</style>
