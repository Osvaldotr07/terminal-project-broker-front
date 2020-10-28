import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    HeaderGlobalAction,
    HeaderGlobalBar,
    Header,
    HeaderPanel,
    HeaderName,

} from 'carbon-components-react'

import { WrapperModal, TitleBar, WrapperMenu, MenuContainer, MenuItem } from '../assets/styles/ModalStyle'

import { Search20, AppSwitcher20, Notification20, UserAvatarFilled32, Report16, Catalog16 } from '@carbon/icons-react'

const SideBar = ({ isLogged }) => {
    const [able, setAble] = useState(false)

    let handleNavbar = () => {
        !able ? setAble(true) : setAble(false)
    }
    return (
        <Header style={{ borderBottom: 0 }}>
            <HeaderName prefix="IBM" style={{ background: 'black', borderRight: '1px solid #eee', margin: 0 }}>
                <Link to="/init" style={{ textDecoration: 'none', color: 'white' }}>
                    [Brokers web]
                </Link>
            </HeaderName>
            <WrapperMenu>
                <MenuContainer>
                    <Link to="/form">
                        <MenuItem>
                            <Report16 /> Crear forma
                        </MenuItem>
                    </Link>
                    <Link to="/myforms">
                        <MenuItem>
                            <Catalog16 /> Listar formas
                        </MenuItem>
                    </Link>
                </MenuContainer>
            </WrapperMenu>
            <HeaderGlobalBar style={{ background: 'black' }}>
                <HeaderGlobalAction aria-label="Search" >
                    <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                    aria-label="Notifications"
                    onClick={() => handleNavbar()}
                >
                    <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                    aria-label="App Switcher"
                    isActive={able}
                    onClick={() => handleNavbar()}
                >
                    <AppSwitcher20 />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
            <HeaderPanel aria-label="Header Panel" expanded={able}>
                <WrapperModal>
                    <UserAvatarFilled32 style={{ fontSize: 20, color: 'white' }} />
                    <TitleBar>{isLogged.name}</TitleBar>
                </WrapperModal>
            </HeaderPanel>
        </Header>
    )
}

export default SideBar