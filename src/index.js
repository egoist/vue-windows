import assign from 'nano-assign'
import styles from './style.module.css'
import Header from './Header/index'

const sharedProps = {
  browser: Boolean,
  height: Number,
  width: Number,
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
}

const EditorWindow = {
  functional: true,
  name: 'editor-window',
  props: assign({
    title: {
      required: true,
      type: String
    }
  }, sharedProps),
  render(h, ctx) {
    const children = ctx.children
    const {browser, title, height, width, theme, shadow} = ctx.props

    const className = [
      styles.window,
      theme && styles[theme],
      shadow && styles.shadow
    ]

    const style = {
      height: Boolean(height) && `${height}px`,
      width: Boolean(width) && `${width}px`
    }

    return (
      <div class={className} style={style}>
        <Header title={title} isURL={browser} theme={theme} />
        <div class={styles.body}>
          {children}
        </div>
      </div>
    )
  }
}

const BrowserWindow = {
  functional: true,
  name: 'browser-window',
  props: assign({
    url: {
      required: true,
      type: String
    }
  }, sharedProps),
  render(h, ctx) {
    let {url, height, width, theme, shadow} = ctx.props
    const children = ctx.children

    if (url.substr(0, 8) === 'https://') {
      url = `<span style="color: rgba(57,126,73,1)">https</span>${url.substr(5)}`
    }

    return (
      <EditorWindow
        title={url}
        browser={true}
        height={height}
        width={width}
        theme={theme}
        shadow={shadow}>
        {children}
      </EditorWindow>
    )
  }
}

export {
  EditorWindow,
  BrowserWindow
}
