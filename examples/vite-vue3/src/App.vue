<template>
  <div>
    <EditorBlocks :source="blocks" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const blocks = {
  time: 1613983085545,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'H1',
        level: 1
      }
    },
    {
      type: 'header',
      data: {
        text: 'H2',
        level: 2
      }
    },
    {
      type: 'header',
      data: {
        text: 'H3',
        level: 3
      }
    },
    {
      type: 'header',
      data: {
        text: 'H4',
        level: 4
      }
    },

    {
      type: 'paragraph',
      data: {
        text: 'paragraph'
      }
    },

    {
      type: 'list',
      data: {
        style: 'unordered',
        items: ['list unordered']
      }
    },

    {
      type: 'list',
      data: {
        style: 'ordered',
        items: ['List ordered']
      }
    },
    {
      type: 'delimiter',
      data: {}
    },

    {
      type: 'image',
      data: {
        file: {
          url: 'https://codex.so/public/app/img/external/codex2x.png'
        },
        caption: '',
        withBorder: false,
        stretched: false,
        withBackground: false
      }
    },

    {
      type: 'image',
      data: {
        file: {
          url: 'https://codex.so/public/app/img/external/codex2x.png'
        },
        caption: 'Описание',
        withBorder: true,
        stretched: true,
        withBackground: true
      }
    },

    {
      type: 'quote',
      data: {
        text: 'Hello text',
        caption: 'caption',
        alignment: 'left'
      }
    }
  ],
  version: '2.19.0'
}

export default defineComponent({
  name: 'App',

  setup() {
    return {
      blocks
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
