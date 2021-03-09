<template>
  <div>
    <template v-if="data.service === 'youtube'">
      <VideoYoutube class="aspect-w-16 aspect-h-9" :url="data.source" />
    </template>
    <template v-else>
      <div v-html="data.source" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue-demi'
import { Embed } from '~/types'

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Partial<Embed>>,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="postcss" scoped></style>
