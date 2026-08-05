function ProgressBar({
  completedTasks,
  totalTasks,
  progressPercentage,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">
          Weekly Progress
        </h2>

        <span className="text-orange-500 font-bold">
          {progressPercentage}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-orange-500 h-4 rounded-full transition-all duration-300"
          style={{
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>

      <p className="mt-3 text-gray-600">
        {completedTasks} of {totalTasks} tasks completed
      </p>
    </div>
  );
}

export default ProgressBar;