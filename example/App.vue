<template>
  <div id="app">
    <div class="example">
      <editor-window title="my window" :width="width" :height="height">
        hola!
      </editor-window>
      <browser-window url="http://example.com" :width="width" :height="height">
        your webpage!
      </browser-window>
    </div>
    <div class="control">
      <div class="range">
        Width: <input type="range" min="460" max="600" v-model="width">
        <span v-show="width">{{ width }} px</span>
      </div>
      <div class="range">
        Height: <input type="range" min="100" max="600" v-model="height">
        <span v-show="height">{{ height}} px</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {EditorWindow, BrowserWindow} from '../src'

  export default {
    data() {
      return {
        width: 500,
        height: 340
      }
    },
    components: {
      EditorWindow,
      BrowserWindow
    }
  }
</script>

<style>
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }

  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    flex-direction: column;
  }

  .example {
    display: flex;
    flex-wrap: nowrap;
    height: 500px;
    justify-content: center;
    align-items: center;
  }
</style>
