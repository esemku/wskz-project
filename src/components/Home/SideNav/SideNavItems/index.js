import React from 'react'


const SideNavItems = () => {
  const items = [
    {
      title: 'SECTIONS',
      list: [
        {
          title: 'Form',
          icon: 'fas fa-boxes'
        }
      ]
    }
  ]

  return (
    <nav style={{ display: 'none'}} classname=''>
      {items.map(item => {
        return(
          <div className=''>
            <h1 className=''>{item.title}</h1>
            <ul>
              {item.list.map(l => {
                return (
                  <li className=''>
                    <i className=''></i>
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
