<template>
  <component
    :is="data.style === 'unordered' ? 'ol' : 'ul'"
    v-if="data && data.items"
  >
    <li v-for="(li, j) in data.items" :key="`li_${j}`">
      <p v-html="li"></p>
    </li>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import type { List } from '~/types'

export default defineComponent({
  props: {
    data: {} as () => Partial<List>,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss" scoped></style>
