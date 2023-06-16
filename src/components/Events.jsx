import { data } from "autoprefixer";
import {events as eventsData} from "../placeholderdata/events.json"
import { useNavigate } from "react-router-dom";

function Events() {

    const navigate = useNavigate();

    const parseDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date)
    }

    const handleEventNavigation = (id) => {
        navigate(`/view/${id}`)
    }
    
    return(
        <div className="mt-10 md:mt-8">
            <strong className="font-rubik text-3xl ml-12 md:ml-10 font-bold">Próximos eventos</strong>
            <section className="flex flex-row flex-wrap w-fit gap-6 md:gap-10 justify-center md:ml-6 md:mr-8 mt-4 font-rubik">
            {eventsData.map((data) => {
                return (
                    <section className="transition duration-400 shadow-lg rounded-sm flex flex-col p-2 h-70 md:h-80 w-70 md:w-80 bg-gray-100 hover:cursor-pointer hover:bg-blue-200"
                    onClick={() => handleEventNavigation(data.id)}>
                        <img src={data.image} className="rounded-lg aspect-video"/>
                        <b className="mt-3">{data.title}</b>
                        <h2 className="text-orange-700">{parseDate(data.date)}</h2>
                        <h2 className="text-gray-600">{data.time} min</h2>
                    </section>
                )
            })}
        </section>
        </div>
        
    )
}

export default Events