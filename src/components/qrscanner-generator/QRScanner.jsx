import React, { useState } from 'react';
import {BarcodeScanner} from '@thewirv/react-barcode-scanner';


function QRScanner() {
    const [data, setData] = useState('No result');

    return (
      <>
      <div className="fixed top-0 bg-opacity-40 w-full h-full bg-black flex items-center justify-center">
        <section className="shadow-md rounded-lg relative h-4/6 w-1/4 bg-gray-200 bg-opacity-100 flex flex-col items-center">
            <b className="mt-4 text-xl">Validación de Ticket</b>
            <small className="font-medium"></small>
            <div className="w-3/4 h-full">
                <BarcodeScanner
                onSuccess={(text) => setData(text)}
                onError={(error) => {
                if (error) {
                console.error(error.message);
                }
            }}
            onLoad={() => console.log('Video feed has loaded!')}
        />
        {console.log(data)}
        <p>{data}</p>
            </div>

        </section>

      </div>
        
      </>
    );
};

export default QRScanner;