<template>
  <div>
    <h1>Default</h1>
    <article class="prose !max-w-none">
      <EditorBlocks :source="blocks" />
    </article>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue-demi'
import blocksData from '~/assets/blocks.json'

export default defineComponent({
  props: {},
  setup() {
    const blocks = ref(blocksData)
    return { blocks }
  },
})
</script>

<style lang="postcss" scoped></style>
