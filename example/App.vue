<template>
  <div id="app">
    <h1>Vue Windows</h1>

    <div class="control">
      <div class="form-control">
        <label for="">Theme:</label>
        <select v-model="theme">
          <option value="default">Default</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div class="form-control">
        <label>
          Shadow:
          <input type="checkbox" v-model="shadow">
        </label>
      </div>
      <div class="form-control">
        <label>
          Use string width:
          <input type="checkbox" v-model="stringWidth">
        </label>
      </div>
      <div class="form-control">
        <label>
          Width:
          <input type="text" v-model="widthString" :disabled="!stringWidth">
        </label>
      </div>
      <div class="range">
        Width: <input type="range" min="460" max="600" v-model.number="width" :disabled="stringWidth">
        <span v-show="width">{{ width }} px</span>
      </div>
      <div class="range">
        Height: <input type="range" min="100" max="600" v-model.number="height">
        <span v-show="height">{{ height}} px</span>
      </div>
    </div>

    <div class="example" :class="{[`example-${theme}`]: true}">

      <editor-window
        title="How To"
        :width="realWidth"
        :height="height"
        :theme="theme"
        :shadow="shadow">
        <pre><code v-html="code"></code></pre>
      </editor-window>

      <browser-window
        url="https://github.com/egoist/vue-windows"
        :width="realWidth"
        :height="height"
        :theme="theme"
        :shadow="shadow">
        <div class="content">
          <h2>
            Such Window, Very Lovely!
          </h2>
          <a class="star" href="https://github.com/egoist/vue-windows">Star me on GitHub!</a>
        </div>
      </browser-window>

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
        width: 460,
        height: 270,
        theme: 'default',
        shadow: false,
        code: hljs.highlight('javascript', `import {EditorWindow} from 'vue-windows'

new Vue({
  el: '#app',
  render(h) {
    return h(EditorWindow, {props: {title: 'hola!'}})
  }
})

// set how to use in single file component
// https://github.com/egoist/vue-windows#usage
`).value,
        stringWidth: false,
        widthString: 'calc(50vw - 120px)'
      }
    },
    computed: {
      realWidth() {
        return this.stringWidth ? this.widthString : this.width
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
  font-weight: 300;
}
body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}

h1 {
  text-align: center;
  font-weight: 100;
  margin-top: 28px;
}

h2 {
  margin-top: 0;
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
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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

.form-control {
  display: flex;
}
</style>

<style src="highlight.js/styles/androidstudio.css"></style>
