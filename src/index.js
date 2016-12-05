import styles from './style.css'

const EditorWindow = {
  functional: true,
  name: 'editor-window',
  props: {
    title: {
      required: true,
      type: String
    },
    browser: Boolean,
    height: Number,
    width: Number,
    theme: String
  },
  render(h, ctx) {
    const children = ctx.children
    const {browser, title, height, width, theme} = ctx.props

    const className = [
      styles.window,
      theme && styles[theme],
      browser && styles.browser
    ]

    const style = {
      height: Boolean(height) && `${height}px`,
      width: Boolean(width) && `${width}px`
    }

    return (
      <div class={className} style={style}>
        <div class={styles.header}>
          <div class={styles.bullets}>
            <span class={[styles.bullet, styles['bullet-red']]}></span>
            <span class={[styles.bullet, styles['bullet-yellow']]}></span>
            <span class={[styles.bullet, styles['bullet-green']]}></span>
          </div>
          <span class={styles.title} domProps-innerHTML={title}></span>
        </div>
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
  props: {
    url: {
      required: true,
      type: String
    },
    height: Number,
    width: Number,
    theme: String
  },
  render(h, ctx) {
    let {url, height, width, theme} = ctx.props
    const children = ctx.children

    if (url.substr(0, 8) === 'https://') {
      url = `<span style="color: rgba(57,126,73,1)">https</span>${url.substr(5)}`
    }

    return (
      <EditorWindow title={url} browser={true} height={height} width={width} theme={theme}>
        {children}
      </EditorWindow>
    )
  }
}

export {
  EditorWindow,
  BrowserWindow
}
