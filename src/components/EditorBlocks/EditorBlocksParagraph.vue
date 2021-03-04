<template>
  <p v-if="data" v-html="data.text"></p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue-demi'
import type { Paragraph } from '~/types'

export default defineComponent({
  props: {
    data: {} as () => Partial<Paragraph>,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss" scoped></style>
