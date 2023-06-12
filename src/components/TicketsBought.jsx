import {FaTag} from "react-icons/fa";

function TicketsBought(){
    return(
        <div className="pt-4 pb-4">
                <div className="bg-gray-200 p-2 rounded-lg">
                    <section className="flex flex-row items-center bg-white border-b-2 p-2 border-black">
                    <FaTag/>
                    <b className="ml-4">Factura# 0001</b>
                    <b className="ml-20">Fecha de compra: 27/04/2022</b>
                    <b className="ml-20">Total: $400</b>
                    </section>

                    <ul className="pl-20 flex flex-col">
                    <li className="p-2 flex flex-row bg-white">
                   <img src="https://www.applaudhr.com/hubfs/HRTechx.jpg"
                   className="w-18 h-12"></img>
                   <section className="ml-4 flex flex-col">
                    <strong>Tech Conference 2023</strong>
                    <h4>Fecha del evento: 27/14/22</h4>
                   </section>
                   <small className="ml-4 font-bold bg-green-200 mb-6 rounded-md pl-4 pr-4">Zona general</small>
                   <b className="ml-6">Precio: $80</b>
                </li>
                    </ul>
                </div>
                
                
            </div>
    )
}

export default TicketsBought;