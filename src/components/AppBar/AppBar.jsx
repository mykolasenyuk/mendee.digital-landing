import s from './AppBar.module.scss'
import sprite from '../../images/icons/sprite.svg'

export default function AppBar() {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <nav className={s.navBar}>
          <div className={s.headerLogo}>
            <svg width="285px" height="48px">
              <use href={sprite + '#icon-logoName'} />
            </svg>
          </div>
          <button className={s.menuBtn}>menu</button>
          <div className={s.navMenu}>
            <ul className={s.navBarList}>
              <li className={s.navBarListItem}>SERVICES</li>
              <li className={s.navBarListItem}>ABOUT US</li>
              <li className={s.navBarListItem}>CONTACT</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
