import NavBar from "./NavBar";
import { useContext, useState } from "react";
import ActiveTickets from "./ActiveTickets";
import TicketsBought from "./TicketsBought";
import OptionsConfig from "./OptionsConfig";
import {FaTicketAlt, FaMoneyBill, FaUserCog} from "react-icons/fa"
import TransferTicket from "./popupforms/TransferTicket";
import ChangePassword from "./popupforms/ChangePassword";
import QRScanner from "./qrscanner-generator/QRScanner";
import {QRCodeSVG} from 'qrcode.react';
import QRGenerator from "./qrscanner-generator/QRGenerator";
import { useNavigate } from "react-router-dom";
import ShoppingCartContext from "../context/ShoppingCartContext";
import DashboardUser from "./usercomponents/DashboardUser";
import DashboardStats from "./statscomponents/DashboardStats";


function Dashboard(){

    const {userName} = useContext(ShoppingCartContext)

    const setDashboard = () => {
        switch(userName.roleOfUser){
            case "User":
                return (<DashboardUser/>)
            case "Stats":
                return (<DashboardStats/>)
            default:
                return (<DashboardUser/>)
        }
    }

    return(
        <>
        {setDashboard()}
        </>
        
    )
}

export default Dashboard;