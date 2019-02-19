import assign from 'nano-assign'
import styles from './style.module.css'
import Header from './Header/index'

const EditorWindow = {
  name: 'editor-window',
  props: {
    title: {
      required: true,
      type: String
    },
    browser: Boolean,
    height: [Number, String],
    width: [Number, String],
    theme: {
      type: String,
      validator(v) {
        return ['default', 'dark'].indexOf(v) > -1
      }
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    const {browser, title, height, width, theme, shadow} = this.$props

    const className = [
      styles.window,
      theme && styles[theme],
      shadow && styles.shadow
    ]

    const style = {
      height: Boolean(height) && (typeof height === 'number' ? `${height}px` : height),
      width: Boolean(width) && (typeof width === 'number' ? `${width}px` : width)
    }

    return h('div', {
      class: className,
      style
    }, [
      h(Header, {
        props: {
          title,
          isURL: browser,
          theme
        }
      }),
      h('div', {
        class: styles.body
      }, this.$slots.default)
    ])
  }
}

const BrowserWindow = {
  name: 'browser-window',
  props: EditorWindow.props,
  render(h) {
    const props = assign({ browser: true }, this.$props)

    if (props.title.substr(0, 8) === 'https://') {
      props.title = `<span class="${[styles.safe, props.theme && styles[props.theme]].join(' ')}">https</span>${props.title.substr(5)}`
    }

    return h(EditorWindow, {
      props
    }, this.$slots.default)
  }
}

export {
  EditorWindow,
  BrowserWindow
}
