import React from 'react'
import { useNavigate } from 'react-router-dom'
import usePathChange from './hooks/usePathChange'

import { navConfig } from './config/navList'
import style from './CpnNavBar.module.less'

const navList = navConfig

const CpnNavBar: React.FC = (props) => {
  const navigate = useNavigate()
  const current = usePathChange()

  const currentNavChange = (to: string) => navigate(to)

  return current >= 0 ? (
    <div className={style['navbar']}>
      <ul className={style['navbar__list']}>
        <li className={style['navbar__logo']}>
          <img src="img/logo.png" alt="" />
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
          <img
            src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg"
            alt=""
          />
        </li>
      </ul>
    </div>
  ) : (
    <></>
  )
}

export default CpnNavBar
