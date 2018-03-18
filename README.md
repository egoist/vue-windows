# vue-windows [![NPM version](https://img.shields.io/npm/v/vue-windows.svg?style=flat-square)](https://npmjs.com/package/vue-windows) [![NPM downloads](https://img.shields.io/npm/dm/vue-windows.svg?style=flat-square)](https://npmjs.com/package/vue-windows) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-windows/master.svg?style=flat-square)](https://circleci.com/gh/egoist/vue-windows)

It's inspired by the [socket.io](http://socket.io/) homepage, weighing only 2kb.

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
    <browser-window url="http://example.com">
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

<style src="vue-windows/dist/vue-windows.css"></style>
```

## API

### Props

#### title

Component: `EditorWindow`<br>
Type: `string`<br>
Required: `true`

#### url

Component: `BrowserWindow`<br>
Type: `string`<br>
Required: `true`

#### shadow

Component: `All`<br>
Type: `boolean`<br>
Default: `false`

Whether to show window shadow.

#### theme

Component: `All`<br>
Type: `string`<br>
Default: `default`<br>
Available: `default` `dark`

#### width

Component: `All`<br>
Type: `number`<br>
Default: `500`

#### height

Component: `All`<br>
Type: `number`<br>
Default: `340`

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
