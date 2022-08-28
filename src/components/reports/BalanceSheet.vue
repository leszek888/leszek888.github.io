<template>
  <div :class="$style.content">
    <h2>Balance Sheet</h2>
    <div :class="$style.tableContainer">
      <ReportTable :table="data.assets" />
      <ReportTable
        reversed
        :table="data.equity_and_liabilities"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BALANCE_SHEET } from '../../assets/data/reports'
import ReportTable from './ReportTable.vue'

const data = ref(BALANCE_SHEET)
</script>

<style lang="scss" module>
.content {
  text-align: center;

  .tableContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    > :first-child {
      border-right: solid 1px #bbb;
    }

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
}
</style>
