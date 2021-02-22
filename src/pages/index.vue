<template>
  <div>
    <h1>Default</h1>
    <article class="prose editor-blocks max-w-none">
      <EditorBlocks :source="blocks" />
    </article>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
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
