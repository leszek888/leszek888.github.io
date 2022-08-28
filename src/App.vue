<template>
  <div :class="$style.mainContainer">
    <MainHeader :app-ready="appReady" />
    <div :class="$style.mainBody" v-if="appReady">
      <div :class="$style.mainContent">
        <RouterView />
      </div>
      <div :class="$style.mainFooter">
        &copy; 2022 Leszek Nowicki
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { isReady } = useRouter()

const appReady = ref(false)

isReady().then(() => appReady.value = true)
</script>

<style lang="scss" module>
.main {
  &Container {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  &Body {
    align-items: center;
    animation: expand;
    animation-duration: .6s;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }

  &Footer {
    background-color: #555;
    color: #ddd;
    padding: 2rem;
    text-align: center;
    width: 100%;
  }

   &Content {
     flex: 1;
     margin: auto 0;
     padding: 1rem;
     padding-top: 100px;
     width: 100%;
   }
}

@keyframes expand {
  from { height: 0px; }
  to { height: 100vh; }
}
</style>
