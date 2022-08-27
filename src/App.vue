<template>
  <div class="mainContainer">
    <div v-if="appReady">
      App is Ready!
    </div>
    <div v-else class="mainLoader">
      <span>Ładowanie</span><br />
      <span class="loader"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const appReady = ref(false)

setTimeout(() => {
  appReady.value = true
}, 2000)
</script>

<style>
.mainContainer {
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

</style>
