import h, { Fragment } from '@kuba/h'
import Nav from '@kuba/nav'
import Site from '@kuba/site'
import Summary from '@kuba/summary'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default (mindset) =>
  <Site className={style.mindset}>
    <Nav className={style.mindset__nav} slot='header' />
    <Fragment slot='main'>
      <Story className={style.components__story}>
        <text.H1 className={style.mindset__h1} master darker larger>{mindset.title}</text.H1>
        <text.P className={style.mindset__p} master small>{mindset.description}</text.P>
      </Story>
      <Story className={style.components__story}>
        <Summary className={style.components__summary} iterator={mindset.summary} />
      </Story>
    </Fragment>
  </Site>
