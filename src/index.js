import styles from './style.css'

const EditorWindow = {
  functional: true,
  props: {
    title: {
      required: true,
      type: String
    },
    browser: Boolean,
    height: Number,
    width: Number
  },
  render(h, ctx) {
    const children = ctx.children
    const {browser, title, height, width} = ctx.props

    const className = [
      styles.window,
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
          <span class={styles.title}>{title}</span>
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
  props: {
    url: {
      required: true,
      type: String
    },
    height: Number,
    width: Number
  },
  render(h, ctx) {
    const {url, height, width} = ctx.props
    const children = ctx.children

    return (
      <EditorWindow title={url} browser={true} height={height} width={width}>
        {children}
      </EditorWindow>
    )
  }
}

export {
  EditorWindow,
  BrowserWindow
}
