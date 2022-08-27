<template>
  <h2>Balance Sheet</h2>
  <hr />
  <div :class="$style.tableContainer">
    <div :class="$style.table">
      <div :class="$style.leftHeader">
        <span :class="$style.label">Aktywa</span>
        <span :class="$style.amount">32 123,44 PLN</span>
      </div>
    </div>
    <div :class="$style.table">
      <div :class="$style.rightHeader">
        <span :class="$style.amount">32 123,44 PLN</span>
        <span :class="$style.label">Pasywa</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BALANCE_SHEET } from '../../assets/data/reports'
</script>

<style lang="scss" module>
.tableContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  .table {
    .leftHeader {
      font-size: 22px;
      font-weight: 700;
      display: flex;
      padding: 0 1rem;
      text-align: left;
      width: 100%;

      .label {
        flex: 1;
      }
    }

    .rightHeader {
      display: flex;
      font-size: 22px;
      font-weight: 700;
      padding: 0 1rem;
      text-align: right;
      width: 100%;

      .label {
        flex: 1;
      }
    }
  }
}
</style>
