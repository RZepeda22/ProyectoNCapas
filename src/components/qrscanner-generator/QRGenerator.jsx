import {QRCodeSVG} from 'qrcode.react';

function QRGenerator({changeQRGen}){

    const handleClick = (event) => {
        event.stopPropagation;
    }

    return(
        <>
        <div className="fixed top-0 bg-opacity-40 w-full h-full bg-black flex items-center justify-center"
        onClick={() => changeQRGen()}>
        <section className="shadow-md rounded-lg relative h-4/6 w-3/4 md:w-1/4 bg-gray-200 bg-opacity-100 flex flex-col items-center"
        onClick={handleClick}>
            <b className="mt-4 text-2xl">Validación de Ticket</b>
            <small className="font-medium"></small>
            <div className="w-full flex flex-col items-center mt-10 h-full">
                {/*Replace the value of the component for the hash or another value*/}
            <QRCodeSVG className="w-48 h-48" value="https://reactjs.org/" />
            <small className="mt-auto mb-4">Este QR solo estará activo durante 10 minutos</small>
            </div>

        </section>

      </div>
        </>
    )
}

export default QRGenerator;