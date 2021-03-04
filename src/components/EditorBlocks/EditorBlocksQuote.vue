<template>
  <figure v-if="data" class="ve-quote">
    <blockquote>
      <slot>
        <p v-html="data.text"></p>
      </slot>
    </blockquote>

    <figcaption v-if="caption" v-html="caption"></figcaption>
  </figure>
</template>

<script lang="ts">
import { ref, defineComponent, toRef, toRefs } from 'vue-demi'
import { Quote } from '~/types'

export default defineComponent({
  props: {
    data: {} as () => Partial<Quote>,
  },
  setup(props) {
    const { data } = toRefs(props)

    const caption = data?.value?.caption || null

    return { caption }
  },
})
</script>

<style lang="postcss" scoped></style>
