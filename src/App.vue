<template>
  <div class="container flex flex-col max-w-4xl min-h-screen py-5 mx-auto">
    <nav class="flex py-5 my-5 space-x-5 text-xl border-b">
      <router-link
        v-for="(it, i) in links"
        :key="i"
        :to="it.link"
        v-html="it.text"
      ></router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const links = ref([
      { link: '/', text: 'Default' },
      { link: '/nuxt', text: 'Nuxt' },
    ])

    return { links }
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
