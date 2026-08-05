import {
  ClipboardList,
  CalendarDays,
  CircleAlert,
  CheckCircle2,
  Clock3,
  CircleCheck,
} from "lucide-react";

// Returns different colors based on task priority
function getPriorityColor(priority) {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-600";

    case "Medium":
      return "bg-yellow-100 text-yellow-700";

    case "Low":
      return "bg-blue-100 text-blue-600";

    default:
      return "bg-gray-100 text-gray-600";
  }
}

function TaskCard({ task, onToggle }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border-l-4
        border-orange-500
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        p-6
        mb-5
      "
    >
      {/* ==========================
          Task Title
      ========================== */}
      <div className="flex items-center gap-3">
        <ClipboardList
          size={24}
          className="text-orange-500"
        />

        <h3 className="text-xl font-bold text-gray-800">
          {task.title}
        </h3>
      </div>

      {/* ==========================
          Task Description
      ========================== */}
      <p className="text-gray-500 mt-3 leading-relaxed">
        {task.description}
      </p>

      {/* ==========================
          Task Information
      ========================== */}
      <div className="flex flex-wrap gap-3 mt-5">

        {/* Priority */}
        <span
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${getPriorityColor(
            task.priority
          )}`}
        >
          <CircleAlert size={16} />
          {task.priority}
        </span>

        {/* Status */}
        <span
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
            task.completed
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.completed ? (
            <CheckCircle2 size={16} />
          ) : (
            <Clock3 size={16} />
          )}

          {task.completed
            ? "Completed"
            : "Pending"}
        </span>

        {/* Due Date */}
        <span className="flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
          <CalendarDays size={16} />
          {task.due}
        </span>

      </div>

      {/* ==========================
          Action Button
      ========================== */}
      <div className="mt-6">

        <button
          onClick={() => onToggle(task.id)}
          disabled={task.completed}
          className={`
            w-full
            py-3
            rounded-xl
            font-medium
            flex
            items-center
            justify-center
            gap-2
            transition-all
            duration-300
            ${
              task.completed
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 hover:scale-[1.02] text-white"
            }
          `}
        >
          <CircleCheck size={18} />

          {task.completed
            ? "Completed"
            : "Mark Complete"}
        </button>

      </div>
    </div>
  );
}

export default TaskCard;