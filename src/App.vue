<template>
  <div :class="$style.mainContainer">
    <div :class="[
      $style.mainHeader,
      appReady && $style.mainHeaderReady
      ]">
      <span :class="$style.logo">nBudget</span>
      <span v-if="!appReady" class="loader"/>
    </div>
    <div :class="$style.mainBody" v-if="appReady">
      <div :class="$style.mainContent">
        <BalanceSheet />
      </div>
      <div :class="$style.mainFooter">
        &copy; 2022 Leszek Nowicki
      </div>
    </div>
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

  &Header {
    align-items: center;
    background-color: #79c;
    color: #fff;
    display: flex;
    height: 80px;
    justify-content: center;
    margin: auto 0;
    position: fixed;
    top: calc(50% - 70px);
    transition: .6s;
    width: 100%;
  }

  &Footer {
    background-color: #555;
    color: #ddd;
    padding: 2rem;
    text-align: center;
    width: 100%;
  }

  &HeaderReady {
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

@keyframes expand {
  from { height: 0px; }
  to { height: 100vh; }
}
</style>
