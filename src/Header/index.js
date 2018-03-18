import style from './style.module.css'

export default {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    isURL: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String
    }
  },
  render(h, { props: { title, isURL, theme } }) {
    return (
      <div class={[style.header, isURL && style.isUrl, style[theme]]}>
        <div class={style.bullets}>
          <span class={[style.bullet, style['bullet-red']]}></span>
          <span class={[style.bullet, style['bullet-yellow']]}></span>
          <span class={[style.bullet, style['bullet-green']]}></span>
        </div>
        <span class={style.title} domProps-innerHTML={title}></span>
      </div>
    )
  }
}
