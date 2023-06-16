import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {events as eventsData} from "../placeholderdata/events.json"
import {tiers as tiersData} from "../placeholderdata/tiers.json"
import { object } from "prop-types";
import NavBar from "./NavBar";
import Ticket from "./Ticket";

export default function ViewEvent({userName}) {
  const [item, setItem] = useState({});
  const params = useParams();

  useEffect(() => {
    const event = eventsData.filter(event => event.id == params.eId);
    
    setItem(event);
  }, []);

  return (
    <div className="flex flex-col items-stretch ">
      <NavBar userName={userName}/>
      <div  className="bg-cover bg-center bg-no-repeat  h-96 flex  " style={{backgroundImage: `url(${item[0]?.image})`}}>
        <div className="grid grid-cols-2 grid-rows-2 w-2/4 h-2/4 rounded-lg   mt-40">
          <div className="h-24 col-span-2 text-3xl text-white text-center" >{item[0]?.title}</div>
          
          <div className="h-24 text-xl text-white"> Duracion {item[0]?.time}</div>
          <div className="h-24 text-xl text-white" > Fecha {item[0]?.date}</div>
        </div>
        
        
      </div>
   
      {/*<img src={item[0]?.image} className=" w-full h-full "/>*/}
      <div className="grid grid-cols-2">
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt repellendus eligendi veritatis tempore nam dolorum sapiente omnis eaque dolor. Mollitia fugit, voluptatum reprehenderit deleniti qui, quia velit nobis quaerat ipsa molestias eligendi. Quasi enim eaque dignissimos ratione placeat, in commodi sapiente minima. Nulla esse evenietos hic molestias vitae provident, modi consequuntur odit expedita qui repellat asperiores porro a voluptatum tempore! Dolore minus numquam culpa corporis repudiandae voluptates odit voluptatum qui, neque odio dolorem consequuntur maxime excepturi mollitia impedit, incidunt error vero adipisci saepe accusamus inventore rerum. Et id sapiente ut fugiat dolor odio rerum in dignissimos alias animi omnis adipisci voluptatibus hic veritatis sit nulla quidem, ipsa minus nobis eius optio praesentium quod! Ab voluptatum nemo ullam repellendus architecto. Facere nostrum eaque nesciunt possimus sequi repellat consequuntur enim in nam, minus earum impedit natus exercitationem distinctio commodi cum quae. Eveniet id, repellendus debitis est blanditiis minus sint incidunt sit veniam ab odio dicta suscipit aut culpa sunt, laudantium quae nam impedit laborum eligendi?
        </p>
        <div className="flex flex-col">
         
         {tiersData.map((tier,index) => { return(
          <ul key={index}>
            <li><Ticket title={item[0]?.title} type={tier.name} cost={tier.cost} urlEvent={item[0]?.image}/></li>
          </ul>
         )
         })}
         

         
        </div>
      </div>
      
      
      
      
      
    </div>
  );
}