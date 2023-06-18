
function TicketStats({title, tier, cost, image }){

    return(
        <div>
            <div className="pt-4 pb-4 border-b-2 p-8 rounded-md hover:bg-blue-100 transition ease-in-out">
                        <h2 className="line-clamp-2 font-semibold italic leading-tight">{title}</h2>
                        <li className="flex flex-row mt-2">
                        <img src={image}
                        className="w-24 h-20 rounded-lg"/>
                        <section className="flex flex-col ml-2">
                            <small className="font-bold bg-green-200 rounded-md p-1 text-center">{tier}</small>
                        </section>
                        <b className="ml-auto mr-8">${cost}</b>
                    </li>
            </div>
        </div>
    )
}

export default TicketStats;