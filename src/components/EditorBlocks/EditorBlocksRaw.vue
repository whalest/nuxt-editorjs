<template>
  <div v-if="data" v-html="data.html"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Raw } from '~/types'

export default defineComponent({
  props: {
    data: {} as () => Partial<Raw>,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss" scoped></style>
