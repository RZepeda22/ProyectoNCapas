import { Carousel } from 'flowbite-react'
import {events as eventsData} from "../placeholderdata/events.json"

function EventSlideShow() {

  function ShowSomething(){
    console.log("Si funciona")
  }
    return(
        <div className="h-96">
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