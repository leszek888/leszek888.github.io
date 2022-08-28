<template>
  <div :class="[
    $style.mainHeader,
    props.appReady && $style.mainHeaderReady
    ]">
    <span :class="$style.logo">nBudget</span>
    <span v-if="!props.appReady" class="loader"/>
    <div :class="$style.routes" v-else>
      <RouterLink :active-class="$style.activeRoute" :to="route.path" v-for="route in routes">
        {{ route.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { MainRoutes } from '../router/routes'

const routes = reactive(MainRoutes)

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

    .routes {
      align-self: flex-end;

      a {
        color: white;
      }

      .activeRoute {
        font-weight: 600;
      }
    }
  }

  &HeaderReady {
    position: fixed;
    top: 0;
  }
}
</style>
