<template>
  <div :class="$style.mainContainer" v-if="appReady">
    <div :class="$style.mainHeader">
      <span :class="$style.logo">nBudget</span>
    </div>
    <div :class="$style.mainContent">
      <BalanceSheet />
    </div>
    <div :class="$style.mainFooter">
      &copy; 2022 Leszek Nowicki
    </div>
  </div>
  <div v-else :class="$style.mainLoader">
    <span :class="$style.logo">nBudget</span>
    <span class="loader"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BalanceSheet from './components/reports/BalanceSheet.vue'

const appReady = ref(false)

setTimeout(() => {
  appReady.value = true
}, 2000)
</script>

<style lang="scss" module>
.main {
  &Container {
    animation: expand;
    animation-duration: .6s;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    position: relative;
    text-align: center;
  }

  &Loader, &Header {
    background-color: #79c;
    color: #fff;
    height: 80px;
    margin: auto 0;
    position: fixed;
    top: calc(50% - 70px);
    transition: 1s;
    width: 100%;
  }

  &Loader {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &Footer {
    background-color: #555;
    color: #ddd;
    padding: 2rem;
    width: 100%;
  }

  &Header {
    animation: scroll-to-top;
    animation-duration: .6s;
    padding: 1rem;
    position: fixed;
    top: 0;
  }

   &Content {
     flex: 1;
     margin: auto 0;
     padding: 1rem;
     padding-top: 100px;
     width: 100%;
   }
}

.logo {
  bottom: 20px;
  cursor: pointer;
  left: 20px;
  font-weight: 700;
  font-size: 30pt;
  position: absolute;
}

@keyframes scroll-to-top {
  from { top: calc(50% - 70px); }
  to { top: 0; }
}

@keyframes expand {
  from { height: 0px; }
  to { height: 100vh; }
}
</style>
