import { useNavigate } from "react-router-dom";

function OptionsConfig({onChangeChangePassword, onChangeUser}){

    const navigate = useNavigate();

    const getTheFuckOut = () => {
        onChangeUser("")
        navigate('/')
        
    }
    return(
        <div>
            <section className="pt-2 pb-2">
            <button className="h-20 border-l-4 border-black w-1/2 text-left rounded-lg hover:bg-white ease-in-out transition"
            onClick={() => onChangeChangePassword()}>
                <b className="ml-6">Cambiar contraseña</b>
            </button>
            </section>
            <section className="pt-2 pb-2">
            <button className="h-20 border-l-4 border-black w-1/2 text-left rounded-lg hover:bg-white ease-in-out transition"
            onClick={getTheFuckOut} type="button">
                <b className="ml-6">Salir de la cuenta</b>
            </button>
            </section>
            <section className="pt-2 pb-2">
            <button className="h-20 border-l-4 border-black w-1/2 text-left rounded-lg hover:bg-white ease-in-out transition">
                <b className="ml-6">Terminos y condiciones</b>
            </button>
            </section>
        </div>
        
        
    )
}

export default OptionsConfig;