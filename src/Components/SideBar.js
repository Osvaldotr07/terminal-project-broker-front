import React from 'react'
import {
  SideNav,
  SideNavItems,
  SideNavMenuItem,
  SideNavMenu,
  SideNavLink
} from 'carbon-components-react'

const SideBar = () => {
  return (
      <SideNav
        addFocusListeners
        addMouseListeners
        aria-label='Side navigation'
        defaultExpanded={false}
        isChildOfHeader
        isFixedNav={false}
        isPersistent
        isRail
      >
      </SideNav>
  )
}

export default SideBar