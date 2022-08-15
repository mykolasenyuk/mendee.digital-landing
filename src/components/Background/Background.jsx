import { ReactNode } from 'react'
import s from './Background.module.scss'

export default function Background({ children }) {
  return (
    <>
      <div className={s.area}>
        <ul className={s.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={s.container}>{children}</div>
    </>
  )
}
