import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <nav {...props} className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('home')} master darker small>home</link.Master>
    <link.Master className={style.nav__link} href={urlFor('cadeiras')} master darker small>cadeiras</link.Master>
    <link.Master className={style.nav__link} href={urlFor('sofas')} master darker small>sofás</link.Master>
    <link.Master className={style.nav__link} href={urlFor('acessorios')} master darker small>acessórios</link.Master>
  </nav>
