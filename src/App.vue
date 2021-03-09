<template>
  <div>
    <div class="container flex flex-col !max-w-4xl min-h-screen py-5 mx-auto">
      <h1>Default</h1>
      <article class="prose !max-w-none">
        <EditorBlocks :source="blocks" />
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi'
import blocksData from '~/public/blocks.json'

export default defineComponent({
  name: 'App',
  setup() {
    const links = ref([
      { link: '/', text: 'Default' },
      { link: '/nuxt', text: 'Nuxt' },
    ])

    const blocks = ref(blocksData)

    return { links, blocks }
  },
})
</script>

<style lang="postcss" scoped>
a {
  @apply text-blue-400 underline;
}
a.router-link-exact-active {
  @apply no-underline text-opacity-50;
}
</style>
