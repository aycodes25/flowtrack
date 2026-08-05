import {
  ListTodo,
  CheckCircle,
  Clock3,
  BarChart3,
} from "lucide-react";

import StatCard from "./StatCard";

function DashboardStats({
  totalTasks,
  completedTasks,
  pendingTasks,
  progressPercentage,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

      <StatCard
        title="Total Tasks"
        value={totalTasks}
        icon={<ListTodo size={28} />}
        color="bg-orange-100 text-orange-500"
      />

      <StatCard
        title="Completed"
        value={completedTasks}
        icon={<CheckCircle size={28} />}
        color="bg-green-100 text-green-600"
      />

      <StatCard
        title="Pending"
        value={pendingTasks}
        icon={<Clock3 size={28} />}
        color="bg-yellow-100 text-yellow-700"
      />

      <StatCard
        title="Progress"
        value={`${progressPercentage}%`}
        icon={<BarChart3 size={28} />}
        color="bg-blue-100 text-blue-600"
      />

    </div>
  );
}

export default DashboardStats;