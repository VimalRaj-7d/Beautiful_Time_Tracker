import TimeForm from "@/components/ui/TimeForm";
import TimeChart from "@/components/ui/TimeChart";
import { useState } from "react";

const Home =()=> {
  const [data,setData] = useState<{activity:string; hours:number}[]>([]);
  const handleAdd = (activity:string, hours:number)=>{
    //console.log(activity,hours);
    setData((prev)=>[...prev,{activity,hours}]);
   // console.log(data);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow space-y-4">
        <h2 className="text-2xl font-bold text-center">⏱️ Time Tracker</h2>
        <TimeForm onAdd={handleAdd}/>
        <TimeChart data={data}/>
        
      </div>
    </div>
  );
}

export default Home;
