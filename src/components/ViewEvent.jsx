import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {events as eventsData} from "../placeholderdata/events.json"
import {tiers as tiersData} from "../placeholderdata/tiers.json"
import { object } from "prop-types";
import NavBar from "./NavBar";
import Ticket from "./Ticket";
import {FaCalendarAlt} from "react-icons/fa"
import ShoppingCartContext from "../context/ShoppingCartContext";

export default function ViewEvent({userName}) {
  const [item, setItem] = useState({});
  const params = useParams();
  const {shoppingCartForm} = useContext(ShoppingCartContext);

  useEffect(() => {
    const event = eventsData.filter(event => event.id == params.eId);
    
    setItem(event);
  }, []);

    const parseDateDay = (date) => {
    return new Intl.DateTimeFormat('es-MX', {day: '2-digit'}).format(date)
}

    const parseDateMonth = (date) => {
    return new Intl.DateTimeFormat('es-MX', {month: 'short'}).format(date)
}

const setStyle = () => {
  if(shoppingCartForm){
    return "relative w-1/4 md:w-3/4"
  } else {
    return "relative w-full"
  }

}

  return (
    <>
    <NavBar userName={userName}/>
    <div>
      
      <div className={setStyle()}>
            <img src={item[0]?.image} className="h-[28rem] w-full object-cover"/>
            <div className="absolute left-0 bottom-0 opacity-80 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute left-1 bottom-1 text-white">
                <div className="flex flex-row items-center p-4">
                    <FaCalendarAlt className="h-8 w-8"/>
                    <section className="ml-4 flex flex-col items-center">
                        <b className="text-5xl">{parseDateDay(item[0]?.date)}</b>
                        <b className="text-2xl">{parseDateMonth(item[0]?.date)}</b>
                    </section>
                    <div className="h-20 w-[0.1rem] bg-white ml-8"></div>
                    <strong className="ml-8 text-4xl">{item[0]?.title}</strong>
                    
                </div>
                
            </div>
            
        
      </div>
   
      {/*<img src={item[0]?.image} className=" w-full h-full "/>*/}
      <div className="flex flex-row font-rubik gap-20 mt-10">
        <section className="w-1/2  ml-8 ">
        <strong className="mt-8 ml-8 text-2xl">Info/Descripción</strong>
        <p className="p-5 text-justify rounded-lg mt-4 bg-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt repellendus eligendi veritatis tempore nam dolorum sapiente omnis eaque dolor. Mollitia fugit, voluptatum reprehenderit deleniti qui, quia velit nobis quaerat ipsa molestias eligendi. Quasi enim eaque dignissimos ratione placeat, in commodi sapiente minima. Nulla esse evenietos hic molestias vitae provident, modi consequuntur odit expedita qui repellat asperiores porro a voluptatum tempore! Dolore minus numquam culpa corporis repudiandae voluptates odit voluptatum qui, neque odio dolorem consequuntur maxime excepturi mollitia impedit, incidunt error vero adipisci saepe accusamus inventore rerum. Et id sapiente ut fugiat dolor odio rerum in dignissimos alias animi omnis adipisci voluptatibus hic veritatis sit nulla quidem, ipsa minus nobis eius optio praesentium quod! Ab voluptatum nemo ullam repellendus architecto. Facere nostrum eaque nesciunt possimus sequi repellat consequuntur enim in nam, minus earum impedit natus exercitationem distinctio commodi cum quae. Eveniet id, repellendus debitis est blanditiis minus sint incidunt sit veniam ab odio dicta suscipit aut culpa sunt, laudantium quae nam impedit laborum eligendi?
        </p>
        </section>
        
        <div className="flex flex-col w-4/12 bg-gray-100 mt-10 mb-10 rounded-lg">
         
         {tiersData.map((tier) => { return(
          <div key={tier.id}>
            <section><Ticket title={item[0]?.title} tier={tier.name} cost={tier.cost} image={item[0]?.image}/></section>
          </div>
         )
         })}
         

         
        </div>
      </div>
      
      
      
      
      
    </div>
    </>

  );
}