import React from 'react'
import './SideNav.scss'

import SideNavItems from './SideNavItems'


const SideNav = () => {
  return (
    <div className='sidenav'>
      <div className='logo-wrapper'>
        <div className='logo'>wskz projekt</div>
        <i className='fas fa-bars'></i>
      </div>
      <SideNavItems />
    </div>
  )
}


export default SideNav
