import NavBar from "../NavBar";
import { useContext, useState } from "react";
import ActiveTickets from "../ActiveTickets";
import TicketsBought from "../TicketsBought";
import OptionsConfig from "../OptionsConfig";
import {FaTicketAlt, FaMoneyBill, FaUserCog} from "react-icons/fa"
import TransferTicket from "../popupforms/TransferTicket";
import ChangePassword from "../popupforms/ChangePassword";
import QRScanner from "../qrscanner-generator/QRScanner";
import {QRCodeSVG} from 'qrcode.react';
import QRGenerator from "../qrscanner-generator/QRGenerator";
import { useNavigate } from "react-router-dom";
import ShoppingCartContext from "../../context/ShoppingCartContext";


function DashboardStats(){
    const [option, setOption] = useState(1)
    const [transferTicket, setTransferTicket] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const [QRGen, setQRGen] = useState(false);

    const {userName, onChangeUser} = useContext(ShoppingCartContext)

    const navigate = useNavigate();

    const onChangeChangePassword = () => {
        setChangePassword(!changePassword)
    }

    return(
        <>
        {userName.length === 0 ? navigate('/login') : <div></div>}
        <NavBar />
        {changePassword && <ChangePassword onChangeChangePassword={onChangeChangePassword}/>}
        <div className="flex flex-col w-full h-fit items-center justify-center font-rubik">
            <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-850161690.jpg"
            className="rounded-full h-40 mt-4"></img>
            <strong className="text-lg">{userName.nameOfUser}</strong>
            <h4 className="text-gray-500">JohnDoe@example.com</h4>
        </div>
        <nav className="text-sm w-full md:text-basemt-10 md:pl-20 flex flex-row justify-stretch font-rubik font-bold">
            <button className="flex flex-row items-center justify-center bg-gray-200 w-32 md:w-40 h-10 shadow border-b-4 border-blue-400 text-blue-400" onClick={() => setOption(3)}>
                <FaUserCog className="mr-2"/> Configuración
            </button>
        </nav>
        <div className="md:pl-20 md:pr-20 bg-blue-100 h-fit w-full font-rubik">
        <OptionsConfig onChangeChangePassword={onChangeChangePassword} onChangeUser={onChangeUser}/>
        </div>
        </>
        
    )
}

export default DashboardStats;