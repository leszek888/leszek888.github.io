<template>
  <div :class="[
    $style.mainHeader,
    props.appReady && $style.mainHeaderReady
    ]">
    <span :class="$style.logo">nBudget</span>
    <span v-if="!props.appReady" class="loader"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  appReady: boolean
}>()
</script>

<style lang="scss" module>
.main {
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

    .logo {
      bottom: 20px;
      cursor: pointer;
      left: 20px;
      font-weight: 700;
      font-size: 30pt;
      position: absolute;
    }
  }

  &HeaderReady {
    padding: 1rem;
    position: fixed;
    top: 0;
  }
}
</style>
