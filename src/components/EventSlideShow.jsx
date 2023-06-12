import { Carousel } from 'flowbite-react'
import {events as eventsData} from "../placeholderdata/events.json"
import { useContext } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext'

function EventSlideShow() {
  const {shoppingCartForm, changeShoppingCart} = useContext(ShoppingCartContext);
  console.log(shoppingCartForm)

  const setStyle = () => {
    if(shoppingCartForm){
      return "h-96 w-3/4 opacity-40"
    } else {
      return "h-96 w-full"
    }

  } 
    return(
        <div className={setStyle()}>
        <Carousel className="w-fit">
          {eventsData.map(event => {
            return(
              <img src={event.image}></img>
            )
          })}
        </Carousel>
      </div>
    )
}

export default EventSlideShow