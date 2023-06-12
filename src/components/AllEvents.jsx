import NavBar from "./NavBar";

function AllEvents({userName}){
    return(
        <div>
            <NavBar userName={userName}/>
            <strong>
                Hola
            </strong>
        </div>
    )
}

export default AllEvents;