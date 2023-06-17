import NavBar from "./NavBar";

function ShoppingCar({userName}){
    return(
        <>
        <NavBar />
        <div className="w-full bg-gray-100 h-screen font-rubik">
            <strong className="text-2xl ml-20">Carrito de compra</strong>
            <section className="w-2/6 h-60 bg-white ml-20">
                <ul>
                    <li className="flex flex-row">
                        <b>Hola</b>
                    </li>
                </ul>

            </section>

        </div>
        </>
        
    )
}

export default ShoppingCar;