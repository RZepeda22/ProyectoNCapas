import {FaTag} from "react-icons/fa";

function TicketsBought(){
    return(
        <div className="pt-4 pb-4 text-sm md:text-base text-center">
                <div className="bg-gray-200 p-2 rounded-lg">
                    {/* Do a map for each item starting here*/}
                    {/*The header of the buy details*/}
                    <section className="flex flex-row items-center bg-white border-b-2 p-2 border-black">
                    <FaTag/>
                    <b className="ml-2 md:ml-4">Factura# 0001</b>
                    <b className="ml-4 md:ml-20">Fecha de compra: 27/04/2022</b>
                    <b className="ml-4 md:ml-20">Total: $400</b>
                    </section>
                    {/*Ending of the buy details*/}

                    <ul className="pl-4 md:pl-20 flex flex-col">
                    {/*The map of the details of every ticket bought*/}
                    <li className="p-2 flex flex-row bg-white border-b-2 border-gray-300">
                   <img src="https://www.applaudhr.com/hubfs/HRTechx.jpg"
                   className="w-18 h-12"></img>
                   <section className="ml-2 md:ml-4 flex flex-col">
                    <strong>Tech Conference 2023</strong>
                    <h4>Fecha del evento: 27/14/22</h4>
                   </section>
                   <small className="ml-2 md:ml-4 font-bold bg-green-200 h-fit rounded-md pl-4 pr-4">Zona general</small>
                   <b className="ml-2 md:ml-6">Precio: $80</b>
                    </li>
                    {/*Ending of the details of every ticket bought*/}
                    </ul>
                    {/*And ending here*/}
                </div>
                
                
            </div>
    )
}

export default TicketsBought;