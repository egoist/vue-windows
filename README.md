# vue-windows [![NPM version](https://img.shields.io/npm/v/vue-windows.svg?style=flat-square)](https://npmjs.com/package/vue-windows) [![NPM downloads](https://img.shields.io/npm/dm/vue-windows.svg?style=flat-square)](https://npmjs.com/package/vue-windows) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-windows/master.svg?style=flat-square)](https://circleci.com/gh/egoist/vue-windows)

It's inspired by the [socket.io](http://socket.io/) homepage, only 1kb.

## Install

```bash
$ npm install --save vue-windows
```

## Usage

```vue
<template>
  <div id="app">
    <editor-window title="my window">
      editor window body
    </editor-window>
    <browser-window title="http://example.com">
      browser window body
    </browser-window>
  </div>
</template>

<script>
import {EditorWindow, BrowserWindow} from 'vue-windows'

export default {
  components: {
    EditorWindow,
    BrowserWindow
  }
}
</script>

<!-- Don't forget the CSS! -->
<style src="vue-windows/dist/vue-windows.css"></style>
```

## API

### Props

#### title

- Type: `string`
- Required: `true`

#### shadow

- Type: `boolean`
- Default: `false`

Whether to show window shadow.

#### theme

- Type: `string`
- Default: `default`
- Available: `default`, `dark`

#### width

- Type: `number`, `string`
- Default: `100%`

Number values are resolved into lengths in `px` while string values are used directly.

#### height

- Type: `number`, `string`
- Default: `340`

Number values are resolved into lengths in `px` while string values are used directly.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Development

```bash
yarn
yarn example
```

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
