import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface Props {
  onAdd: (activity: string, hours: number) => void;
}

const TimeForm = ({ onAdd }: Props) => {
  const [activity, setActivity] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = () => {
    if (!activity.trim() || !hours) {
      alert("Please fill all fields");
      return;
    }

    // ✅ Call parent callback
    onAdd(activity, Number(hours));

    // Clear fields after submit
    setActivity("");
    setHours("");
  };

  return (
    <div className="space-y-3">
      <Input 
        placeholder="Activity (e.g. Sleep)" 
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />

      <Input 
        placeholder="Hours (e.g. 8)" 
        type="number"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <Button className="w-full" onClick={handleSubmit}>
        Add New Activity
      </Button>
    </div>
  );
};

export default TimeForm;
