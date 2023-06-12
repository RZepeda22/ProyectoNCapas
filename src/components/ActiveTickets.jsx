import {MdQrCode2} from "react-icons/md";
import {FaTicketAlt} from "react-icons/fa"

function ActiveTickets({onChangeTicketTransfer}){
    return(
        <ul className="flex flex-col pt-4 pb-4">
                <li className="p-2 flex flex-row bg-white">
                   <img src="https://ichef.bbci.co.uk/news/624/mcs/media/images/81966000/jpg/_81966848_otakuchracters.jpg"
                   className="w-18 h-12"></img>
                   <section className="ml-4 flex flex-col">
                    <strong>Convencion de otakus y personas sin oficio</strong>
                    <h4>Fecha a realizarse el evento: 27/14/22</h4>
                   </section>
                   <small className="ml-4 font-bold bg-green-200 mb-6 rounded-md pl-4 pr-4">Zona general</small>
                   <section className="ml-auto flex flex-row">
                        <button className="mr-4 flex flex-row self-center bg-blue-400 pl-4 pr-4 rounded-lg" 
                        onClick={() => onChangeTicketTransfer()}>
                        <FaTicketAlt className="w-8 h-8"/>
                        <b className="self-center ml-2">Transferir Ticket</b>
                        </button>
                        <button className="flex flex-row self-center bg-blue-400 pl-4 pr-4 rounded-lg">
                        <MdQrCode2 className="w-8 h-8"/>
                        <b className="self-center ml-2">Verificar Ticket</b>
                        </button>
                    </section>
                   
                </li>
            </ul>
    )
    
}

export default ActiveTickets;