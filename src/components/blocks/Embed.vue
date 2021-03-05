<template>
  <div v-if="data">
    <template v-if="data.service === 'youtube'">
      <VideoYoutube class="aspect-w-16 aspect-h-9" :url="data.source" />
    </template>
    <template v-else>
      <div v-html="data.source"></div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import type { Embed } from '~/types'

export default defineComponent({
  props: {
    data: {} as () => Partial<Embed>,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss" scoped></style>
