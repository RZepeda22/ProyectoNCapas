function ChangePassword({onChangeChangePassword}){

    const handleClick = (event) => {
        event.stopPropagation();
      }

    return(
        <>
        <div className="fixed top-0 bg-opacity-40 w-full h-full bg-black flex items-center justify-center"
        onClick={() => onChangeChangePassword()}>
            <form className="shadow-md rounded-lg relative h-4/6 w-3/4 md:w-1/4 bg-gray-200 bg-opacity-100 flex flex-col items-center"
            onClick={handleClick}>
                <b className="mt-4 text-xl">Cambiar contraseña</b>
                <label className="pl-6 pr-6 mt-8 text-center text-sm font-semibold">Su contraseña actual</label>
                <input className="w-3/4 h-10 border pl-2 border-gray-600 rounded-lg mt-2" placeholder="Contraseña actual"></input>
                <label className="pl-6 pr-6 mt-8 text-center text-sm font-semibold">Su contraseña nueva</label>
                <input className="w-3/4 h-10 border pl-2 border-gray-600 rounded-lg mt-2" placeholder="Contraseña nueva"></input>
                <button className="mt-auto mb-8 w-1/2 h-14 md:h-10 bg-black rounded-xl text-white"
                onClick={() => onChangeChangePassword()}>Cambiar contraseña</button>
            </form>
        </div>
        </>
    )
}

export default ChangePassword;