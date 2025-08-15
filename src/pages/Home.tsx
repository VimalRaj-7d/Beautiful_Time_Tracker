import TimeForm from "@/components/ui/TimeForm";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow space-y-4">
        <h2 className="text-2xl font-bold text-center">⏱️ Time Tracker</h2>
        <TimeForm />
      </div>
    </div>
  );
}

export default Home;
