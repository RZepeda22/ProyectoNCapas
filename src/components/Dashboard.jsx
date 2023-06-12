import NavBar from "./NavBar";
import { useState } from "react";
import ActiveTickets from "./ActiveTickets";
import TicketsBought from "./TicketsBought";
import OptionsConfig from "./OptionsConfig";
import {FaTicketAlt, FaMoneyBill, FaUserCog} from "react-icons/fa"
import TransferTicket from "./popupforms/TransferTicket";
import ChangePassword from "./popupforms/ChangePassword";


function Dashboard({userName, onChangeUser}){
    const [option, setOption] = useState(1)
    const [transferTicket, setTransferTicket] = useState(false)
    const [changePassword, setChangePassword] = useState(false)

    const onChangeTicketTransfer = () => {
        setTransferTicket(!transferTicket)
    }

    const onChangeChangePassword = () => {
        setChangePassword(!changePassword)
    }

    const setStyle = (item) => {
        if(item === option){
            return "flex flex-row items-center justify-center bg-gray-200 w-40 h-10 shadow border-b-4 border-blue-400 text-blue-400"
        } else{
            return "flex flex-row items-center justify-center bg-gray-200 w-40 h-10 shadow"
        }
    }

    const setOptionConfig = () => {
        switch(option) {
            case 1:
                return(<>
                <ActiveTickets onChangeTicketTransfer={onChangeTicketTransfer}/>
                </>)
            case 2:
                return(
                    <>
                    <TicketsBought />
                    </>
                )
            case 3:
                return(
                    <>
                    <OptionsConfig onChangeChangePassword={onChangeChangePassword} onChangeUser={onChangeUser}/>
                    </>
                )
        }
    }

    return(
        <>
        <NavBar userName={userName}/>
        {transferTicket && <TransferTicket onChangeTicketTransfer={onChangeTicketTransfer}/>}
        {changePassword && <ChangePassword onChangeChangePassword={onChangeChangePassword}/>}
        <div className="flex flex-col w-full h-fit items-center justify-center font-rubik">
            <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-850161690.jpg"
            className="rounded-full h-40 mt-4"></img>
            <strong className="text-lg">{userName}</strong>
            <h4 className="text-gray-500">JohnDoe@example.com</h4>
        </div>
        <nav className="mt-10 pl-20 flex flex-row font-rubik font-bold">
            <button className={setStyle(1)} onClick={() => setOption(1)}>
                <FaTicketAlt className="mr-2"/> Tickets
            </button>
            <button className={setStyle(2)} onClick={() => setOption(2)}>
                <FaMoneyBill className="mr-2"/>
                Historial
            </button>
            <button className={setStyle(3)} onClick={() => setOption(3)}>
                <FaUserCog className="mr-2"/> Configuración
            </button>
        </nav>
        <div className="pl-20 pr-20 bg-blue-100 h-fit w-full font-rubik">
            {setOptionConfig()}
        </div>
        </>
        
    )
}

export default Dashboard;