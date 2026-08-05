import {
  Users,
  CheckCircle2,
  Clock3,
  Flag,
} from "lucide-react";

import StatCard from "./StatCard";

function ManagerStats({
  totalEmployees,
  completedTasks,
  pendingTasks,
  riskTasks,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

      <StatCard
        title="Employees"
        value={totalEmployees}
        icon={<Users size={28} />}
        color="bg-orange-100 text-orange-500"
      />

      <StatCard
        title="Completed"
        value={completedTasks}
        icon={<CheckCircle2 size={28} />}
        color="bg-green-100 text-green-600"
      />

      <StatCard
        title="Pending"
        value={pendingTasks}
        icon={<Clock3 size={28} />}
        color="bg-yellow-100 text-yellow-700"
      />

      <StatCard
        title="At Risk"
        value={riskTasks}
        icon={<Flag size={28} />}
        color="bg-red-100 text-red-600"
      />

    </div>
  );
}

export default ManagerStats;