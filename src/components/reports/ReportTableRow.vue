<template>
  <div
    :class="[
      $style.row,
      hasSubAccounts && $style.expandable
    ]"
    @click="handleClick"
  >
    <div>{{ account.label }}</div>
    <div :class="$style.values">
      <div v-for="value in props.account.values">
        <div>{{ $filters.currency(value.value) }} {{ value.currency }}</div>
      </div>
    </div>
  </div>
  <div :class="$style.subaccounts" v-if="expanded">
    <ReportTableRow
      v-for="subAccount in props.account.sub_accounts"
      :account="subAccount"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Account } from '../../types'

const props = defineProps<{
  account: Account
}>()

const expanded = ref(true)
const hasSubAccounts = computed(() =>
  props.account.sub_accounts?.length
)

const handleClick = () => {
  expanded.value = !expanded.value
}
</script>

<style lang="scss" module>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;

  &:hover {
    background-color: #f5f5f5;
  }
}

.subaccounts {
  padding-left: 0.5rem;
}

.expandable {
  cursor: pointer;
}

.values {
  text-align: right;
}
</style>
