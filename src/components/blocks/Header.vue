<template>
  <component :is="`h${data.level}`" v-html="data.text" />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue-demi'
import type { Header } from '~/types'

export default defineComponent({
  props: {
    data: {
      type: Object as () => Partial<Header>,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="postcss" scoped></style>
