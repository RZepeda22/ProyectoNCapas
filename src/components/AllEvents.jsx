import Events from "./Events";
import NavBar from "./NavBar";

function AllEvents({userName}){
    return(
        <div>
            <NavBar userName={userName}/>
            <Events />
        </div>
    )
}

export default AllEvents;