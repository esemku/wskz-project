import React from 'react'
import './SideNavItems.scss'


const SideNavItems = () => {
  const items = [
    {
      title: 'SEKCJE',
      list: [
        {
          title: 'Formularz rejestracji',
          icon: 'fas fa-boxes'
        }
      ]
    }
  ]

  return (
    <nav className='sideNavItems'>
      {items.map(item => {
        return(
          <div className='sideNavItems__item-wrapper'>
            <h1 className='sideNavItems__item-title'>{item.title}</h1>
            <ul>
              {item.list.map(l => {
                return (
                  <li className='sideNavItems__item-li'>
                    <i className='fas fa-id-badge'></i>
                    {l.title}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </nav>
  )
}


export default SideNavItems
