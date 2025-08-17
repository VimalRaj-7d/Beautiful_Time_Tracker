import {Pie} from "react-chartjs-2";
import {Chart as Chartjs,
  ArcElement, 
  Tooltip,
  Legend} from "chart.js";

  Chartjs.register(ArcElement,Tooltip,Legend)

  interface Props{
    data:{activity:string,hours:number}[]
    }
const TimeChart=({data}:Props)=> {
  
  const chartData = {
    labels:data.map((d)=>d.activity),
    datasets:[
      {
        label:"hours",
        data:data.map((d)=>d.hours),
        backgroundColor:['#FF6384','#36A2EB','#FFCE56','#34D399','#A788FA'],
        borderWidth : 1,
      }
    ]
  }
  return <Pie data={chartData} />
}

export default TimeChart;
