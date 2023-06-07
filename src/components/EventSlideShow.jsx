import { Carousel } from 'flowbite-react'

function EventSlideShow() {

  function ShowSomething(){
    console.log("Si funciona")
  }
    return(
        <div className="h-96">
        <Carousel className="w-fit">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            onClick={ShowSomething}
            />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    )
}

export default EventSlideShow