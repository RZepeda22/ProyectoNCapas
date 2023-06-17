import Events from "./Events";
import NavBar from "./NavBar";
import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import {events as eventsData} from "../placeholderdata/events.json"
import {categories} from "../placeholderdata/categories.json"
import { useNavigate } from "react-router-dom";

function AllEvents(){

    const [categoryName, setCategoryName] = useState("");
    const [events, setEvents] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if(categoryName === ""){
            setEvents(eventsData)
        } else{
            setEvents(eventsData.filter((item) => item.category === categoryName))
        }
        
    },[categoryName])


    const parseDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date)
    }

    const handleCategoryChange = (event) => {
        setCategoryName(event.target.value);
    }

    const handleEventNavigation = (id) => {
        navigate(`/view/${id}`)
    }
    
    return(
        <>
        <NavBar />
        <div className="mt-10 md:mt-8">
            <section className="flex flex-col md:flex-row items-center text-center">
                <strong className="font-rubik text-3xl md:ml-12 font-bold">Todos los eventos</strong>
                <div className="md:ml-auto md:mr-40 mt-4 md:mt-0">
                <b className="mr-4">Seleccionar por categoria</b>
                <select name="Categorias"
                onChange={handleCategoryChange}
                className="">
                <option value="">All</option>
                {categories.map((category, index) => {
                    return(
                        <option value={category.name}>{category.name}</option>
                    )
                })}
                </select>
                </div>
            </section>
            
            <section className="flex flex-row flex-wrap w-fit gap-6 md:gap-10 justify-center md:ml-6 md:mr-8 mt-4 font-rubik">
            {events.map((data, index) => {
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
        </>
        
        
    )
}

export default AllEvents;