import { data } from "autoprefixer";
import {events as eventsData} from "../placeholderdata/events.json"

function Events() {

    function formatDate (string) {
        var options = {month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    return(
        <div className="mt-8">
            <strong className="font-rubik text-3xl ml-10 font-bold">Próximos eventos</strong>
            <section className="flex flex-row flex-wrap w-fit gap-10 justify-between ml-6 mr-8 mt-4 font-rubik">
            {eventsData.map((data) => {
                return (
                    <section className="transition duration-400 shadow-lg rounded-sm flex flex-col p-2 h-80 w-80 bg-gray-100 hover:cursor-pointer hover:bg-blue-200">
                        <img src={data.image} className="rounded-lg"/>
                        <b className="mt-3">{data.title}</b>
                        <h2 className="text-orange-700">{formatDate(data.date)}</h2>
                        <h2 className="text-gray-600">{data.time} min</h2>
                    </section>
                )
            })}
        </section>
        </div>
        
    )
}

export default Events