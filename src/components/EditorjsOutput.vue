<template>
  <slot
    :name="type"
    :data="data"
    v-for="({ type, data }, i) in source.blocks"
    :key="i"
  >
    <Paragraph v-if="type == 'paragraph'" :data="data" />
    <Delimiter v-else-if="type == 'delimiter'" />
    <List v-else-if="type == 'list'" :data="data" />
    <Image v-else-if="type == 'image'" :data="data" />
    <Quote v-else-if="type == 'quote'" :data="data" />
    <Header v-else-if="type == 'header'" :data="data" />
    <Raw v-else-if="type == 'raw'" :data="data" />
    <Embed v-else-if="type == 'embed'" :data="data" />
  </slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import type { OutputData } from '~/types/index'

import Delimiter from './blocks/Delimiter.vue'
import Embed from './blocks/Embed.vue'
import Header from './blocks/Header.vue'
import Image from './blocks/Image.vue'
import List from './blocks/List.vue'
import Paragraph from './blocks/Paragraph.vue'
import Quote from './blocks/Quote.vue'
import Raw from './blocks/Raw.vue'

export default defineComponent({
  name: 'EditorBlocks',
  components: {
    Delimiter,
    Embed,
    Header,
    Image,
    List,
    Paragraph,
    Quote,
    Raw,
  },
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
