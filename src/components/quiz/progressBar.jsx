export default function ProgressBar({ current, total }) {
    const percentage = (current / total) * 100;
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
  