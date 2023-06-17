import { useState, useContext } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext'
import NavBarUser from './usercomponents/NavBarUser'
import NavBarStats from './statscomponents/NavBarStats'

const NavBar = () => {

    const {userName} = useContext(ShoppingCartContext)

    
    {/*Create the new component of each role and set it here*/}
    {/*Create a new folder with the role and put the new components there*/}
    const setNavBar = () => {
        switch(userName.roleOfUser){
            case "User":
                return (<NavBarUser/>)
            case "Stats":
                return (<NavBarStats/>)
            default:
                return (<NavBarUser/>)
        }
    }

    return(
        <>
        {setNavBar()}
        </>
)
}

export default NavBar
