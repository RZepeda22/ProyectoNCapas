import EventSlideShow from "./EventSlideShow";
import Events from "./Events";
import NavBar from "./NavBar";

function Home({userName}){
    return(
        <>
        <NavBar userName={userName}/>
        <EventSlideShow/>
        <Events/>
        </>
       
    )
}

export default Home;