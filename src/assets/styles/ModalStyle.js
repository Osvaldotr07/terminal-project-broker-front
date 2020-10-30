import styled from 'styled-components'


export const WrapperModal = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    z-index: 2;
    flex-direction: column;
`

export const TitleBar = styled.h3`
    font-size: 1.5em;
    color: #eee;
    margin-top: 5px;
`

export const WrapperMenu = styled.div`
    width: 50%;
    height: inherit;
    background: black;
`

export const MenuContainer = styled.ul`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    height: inherit;
    margin-left:10px;
    width: 100%;
`
export const MenuItem = styled.li`
    color:#eee;
    text-decoration:none;
    height: inherit;
    font-size:1em;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`

export const ItemSideBar = styled.div`
    font-size: 1.2em;
    color: #569cff;
    margin-top: 10px;
    padding: 10px;
    cursor:pointer;
`

