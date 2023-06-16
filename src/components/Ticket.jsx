

function Ticket({title, type, cost, urlEvent, }){

    return(
        <div>
            <div className="pt-4 pb-4 border-b-2">
                        <h2 className="line-clamp-2 font-semibold italic leading-tight">{title}</h2>
                        <li className="flex flex-row mt-2">
                        <img src={urlEvent}
                        className="w-24 h-20"/>
                        <section className="flex flex-col ml-2">
                            <small className="font-bold bg-green-200 rounded-md p-1">{type}</small>
                            <small>Disponibiliad: 1</small>
                            <button className="border border-black rounded mt-1">Aniadir</button>
                        </section>
                        <b className="ml-auto mr-8">${cost}</b>
                    </li>
            </div>
        </div>
    )
}

export default Ticket;