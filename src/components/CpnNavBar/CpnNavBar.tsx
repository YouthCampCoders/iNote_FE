import React from 'react'
import { useNavigate } from 'react-router-dom'
import usePathChange from './hooks/usePathChange'
import useBreadChange from './hooks/useBreadChange'
import { navConfig } from './config/navList'
import CpnNavBarAvatarMenu from './CpnNavBarAvatarMenu'
import style from './CpnNavBar.module.less'

const navList = navConfig

const CpnNavBar: React.FC = (props) => {
  const navigate = useNavigate()
  const current = usePathChange()
  const currentNavChange = (to: string) => navigate(to)

  useBreadChange()
  return current >= 0 ? (
    <div className={style['navbar']}>
      <ul className={style['navbar__list']}>
        <li
          className={style['navbar__logo']}
          onClick={() => currentNavChange('/home')}
        >
          <img src="/img/logo.png" alt="" />
        </li>
        {/* 导航列表 */}
        {navList.map((nav, index) => (
          <li
            className={
              index === current
                ? style['list__item-current']
                : style['list__item']
            }
            key={index}
            onClick={() => currentNavChange(nav.to)}
          >
            <img
              src={`${nav.icon}${index === current ? '-s' : ''}.svg`}
              alt=""
            />
            {nav.title}
          </li>
        ))}
        <li className={style['navbar__avatar']}>
          <CpnNavBarAvatarMenu />
        </li>
      </ul>
    </div>
  ) : (
    <></>
  )
}

export default CpnNavBar
