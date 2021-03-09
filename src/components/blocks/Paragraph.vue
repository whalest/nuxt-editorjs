<template>
  <p v-if="data" v-html="data.text"></p>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue-demi'
import type { Paragraph } from '~/types'

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Partial<Paragraph>>,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="postcss" scoped></style>
