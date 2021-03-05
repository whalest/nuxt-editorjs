<template>
  <component v-if="data" :is="`h${data.level}`" v-html="data.text"></component>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue-demi'
import type { Header } from '~/types'

export default defineComponent({
  props: {
    data: {} as () => Partial<Header>,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss" scoped></style>
