<template>
  <div :class="$style.table">
    <div :class="$style.header">
      <div>{{ props.table.label }}</div>
      <div :class="$style.values">
        <div v-for="value in table.values">
          {{ $filters.currency(value.value) }} {{ value.currency }}
        </div>
      </div>
    </div>
    <ReportTableRow
      v-for="account in table.sub_accounts"
      :account="account"
    />
  </div>
</template>

<script setup lang="ts">
import ReportTableRow from './ReportTableRow.vue'
import type { Account } from '../../types'

const props = defineProps<{
  table: Account
}>()
</script>

<style lang="scss" module>
.table {
  display: flex;
  flex-direction: column;

  .header {
    border-bottom: solid 1px #bbb;
    display: flex;
    flex-direction: row;
    font-weight: 600;
    justify-content: space-between;
    font-size: 20px;
    padding: 0.5rem;

    .values {
      text-align: right;
    }
  }
}
</style>
