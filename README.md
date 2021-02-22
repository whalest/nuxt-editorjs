# vue-editorjs-html

Simple [editorjs](ttps://editorjs.io/) template skeleton based on vue component slots for nuxt

## Installation

```sh
npm install @whalest/vue-editorjs-html
```

## Usage

example data

```json
{
  "time": 1613989142594,
  "blocks": [
    {
      "type": "paragraph",
      "data": {
        "text": "Hey. Meet the new Editor. On this page you can see.."
      }
    }
  ]
}
```

### simple

```html
<EditorBlocks :data="data" class="prose max-w-none" v-once />
```

- if content not changes, use [v-once](https://v3.vuejs.org/api/directives.html#v-once) for optimize update performance

### customize

```html
<template #image="{ data }">
  <editor-blocks-image :data="data">
    <div class="overflow-hidden">
      <nuxt-picture
        :src="data.file.url"
        loading="lazy"
        :height="data.stretched ? 500 : 600"
        :width="data.stretched ? 1280 : 1024"
        responsive
        :alt="data.caption"
        :title="data.caption"
        placeholder
        class="transition-all ease-linear transform group-hover:scale-110"
      ></nuxt-picture>
    </div>
  </editor-blocks-image>
</template>
```
