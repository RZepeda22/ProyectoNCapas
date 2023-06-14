import {MdQrCode2} from "react-icons/md";
import {FaTicketAlt} from "react-icons/fa"

function ActiveTickets({changeQRGen ,onChangeTicketTransfer}){
    return(
        <ul className="flex flex-col pt-4 pb-4 text-sm md:text-base text-center">
                <li className="p-2 flex flex-row bg-white">
                   <img src="https://www.applaudhr.com/hubfs/HRTechx.jpg"
                   className="w-18 h-12"></img>
                   <section className="ml-4 flex flex-col">
                    <strong>Tech Conference 2023</strong>
                    <h4>Fecha a realizarse el evento: 27/14/22</h4>
                   </section>
                   <div className="flex flex-col md:flex-row w-full">
                    <small className="ml-4 font-bold bg-green-200 w-fit h-fit mb-4 rounded-md pl-4 pr-4">Zona general</small>
                   <section className="md:ml-auto flex flex-col md:flex-row">
                        <button className="md:mr-4 flex flex-row self-center bg-blue-400 pl-2 pr-2 md:pl-4 md:pr-4 rounded-lg" 
                        onClick={() => onChangeTicketTransfer()}>
                        <FaTicketAlt className="w-6 h-6 md:w-8 md:h-8"/>
                        <b className="self-center ml-2">Transferir Ticket</b>
                        </button>
                        <button className="flex flex-row self-center bg-blue-400 pl-2 pr-2 md:pl-4 md:pr-4 mt-2 md:mt-0 rounded-lg"
                        onClick={() => changeQRGen()}>
                        <MdQrCode2 className="w-6 h-6 md:w-8 md:h-8"/>
                        <b className="self-center ml-2">Verificar Ticket</b>
                        </button>
                    </section>
                   </div>
                   
                   
                </li>
            </ul>
    )
    
}

export default ActiveTickets;