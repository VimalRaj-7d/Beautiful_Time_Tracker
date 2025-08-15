

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function TimeForm() {
  return (
    <div className='space-y-3'>
    <Input 
      placeholder='Active (e.g sleep)'
      value='test'
      onChange={(e)=>console.log(e.target.value)}/>

    <Input
      placeholder='hours (e.g 8)'
      value='5'
      onChange={(e)=>console.log(e.target.value)}/>

      <Button className='w-full'>Add Activity</Button>
    </div>
  )
}

export default TimeForm
