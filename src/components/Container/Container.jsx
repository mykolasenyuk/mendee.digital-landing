import s from './Container.module.scss'
import sprite from '../../images/icons/sprite.svg'
import logo from '../../images/icons/Logo.svg'

export default function Container() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        BRANDING AND WEB DEVELOPMENT STUDIO COMING SOON
      </h1>
      <p>hello@mendee.digital</p>
      <div>
        <ul className={s.socialList}>
          <li>
            <a className={s.socialLink} href="mailto:hello@mendee.digital">
              <svg width="38px" height="38px">
                <use href={sprite + '#icon-mail'} />
              </svg>
            </a>
          </li>
          <li>
            <a
              className={s.socialLink}
              href="https://www.instagram.com/mendee_digital/"
            >
              <svg width="38px" height="38px">
                <use href={sprite + '#icon-instagram'} />
              </svg>
            </a>
          </li>
          <li>
            <a
              className={s.socialLink}
              href="https://twitter.com/mendee_digital"
            >
              <svg width="38px" height="38px">
                <use href={sprite + '#icon-twitter'} />
              </svg>
            </a>
          </li>
          <li>
            <a
              className={s.socialLink}
              href="https://www.facebook.com/mendee.digital/"
            >
              <svg width="38px" height="38px">
                <use href={sprite + '#icon-facebook'} />
              </svg>
            </a>
          </li>
          <li>
            <a
              className={s.socialLink}
              href="https://www.linkedin.com/company/mendee/"
            >
              <svg width="38px" height="38px">
                <use href={sprite + '#icon-linkedin'} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
