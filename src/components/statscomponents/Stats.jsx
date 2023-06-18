import { Pie, Line, Chart } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import 'chart.js/auto';
import { LineData, lineOptions, PieData } from "./SetStatsData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );


function Stats(){

    const calculatePerCent = (parcial, total) => {
        let number = (parcial/total) * 100
        let rounded = number.toFixed(2)
        return rounded
    }
    return(
        <>
        <div className="flex flex-col items-center font-rubik">
            <strong className="text-4xl">Información General</strong>
            <div className="text-2xl mt-4 flex flex-col items-center">
                <section className="flex flex-row">
                <b className="text-blue-800 underline">Tickets vendidos: </b>
                <h2 className="ml-4">45</h2>
                </section>

                <section className="flex flex-row">
                <b className="text-blue-800 underline">Tickets validados: </b>
                <h2 className="ml-4">42</h2>
                </section>

                <section className="flex flex-row">
                <b className="text-blue-800 underline">Porcentaje de asistencia: </b>
                <h2 className="ml-4">{calculatePerCent(42,45)} %</h2>
                </section>

                <section className="flex flex-row mt-5">
                <b className="text-blue-500 underline">Personas en grupo: </b>
                <h2 className="ml-4">
                    <b>34,</b> {calculatePerCent(34, 45)} %</h2>
                </section>

                <section className="flex flex-row">
                <b className="text-blue-500 underline">Personas en solitario: </b>
                <h2 className="ml-4">
                    <b>8,</b> {calculatePerCent(8, 45)} %</h2>
                </section>
            </div>
            

        </div>
        <div className="mt-20 pl-6 pr-6">
            <section className="flex flex-col items-center">
               <strong className="text-2xl">Tickets canjeados por hora</strong> 
            </section>
            <Chart type='line' data={LineData()} options={lineOptions}/>
        </div>

        <div className="mt-20 h-[40rem] pl-4 pr-4 md:pl-20 md:pr-20 flex flex-col items-center">
            <section className="flex flex-col items-center">
               <strong className="text-2xl">Tiers populares</strong> 
            </section>
            <Chart type='pie' data={PieData()} options={lineOptions}/>
        </div>
        
        
        </>
    )
}

export default Stats;