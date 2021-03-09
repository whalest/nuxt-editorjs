<template>
  <div v-if="data" v-html="data.html"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue-demi'
import type { Raw } from '~/types'

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Partial<Raw>>,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="postcss" scoped></style>
