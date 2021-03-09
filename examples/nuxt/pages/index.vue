<template>
  <div class="container">
    <EditorBlocks :source="blocks" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const blocks = {
  time: 1613983085545,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'H1',
        level: 1,
      },
    },
    {
      type: 'header',
      data: {
        text: 'H2',
        level: 2,
      },
    },
    {
      type: 'header',
      data: {
        text: 'H3',
        level: 3,
      },
    },
    {
      type: 'header',
      data: {
        text: 'H4',
        level: 4,
      },
    },

    {
      type: 'paragraph',
      data: {
        text: 'paragraph',
      },
    },

    {
      type: 'list',
      data: {
        style: 'unordered',
        items: ['list unordered'],
      },
    },

    {
      type: 'list',
      data: {
        style: 'ordered',
        items: ['List ordered'],
      },
    },
    {
      type: 'delimiter',
      data: {},
    },

    {
      type: 'image',
      data: {
        file: {
          url: 'https://codex.so/public/app/img/external/codex2x.png',
        },
        caption: '',
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },

    {
      type: 'image',
      data: {
        file: {
          url: 'https://codex.so/public/app/img/external/codex2x.png',
        },
        caption: 'Описание',
        withBorder: true,
        stretched: true,
        withBackground: true,
      },
    },

    {
      type: 'quote',
      data: {
        text: 'Hello text',
        caption: 'caption',
        alignment: 'left',
      },
    },
  ],
  version: '2.19.0',
}

export default Vue.extend({
  data() {
    return {
      blocks,
    }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
