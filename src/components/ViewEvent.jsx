import { useEffect, useState, useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import ViewEventUser from "./usercomponents/ViewEventUser";
import ViewEventStats from "./statscomponents/ViewEventStats";

export default function ViewEvent() {

  const {userName} = useContext(ShoppingCartContext)

  const setViewEvent = () => {
    switch(userName.roleOfUser){
        case "User":
            return (<ViewEventUser/>)
        case "Stats":
            return (<ViewEventStats/>)
        default:
            return (<ViewEventUser/>)
    }
}
  return(
    <>
    {setViewEvent()}
    </>
  )
}