<template>
  <div id="app">
    <div class="example">
      <editor-window title="How To" :width="width" :height="height">
        <pre><code v-html="code"></code></pre>
      </editor-window>
      <browser-window url="https://github.com/egoist/vue-windows" :width="width" :height="height">
        <div class="content">
          <h2>
            Such Window, Very Lovely!
          </h2>
          <a class="star" href="https://github.com/egoist/vue-windows">Start me on GitHub!</a>
        </div>
      </browser-window>
    </div>
    <div class="control">
      <div class="range">
        Width: <input type="range" min="460" max="600" v-model.number="width">
        <span v-show="width">{{ width }} px</span>
      </div>
      <div class="range">
        Height: <input type="range" min="100" max="600" v-model.number="height">
        <span v-show="height">{{ height}} px</span>
      </div>
    </div>
  </div>
</template>

<script>
  import hljs from 'highlight.js/lib/highlight'
  import {EditorWindow, BrowserWindow} from '../src'

  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

  export default {
    name: 'app',
    data() {
      return {
        width: 500,
        height: 340,
        code: hljs.highlight('javascript', `import {EditorWindow} from 'vue-windows'

new Vue({
  el: '#app',
  render(h) {
    return h(EditorWindow, {props: {title: 'hola!'}})
  }
})

// set how to use in single file component
// https://github.com/egoist/vue-windows#usage
`).value
      }
    },
    components: {
      EditorWindow,
      BrowserWindow
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
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

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    h2 {
      font-weight: 300;
      margin-top: -10px;
    }
  }

  a.star {
    color: #4fc08d;
    text-decoration: none;
    border: 1px solid #4fc08d;
    border-radius: 33px;
    padding: 10px 20px;
    margin-top: 10px;
  }
</style>

<style src="highlight.js/styles/github"></style>
