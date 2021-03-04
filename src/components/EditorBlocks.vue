<template>
  <slot
    :name="type"
    :data="data"
    v-for="({ type, data }, i) in source.blocks"
    :key="i"
  >
    <EditorBlocksParagraph v-if="type == 'paragraph'" :data="data" />
    <EditorBlocksDelimiter v-else-if="type == 'delimiter'" />
    <EditorBlocksList v-else-if="type == 'list'" :data="data" />
    <EditorBlocksImage v-else-if="type == 'image'" :data="data" />
    <EditorBlocksQuote v-else-if="type == 'quote'" :data="data" />
    <EditorBlocksHeader v-else-if="type == 'header'" :data="data" />
    <EditorBlocksRaw v-else-if="type == 'raw'" :data="data" />
    <EditorBlocksEmbed v-else-if="type == 'embed'" :data="data" />
  </slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import type { OutputData } from '~/types/index'

export default defineComponent({
  props: {
    source: {
      type: Object as () => OutputData,
      default: () => ({
        blocks: [],
      }),
    },
  },
  setup() {
    const capitalize = (str: string) =>
      `${str.charAt(0).toUpperCase()}${str.slice(1)}`

    return { capitalize }
  },
})
</script>

<style lang="postcss" scoped></style>
