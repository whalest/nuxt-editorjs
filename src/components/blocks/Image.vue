<template>
  <figure
    v-if="data && data.file"
    class="ve-image"
    :class="{ ['stretched']: data.stretched }"
  >
    <slot>
      <img
        :src="data.file.url"
        :alt="caption"
        :title="caption"
        loading="lazy"
      />
    </slot>

    <figcaption v-if="caption" v-html="caption"></figcaption>
  </figure>
</template>

<script lang="ts">
import { ref, defineComponent, toRef, toRefs, PropType } from 'vue-demi'
import { Image } from '~/types'

// TODO: is show caption

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Partial<Image>>,
      default: () => ({})
    }
  },
  setup(props) {
    const { data } = toRefs(props)

    const caption = data?.value?.caption || ''

    return { caption }
  }
})
</script>

<style lang="postcss" scoped></style>
