import {
  UserCircle,
  CheckCircle2,
  Clock3,
  Flag,
} from "lucide-react";

function ManagerTaskRow({
  task,
  onToggleRisk,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 mb-4 border-l-4 border-orange-500">

      <div className="flex justify-between items-start">

        {/* Left Side */}
        <div>

          <div className="flex items-center gap-3">

            <UserCircle
              size={42}
              className="text-orange-500"
            />

            <div>

              <h3 className="font-bold text-lg">
                {task.employee}
              </h3>

              <p className="text-gray-500">
                {task.task}
              </p>

            </div>

          </div>

          {/* Status */}
          <div className="mt-4">

            {task.completed ? (

              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full flex items-center gap-2 w-fit">

                <CheckCircle2 size={16} />

                Completed

              </span>

            ) : (

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full flex items-center gap-2 w-fit">

                <Clock3 size={16} />

                Pending

              </span>

            )}

          </div>

        </div>

        {/* Right Side */}

        <button
          onClick={() => onToggleRisk(task.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white transition ${
            task.risk
              ? "bg-red-600"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          <Flag size={16} />

          {task.risk
            ? "Flagged"
            : "Flag At Risk"}

        </button>

      </div>

    </div>
  );
}

export default ManagerTaskRow;