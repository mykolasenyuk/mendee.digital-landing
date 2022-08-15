import s from './LogoLoader.module.scss'

import logo from '../../images/icons/Logo.svg'

export default function LogoLoader() {
  return (
    <div className="mendee-digital-logo">
      <img src={logo} className={s.AppLogo} alt="logo" />
    </div>
  )
}
