/**
 * Heading Tool
 * @doc  https://github.com/editor-js/header#output-data
 */
export type Header = {
  /** header's text */
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

/** Paragraph's Tool
 * @doc https://github.com/editor-js/paragraph#output-data
 */
export type Paragraph = {
  /** paragraph's text */
  text: string
}

export type Image = {
  /**Uploaded file data. Any data got from backend uploader. Always contain the url property */
  file: {
    url: string
  }
  /**image's caption */
  caption: string

  /** add border to image */
  withBorder: boolean
  /**need to add background */
  withBackground: boolean

  /** stretch image to screen's width */
  stretched: boolean
}

/**
 * Provides Quote Blocks
 * @doc https://github.com/editor-js/quote#output-data
 */
export type Quote = {
  /** quote's text */
  text: string
  /** caption or an author */
  caption: string

  /** alignment */
  alignment: 'left' | 'center'
}

/**
 * Provides Block tool for embedded content for the Editor.js. Tool uses Editor.js pasted patterns handling and inserts iframe with embedded content.
 * @doc https://github.com/editor-js/embed#output-data
 */
export type Embed = {
  /** service unique name  */
  service:
    | 'vimeo'
    | 'youtube'
    | 'coub'
    | 'vine'
    | 'imgur'
    | 'gfycat'
    | 'twitch-channel'
    | 'twitch-video'
    | 'yandex-music-album'
    | 'yandex-music-track'
    | 'yandex-music-playlist'
    | 'codepen'
    | 'instagram'
    | 'twitter'

  /** source URL */
  source: string

  /** URL for source embed page  */
  embed: string

  /** embedded content width */
  width: number

  /** embedded content height */
  height: number

  /** content caption */
  caption: string
}

/** include raw HTML code in your articles. */
export type Raw = {
  /** raw html */
  html: string
}

/** This Tool for the Editor.js allows you to add ordered or unordered (bulleted) lists to your article. */
export type List = {
  /** type of a list */
  style: 'ordered' | 'unordered';

  /**the array of list's items */
  items: string[]
}


export type PluginsOutputData = Header | Paragraph | Image | Quote | Embed | Raw | List
