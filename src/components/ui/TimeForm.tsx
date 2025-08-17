

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface Props{
  onAdd:(activity:string,hours:number)=>void
}

const TimeForm=({onAdd}:Props) =>{

  const [activity,setActivity]= useState("");
  const [hours,setHours]=useState("");

  const handlesubmit = ()=>{
    if(!activity.trim() || !hours) alert("please fill it");
    console.log(activity,Number(hours));
    setActivity("");
    setHours("");

    
  }

  return (
    <div className='space-y-3'>
      


    <Input 
      placeholder='Active (e.g sleep)'
      value={activity}
      onChange={(e)=>setActivity(e.target.value)}/>

    <Input
      placeholder='hours (e.g 8)'
      value={hours}
      onChange={(e)=>setHours(e.target.value)}/>

      <Button className='w-full' onClick={handlesubmit}>Add New Activity </Button>

    </div>
  )
}

export default TimeForm
