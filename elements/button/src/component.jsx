import h from '@rex/sandbox'
import * as f from '@rex/f'
import style from './style.css'

export default (props, children) =>
  <a className={[style.button, style[props.type], props.className]} href={f.or(props.href, '#')}>{children}</a>
