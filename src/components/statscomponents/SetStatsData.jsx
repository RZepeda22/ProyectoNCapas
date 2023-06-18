import { useState } from "react";
import {tierssold} from "../statsdata/tierssold.json";
import {ticketstime} from "../statsdata/ticketstime.json"

export function PieData (){
    const [pieChartData, setPieChartData] = useState({
        labels: tierssold.map((data) => data.name),

        datasets:[{
            label: "Tickets vendidos de este tier",
            data: tierssold.map((data) => data.value),
            backgroundColor: [
                '#BAFFF9',
                '#FF9B9B',
                '#A6FF9B'
            ],
            borderColor: [
                '#BAFFF9',
                '#FF9B9B',
                '#A6FF9B'
            ],
            borderWidth: 1,
        }
        ]
    })

    return pieChartData;
}

export function LineData(){
    const [lineData, setLineData] = useState({
        labels: ticketstime.map((data) => data.hour),

        datasets:[{
            label: "Tickets",
            data: ticketstime.map((data) => data.quantity),
            borderColor: '#221FF1',
            backgroundColor: '#221FF1'
        }]
    })

    return lineData;
}

export const lineOptions = {
    responsive: true,
}